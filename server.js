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
Despite the Taliban's threats, Yousafzai remains a staunch advocate for the power of education. On October 10, 2013, in acknowledgement of her work, the European Parliament awarded Yousafzai the Sakharov Prize for Freedom of Thought. That same year, she was nominated for a Nobel Peace Prize.  She didn't win the prize, but was named a nominee again in March 2014. In August of the same year, Leanin.Org held a live chat on Facebook with Sheryl Sandberg and Yousafzai about the importance of education for girls around the world.  She talked about her story, her inspiration and family, her plans for the future and advocacy, and she answered a variety of inquiries from the social networks.
<br> 
In October 2014, Yousafzai received the Nobel Peace Prize, along with Indian childrens rights activist Kailash Satyarthi. At age 17, she became the youngest person to receive the Nobel Peace Prize. In congratulating Yousafzai, Pakistani Prime Minister Nawaz Sharif said She is the pride of Pakistan, she has made her countrymen proud. Her achievement is unparalleled and unequaled. Girls and boys of the world should take lead from her struggle and commitment. U.N. Secretary General Ban Ki moon described her as a brave and gentle advocate of peace who through the simple act of going to school became a global teacher.
<br>
For her 18th birthday on July 12, 2015, also called Malala Day, the young activist continued to take action on global education by opening a school for Syrian refugee girls in Lebanon. Its expenses covered by the Malala Fund, the school was designed to admit nearly 200 girls from the ages of 14 to 18. Today on my first day as an adult, on behalf of the world's children, I demand of leaders we must invest in books instead of bullets, Yousafzai proclaimed in one of the schools classrooms.
<br>
That day, she also asked her supporters on The Malala Fund website Post a photo of yourself holding up your favorite book and share why YOU choose BooksNotBullets  and tell world leaders to fund the real weapon for change, education The teenage activist wrote The shocking truth is that world leaders have the money to fully fund primary AND secondary education around the world  but they are choosing to spend it on other things, like their military budgets. In fact, if the whole world stopped spending money on the military for just 8 days, we could have the 39 billion still needed to provide 12 years of free, quality education to every child on the planet.
<br>
In October 2015, a documentary about Yousafzais life was released. HE NAMED ME MALALA, directed by Davis Guggenheim An Inconvenient Truth, Waiting for Superman, gives viewers an intimate look into the life of Malala, her family, and her commitment to supporting education for girls around the world. 

In April 2017, United Nations SecretaryGeneral Antonio Guterres appointed Yousafzai as a U.N. Messenger of Peace to promote girls education. The appointment is the highest honor given by the United Nations for an initial period of two years. Yousafzai was also given honorary Canadian citizenship in April. She is the sixth person and the youngest in the countrys history to receive the honor. 

</p>`
    
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
