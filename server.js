var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool =require('pg').Pool;
var crypto = require('crypto');
var bodyParser= require('body-parser');
var session = require('express-session');



var config={
    user: 'anoopvcet',
    database:'anoopvcet',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD,
};


var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(session({
    secret:'someRandomSecretValue',
    cookie:{maxAge :1000*60*24*30}
}));



function createTemplate(data)
{
    var title= data.title;
    var heading= data.heading;
    var date= data.date;
    var content = data.content;

var htmltemplate = 
`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width initial-sale=1"/>
       <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                <a href="/">home</a>
               
            </div>
            <div>
                <a href="/article/article-one">article-one</a>
               
            </div>
            <div>
                <a href="/article/article-two">article-two</a>
               
            </div>
            <div>
                <a href="/article/article-three">article-three</a>
               
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date.toDateString()}
            </div>
            <div>
               ${content}
               
                </div>
            </div>
        </body>
            
</html>`;
    return htmltemplate;
}


var counter=0;
app.get('/counter', function(req,res){
counter+=1;
res.send(counter.toString());
    
});

var Pool= new Pool(config);


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var names=[];
app.get('/submit-name', function(req,res)
{
var name= req.query.name;
if(name!==""){
names.push(name);}
res.send(JSON.stringify(names));
} );

function hash(input, salt){
  var hashed = crypto.pbkdf2Sync(input,salt,1000,512, 'sha512');
return ['pbkdf2','1000',salt, hashed.toString('hex')].join('$');
}


app.post('/create-user',function(req,res){
    var username= req.body.username;
    var password= req.body.password;
    var salt = crypto.RandomBytes(128).toString('hex');
    var dbString= hash(password,salt);
    pool.query('INSERT INTO "user" (username, password) VALUES($1,$2)', [username,dbString], function(err,result){
        
        if(err){
           res.status(500).send(err.toString());
       }
       else{
           
               res.send('User sucessfully created'+ username);
           }
        
    });
});


app.post('/login',function(req,res){
    var username= req.body.username;
    var password= req.body.password;
    

    Pool.query('SELECT * FROM "user" WHERE username= $1',[username], function(err,result){
        
        if(err){
           res.status(500).send(err.toString());
       }
       else{
           if(result.rows.length===0){
               res.status(403).send('username/password is invalid');
           }
           else{
               var dbString =result.rows[0].password;
              var salt= dbString.split('$')[2];
              
              var hashedPassword =hash(password,salt);
              if(hashedPassword===dbString){
            //set session  
              req.session.auth={userId:result.rows[0].id};
              
              
               res.send('welcome');
           }
           else{
               res.status(403).send('username/password is invalid');
           }
               
           }
           
               
           }
        
    });
});


app.get('/check-login',function(req,res){
    if(req.session && req.session.auth&& req.session.auth.userId){
        res.send('you are logged in:'+req.session.auth.userId.toString());
    }else{
        res.send('You are not logged in');
    }
});

app.get('/logout', function (req, res) {
   delete req.session.auth;
   res.send('<html><body>Logged out!<br/><br/><a href="/">Back to home</a></body></html>');
});


app.get('/hash/:input', function(req,res){
  var hashedString= hash(req.params.input, 'this-is-some-random-value');
res.send(hashedString);
}
);

app.get('/get-articles', function (req, res) {
   // make a select request
   // return a response with the results
   pool.query('SELECT * FROM article ORDER BY date DESC', function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

app.get('/get-comments/:articleName', function (req, res) {
   // make a select request
   // return a response with the results
   pool.query('SELECT comment.*, "user".username FROM article, comment, "user" WHERE article.title = $1 AND article.id = comment.article_id AND comment.user_id = "user".id ORDER BY comment.timestamp DESC', [req.params.articleName], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

app.post('/submit-comment/:articleName', function (req, res) {
   // Check if the user is logged in
    if (req.session && req.session.auth && req.session.auth.userId) {
        // First check if the article exists and get the article-id
        pool.query('SELECT * from article where title = $1', [req.params.articleName], function (err, result) {
            if (err) {
                res.status(500).send(err.toString());
            } else {
                if (result.rows.length === 0) {
                    res.status(400).send('Article not found');
                } else {
                    var articleId = result.rows[0].id;
                    // Now insert the right comment for this article
                    pool.query(
                        "INSERT INTO comment (comment, article_id, user_id) VALUES ($1, $2, $3)",
                        [req.body.comment, articleId, req.session.auth.userId],
                        function (err, result) {
                            if (err) {
                                res.status(500).send(err.toString());
                            } else {
                                res.status(200).send('Comment inserted!')
                            }
                        });
                }
            }
       });     
    } else {
        res.status(403).send('Only logged in users can comment');
    }
});








app.get('/article/:articleName',function(req,res){
    var articleName= req.params.articleName;
    Pool.query("select * from article WHERE title='" +req.params.articleName+ "'", function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }
       else{
           if(result.rows.length===0){
               res.status(404).send('Article not found');
           }
           else{
               var articleData=result.rows[0];
               res.send(createTemplate(articleData));
           }
       }
   }) ; 
   
});


app.get('/ui/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', req.params.fileName));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/papu.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'papu.png'));
});

app.get('/ui/papu1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'papu1.jpg'));
});
app.get('/ui/papu2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'papu2.jpg'));
});
app.get('/ui/papu3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'papu3.jpg'));
});
app.get('/ui/papu4.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'papu4.jpg'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
