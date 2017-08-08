var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
 'article-one': {
    title:'article One |Anoop V',
    heading:"<h1> Malala Yousafzai </h1>",
    date:'Sep 15th',
    content:`<p>
    
        <h1>Women's Rights Activist, Children's Activist, Activist since 1997</h1>
                    As a young girl, Malala Yousafzai defied the Taliban in Pakistan and demanded that girls be allowed to receive an education. She was shot in the head by a Taliban gunman in 2012, but survived and went on to receive the Nobel Peace Prize.

                </p>
                <p>
                    
                    <h1> Synopsis </h1>

                    Malala Yousafzai was born on July 12, 1997, in Mingora, Pakistan. As a child, she became an advocate for girls' education, which resulted in the Taliban issuing a death threat against her. On October 9, 2012, a gunman shot Malala when she was traveling home from school. She survived, and has continued to speak out on the importance of education. She was nominated for a Nobel Peace Prize in 2013. In  2014,  she was nominated again and won, becoming the youngest person to receive the Nobel Peace Prize.
                </p>
                
                <p>
                    
                    <h1>Early Life</h1>

On July 12, 1997, Malala Yousafzai was born in Mingora, Pakistan, located in the country's Swat Valley. For the first few years of her life, her hometown remained a popular tourist spot that was known for its summer festivals. However, the area began to change as the Taliban tried to take control.
                </p>
                <p>
               <h1> Initial Activism</h1> 

Yousafzai attended a school that her father, Ziauddin Yousafzai, had founded. After the Taliban began attacking girls' schools in Swat, Malala gave a speech in Peshawar, Pakistan, in September 2008. The title of her talk was, "How dare the Taliban take away my basic right to education?"

In early 2009, Yousafzai began blogging for the BBC about living under the Taliban's threats to deny her an education. In order to hide her identity, she used the name Gul Makai. However, she was revealed to be the BBC blogger in December of that year.</p>`
    
},
 'article-two':{title:'article two |Anoop V',
    heading:"Article two",
    date:'Sep 15th',
    content:`<p>
                    this is article two. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.
                </p>
                <p>
                    
                    this is article two. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.
                </p>
                
                <p>
                    
                    this is article two. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.
                </p>`},
 'article-three':{title:'article three |Anoop V',
    heading:"Article three",
    date:'Sep 15th',
    content:`<p>
                    this is article three. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.
                </p>
                <p>
                    
                    this is article three. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.
                </p>
                
                <p>
                    
                    this is article three. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.this is article one. pay attention.
                </p>`}};

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
                <a href="/article-one">article-one</a>
               
            </div>
            <div>
                <a href="/article-two">article-two</a>
               
            </div>
            <div>
                <a href="/article-three">article-three</a>
               
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
               ${content}
               
                </div>
            </div>
        </body>
            
</html>`;
    return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName= req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});




app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
