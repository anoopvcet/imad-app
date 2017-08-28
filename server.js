var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool =require('pg').Pool;
var crypto = require('crypto');
var bodyParser= require('body-parser');




var config={
    user: 'anoopvcet',
    database:'anoopvcet',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD,
};


var app = express();
app.use(morgan('combined'));
app.use(bodyParser.JSON())



var articles={
 'article-one': {
    title:'article One |Anoop V',
    heading:"<h1> Malala Yousafzai </h1>",
    date:'12 July 1997 (age 20), Mingora, Pakistan',
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

In early 2009, Yousafzai began blogging for the BBC about living under the Taliban's threats to deny her an education. In order to hide her identity, she used the name Gul Makai. However, she was revealed to be the BBC blogger in December of that year.With a growing public platform, Yousafzai continued to speak out about her right, and the right of all women, to an education. Her activism resulted in a nomination for the International Children's Peace Prize in 2011. That same year, she was awarded Pakistan's National Youth Peace Prize.</p>
<p>

<h1>Targeted by the Taliban</h1>
Malala and her family learned that the Taliban had issued a death threat against her because of her activism. Though Malala was frightened for the safety of her father an antiTaliban activist. she and her family initially felt that the fundamentalist group would not actually harm a child.

On October 9, 2012, when 15year old Malala was riding a bus with friends on their way home from school, a masked gunman boarded the bus and demanded to know which girl was Malala. When her friends looked toward Malala, her location was given away. The gunman fired at her, hitting Malala in the left side of her head, the bullet then traveled down her neck. Two other girls were also injured in the attack.
<br>
The shooting left Malala in critical condition, so she was flown to a military hospital in Peshawar. A portion of her skull was removed to treat her swelling brain. To receive further care, she was transferred to Birmingham, England.

</p>
<p>
<h1>After the Attack</h1

Once she was in the United Kingdom, Yousafzai was taken out of a medically induced coma. Though she would require multiple surgeries including repair of a facial nerve to fix the paralyzed left side of her face she had suffered no major brain damage. In March 2013, she was able to begin attending school in Birmingham.

The shooting resulted in a massive outpouring of support for Yousafzai, which continued during her recovery. She gave a speech at the United Nations on her 16th birthday, in 2013. She has also written an autobiography, I Am Malala: The Girl Who Stood Up for Education and Was Shot by the Taliban, which was released in October 2013. Unfortunately, the Taliban still considers Yousafzai a target.
<br>
<br>
Despite the Taliban's threats, Yousafzai remains a staunch advocate for the power of education. On October 10, 2013, in acknowledgement of her work, the European Parliament awarded Yousafzai the Sakharov Prize for Freedom of Thought. That same year, she was nominated for a Nobel Peace Prize.  She didn't win the prize, but was named a nominee again in March 2014. In August of the same year, Leanin.Org held a live chat on Facebook with Sheryl Sandberg and Yousafzai about the importance of education for girls around the world.  She talked about her story, her inspiration and family, her plans for the future and advocacy, and she answered a variety of inquiries from the social networks.
<br> 
<br>
In October 2014, Yousafzai received the Nobel Peace Prize, along with Indian childrens rights activist Kailash Satyarthi. At age 17, she became the youngest person to receive the Nobel Peace Prize. In congratulating Yousafzai, Pakistani Prime Minister Nawaz Sharif said She is the pride of Pakistan, she has made her countrymen proud. Her achievement is unparalleled and unequaled. Girls and boys of the world should take lead from her struggle and commitment. U.N. Secretary General Ban Ki moon described her as a brave and gentle advocate of peace who through the simple act of going to school became a global teacher.
<br>
<br>
For her 18th birthday on July 12, 2015, also called Malala Day, the young activist continued to take action on global education by opening a school for Syrian refugee girls in Lebanon. Its expenses covered by the Malala Fund, the school was designed to admit nearly 200 girls from the ages of 14 to 18. Today on my first day as an adult, on behalf of the world's children, I demand of leaders we must invest in books instead of bullets, Yousafzai proclaimed in one of the schools classrooms.
<br>
<br>
        That day, she also asked her supporters on The Malala Fund website Post a photo of yourself holding up your favorite book and share why YOU choose BooksNotBullets  and tell world leaders to fund the real weapon for change, education The teenage activist wrote The shocking truth is that world leaders have the money to fully fund primary AND secondary education around the world  but they are choosing to spend it on other things, like their military budgets. In fact, if the whole world stopped spending money on the military for just 8 days, we could have the 39 billion still needed to provide 12 years of free, quality education to every child on the planet.
<br>
<br>
In October 2015, a documentary about Yousafzais life was released. HE NAMED ME MALALA, directed by Davis Guggenheim An Inconvenient Truth, Waiting for Superman, gives viewers an intimate look into the life of Malala, her family, and her commitment to supporting education for girls around the world. 

In April 2017, United Nations SecretaryGeneral Antonio Guterres appointed Yousafzai as a U.N. Messenger of Peace to promote girls education. The appointment is the highest honor given by the United Nations for an initial period of two years. Yousafzai was also given honorary Canadian citizenship in April. She is the sixth person and the youngest in the countrys history to receive the honor. 

</p>`
    
},
 'article-two':{title:'article two |Anoop V',
    heading:"Some Great quotes",
    date:'Sep 15th',
    content:`<p>
                    <ol>
                    <li> Be who you are and say what you feel, because those who mind dont matter and those who matter dont mind.

<br>
Dr. Seuss



<li> This too, shall pass.

<br>Anonymous



<li> Keep your eyes on the stars and your feet on the ground.

<br>Theodore Roosevelt

<li> The only person you should try to be better than is the person you were yesterday.

<br>Anonymous

<li> Never be bullied into silence. Never allow yourself to be made a victim. Accept no ones definition of your life, define yourself.

<br>Harvey Fierstein

<li> Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods.

<br>C.S. Lewis

<li> Never wrestle with a pig. You will get more and more dirty while the pig will be enjoying it
<br> Anoop V




</ol>


                </p>
               `},
 'article-three':{title:'article three |Anoop V',
    heading:"The Tinder Box",
    date:'Aug 8th',
    content:`<p>
                    A soldier came marching along the high road left, right... A left, right.. He had his knapsack on his back and a sword by his side, for he had been to the wars and was now returning home.<br><br>

An old Witch met him on the road. She was very ugly to look at... her bottom lip hung down to her breast.
<br><br>
Good evening, Soldier.. she said. What a fine sword and knapsack you have... You are the very picture of a fine soldier... You ought to have as much money as you can carry..
<br><br>
Thank you, old Witch, said the Soldier.
<br><br>
Do you see that great tree there? said the Witch, pointing to a tree beside them. It is hollow within. You must climb up to the top, and then you will see a hole through which you can let yourself down into the tree. I will tie a rope round your waist, so that I may be able to pull you up again when you call.
<br><br>
What shall I do down there? asked the Soldier.
<br><br>
Get money... answered the Witch. Listen... When you reach the bottom of the tree you will find yourself in a large hall, it is light there, for there are more than three hundred lamps burning. Then you will see three doors, which you can open, the keys are in the locks. If you go into the first room, you will see a great chest in the middle of the floor with a dog sitting upon it, he has eyes as large as saucers, but you neednt trouble about him. I will give you my blue check apron, which you must spread out on the floor, and then go back quickly and fetch the dog and set him upon it, open the chest and take as much money as you like. It is copper there. If you would rather have silver, you must go into the next room, where there is a dog with eyes as large as mill-wheels. But dont take any notice of him, just set him upon my apron, and help yourself to the money. If you prefer gold, you can get that too, if you go into the third room, and as much as you like to carry. But the dog that guards the chest there has eyes as large as the Round Tower at Copenhagen.. He is a savage dog, I can tell you, but you neednt be afraid of him either. Only, put him on my apron and he wont touch you, and you can take out of the chest as much gold as you like...
<br><br>
Come, this is not bad... said the Soldier. But what am I to give you, old Witch, for surely you are not going to do this for nothing?
<br><br>
Yes, I am.... replied the Witch. Not a single farthing will I take... For me you shall bring nothing but an old tinder box which my grandmother forgot last time she was down there.
<br><br>
Well, tie the rope round my waist ...said the Soldier.
<br><br>
Here it is, said the Witch, and here is my blue check apron.
<br><br>
Then the Soldier climbed up the tree, let himself down through the hole, and found himself standing, as the Witch had said, underground in the large hall, where the three hundred lamps were burning.
<br><br>
Well, he opened the first door. Ugh.. there sat the dog with eyes as big as saucers glaring at him.
<br><br>
You are a fine fellow... said the Soldier, and put him on the Witchs apron, took as much copper as his pockets could hold.., then he shut the chest, put the dog on it again, and went into the second room. Sure enough there sat the dog with eyes as large as mill wheels.
<br><br>
You had better not look at me so hard... said the Soldier. Your eyes will come out of their sockets...
<br><br>
And then he set the dog on the apron. When he saw all the silver in the chest, he threw away the copper he had taken, and filled his pockets and knapsack with nothing but silver.
<br><br>
Then he went into the third room. Horrors... the dog there had two eyes, each as large as the Round Tower at Copenhagen, spinning round in his head like wheels.
<br><br>
Good evening said the Soldier and saluted, for he had never seen a dog like this before. But when he had examined him more closely, he thought to himself Now then, Ive had enough of this... and put him down on the floor, and opened the chest. Heavens... what a heap of gold there was... With all that he could buy up the whole town, and all the sugar pigs, all the tin soldiers, whips and rocking horses in the whole world. Now he threw away all the silver with which he had filled his pockets and knapsack, and filled them with gold insteadyes, all his pockets, his knapsack, cap and boots even, so that he could hardly walk. Now he was rich indeed. He put the dog back upon the chest, shut the door, and then called up through the tree..
<br><br>
Now pull me up again, old Witch..
<br><br>
Have you got the tinder box also... asked the Witch.
<br><br>
Botheration.. said the Soldier, I had clean forgotten it... And then he went back and fetched it.
<br><br>
The Witch pulled him up, and there he stood again on the high road, with pockets, knapsack, cap and boots filled with gold.
<br><br>
What do you want to do with the tinder box? asked the Soldier.
<br><br>
That doesnt matter to you, replied the Witch. You have got your money, give me my tinder-box.
<br><br>
We ll see said the Soldier. Tell me at once what you want to do with it, or I will draw my sword, and cut off your head.
<br><br>
No... screamed the Witch.
<br><br>
The Soldier immediately cut off her head. That was the end of her! But he tied up all his gold in her apron, slung it like a bundle over his shoulder, put the tinderbox in his pocket, and set out towards the town.
<br><br>
It was a splendid town. He turned into the finest inn, ordered the best chamber and his favourite dinner, for now that he had so much money he was really rich.
<br><br>
It certainly occurred to the servant who had to clean his boots that they were astonishingly old boots for such a rich lord. But that was because he had not yet bought new ones, next day he appeared in respectable boots and fine clothes. Now, instead of a common soldier he had become a noble lord, and the people told him about all the grand doings of the town and the King, and what a beautiful Princess his daughter was.
<br><br>
How can one get to see her? asked the Soldier.
<br><br>
She is never to be seen at all. they told him, she lives in a great copper castle, surrounded by many walls and towers. No one except the King may go in or out, for it is prophesied that she will marry a common soldier, and the King cannot submit to that.
<br><br>
I should very much like to see her, thought the Soldier, but he could not get permission.
<br><br>
Now he lived very gaily, went to the theatre, drove in the Kings garden, and gave the poor a great deal of money, which was very nice of him he had experienced in former times how hard it is not to have a farthing in the world. Now he was rich, wore fine clothes, and made many friends, who all said that he was an excellent man, a real nobleman. And the Soldier liked that. But as he was always spending money, and never made any more, at last the day came when he had nothing left but two shillings, and he had to leave the beautiful rooms in which he had been living, and go into a little attic under the roof, and clean his own boots, and mend them with a darningneedle. None of his friends came to visit him there, for there were too many stairs to climb.
<br><br>
It was a dark evening, and he could not even buy a light. But all at once it flashed across him that there was a little end of tinder in the tinderbox, which he had taken from the hollow tree into which the Witch had helped him down. He found the box with the tinder in it but just as he was kindling a light, and had struck a spark out of the tinderbox, the door burst open, and the dog with eyes as large as saucers, which he had seen down in the tree, stood before him and said.
<br><br>
What does my lord command?
<br><br>
Whats the meaning of this? exclaimed the Soldier. This is a pretty kind of tinderbox, if I can get whatever I want like this. Get me money.. he cried to the dog, and hey, presto... he was off and back again, holding a great purse full of money in his mouth.
<br><br>
Now the Soldier knew what a wonderful tinder box this was. If he rubbed once, the dog that sat on the chest of copper appeared. if he rubbed twice, there came the dog that watched over the silver chest, and if he rubbed three times, the one that guarded the gold appeared. Now, the Soldier went down again to his beautiful rooms, and appeared once more in splendid clothes. All his friends immediately recognised him again, and paid him great court.
<br><br>
One day he thought to himself It is very strange that no one can get to see the Princess. They all say she is very pretty, but whats the use of that if she has to sit for ever in the great copper castle with all the towers? Can I not manage to see her somehow? Where is my tinder box and so he struck a spark, and, presto. there came the dog with eyes as large as saucers.
<br><br>
It is the middle of the night, I know, said the Soldier, but I should very much like to see the Princess for a moment.
<br><br>
The dog was already outside the door, and before the Soldier could look round, in he came with the Princess. She was lying asleep on the dogs back, and was so beautiful that anyone could see she was a real Princess. The Soldier really could not refrain from kissing her he was such a thorough Soldier. Then the dog ran back with the Princess. But when it was morning, and the King and Queen were drinking tea, the Princess said that the night before she had had such a strange dream about a dog and a Soldier. she had ridden on the dogs back, and the Soldier had kissed her.
<br><br>
That is certainly a fine story, said the Queen. But the next night one of the ladies in waiting was to watch at the Princess bed, to see if it was only a dream, or if it had actually happened.
<br><br>
The Soldier had an overpowering longing to see the Princess again, and so the dog came in the middle of the night and fetched her, running as fast as he could. But the lady in waiting slipped on soft rubber shoes and followed them. When she saw them disappear into a large house, she thought to herself. Now I know where it is and made a great cross on the door with a piece of chalk. Then she went home and lay down, and the dog came back also, with the Princess. But when he saw that a cross had been made on the door of the house where the Soldier lived, he took a piece of chalk also, and made crosses on all the doors in the town,  and that was very clever, for now the lady in waiting could not find the right house, as there were crosses on all the doors.
<br><br>
Early next morning the King, Queen, ladies in waiting, and officers came out to see where the Princess had been.
<br><br>
There it is said the King, when he saw the first door with a cross on it.
<br><br>
No, there it is, my dear said the Queen, when she likewise saw a door with a cross.
<br><br>
But here is one, and there is another. they all exclaimed,  wherever they looked there was a cross on the door. Then they realised that the sign would not help them at all.
<br><br>
But the Queen was an extremely clever woman, who could do a great deal more than just drive in a coach. She took her great golden scissors, cut up a piece of silk, and made a pretty little bag of it. This she filled with the grains of porridge oats, and tied it round the Princess neck, this done, she cut a little hole in the bag, so that the grains would strew the whole road wherever the Princess went.
<br><br>
In the night the dog came again, took the Princess on his back and ran away with her to the Soldier, who was very much in love with her, and would have liked to have been a Prince, so that he might have had her for his wife.
<br><br>
The dog did not notice how the grains were strewn right from the castle to the Soldiers window, where he ran up the wall with the Princess.
<br><br>
In the morning the King and the Queen saw plainly where their daughter had been, and they took the Soldier and put him into prison.
<br><br>
There he sat. Oh, how dark and dull it was there And they told him, Tomorrow you are to be hanged. Hearing that did not exactly cheer him, and he had left his tinder-box in the inn.
<br><br>
Next morning he could see through the iron grating in front of his little window how the people were hurrying out of the town to see him hanged. He heard the drums and saw the soldiers marching, all the people were running to and fro. Just below his window was a shoemakers apprentice, with leather apron and shoes, he was skipping along so merrily that one of his shoes flew off and fell against the wall, just where the Soldier was sitting peeping through the iron grating.
<br><br>
Oh, shoemakers boy, you neednt be in such a hurry said the Soldier to him. Theres nothing going on till I arrive. But if you will run back to the house where I lived, and fetch me my tinder-box, I will give you four shillings. But you must put your best foot foremost.
<br><br>
The shoemakers boy was very willing to earn four shillings, and fetched the tinderbox, gave it to the Soldier, and yes now you shall hear.
<br><br>
Outside the town a great scaffold had been erected, and all round were standing the soldiers, and hundreds of thousands of people. The King and Queen were sitting on a magnificent throne opposite the judges and the whole council.
<br><br>
The Soldier was already standing on the top of the ladder, but when they wanted to put the rope round his neck, he said that the fulfilment of one innocent request was always granted to a poor criminal before he underwent his punishment. He would so much like to smoke a small pipe of tobacco, it would be his last pipe in this world.
<br><br>
The King could not refuse him this, and so he took out his tinderbox, and rubbed it once, twice, three times. And lo, and behold I there stood all three dogs the one with eyes as large as saucers, the second with eyes as large as mill wheels, and the third with eyes each as large as the Round Tower of Copenhagen.
<br><br>
Help me now, so that I may not be hanged. cried the Soldier. And thereupon the dogs fell upon the judges and the whole council, seized some by the legs, others by the nose, and threw them so high into the air that they fell and were smashed into pieces.
<br><br>
I wont stand this said the King, but the largest dog seized him too, and the Queen as well, and threw them up after the others. This frightened the soldiers, and all the people cried Good Soldier, you shall be our King, and marry the beautiful Princess
<br><br>
Then they put the Soldier into the Kings coach, and the three dogs danced in front, crying Hurrah And the boys whistled and the soldiers presented arms.
<br><br>
The Princess came out of the copper castle, and became Queen and that pleased her very much.
<br><br>
The wedding festivities lasted for eight days, and the dogs sat at table and made eyes at everyone.
                </p>
                `}};

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
app.get('/test-db', function(req,res){
   Pool.query('SELECT * from test', function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }
       else{res.send(JSON.stringify(result.rows))}
   }) ;
});

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
    

    pool.query('SELECT * from "user" username= $1', function(err,result){
        
        if(err){
           res.status(500).send(err.toString());
       }
       else{
           if(result.rows.length===0){
               res.send(403).send('username/password is invalid');
           }
           else{
               var dbString =result.row[0].password;
              var salt= dbString.split('$')[2];
              
              var hashedPassword =hash(password,salt);
              if(hashedPassword===dbString){
               res.send('welcome'+username);
           }
           else{
               res.send(403).send('username/password is invalid');
           }
               
           }
           
               
           }
        
    });
});


app.get('/hash/:input', function(req,res){
  var hashedString= hash(req.params.input, 'this-is-some-random-value');
res.send(hashedString);
}
);










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
