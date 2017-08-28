// for moving image on click

var img=document.getElementById('madi');


var marginLeft =0;
function moveRight(imag){
    marginLeft+=1;
    img.style.marginLeft = marginLeft + 'px';
    
    
}
img.onclick= function(){
    
    
    
    var interval= setInterval(moveRight , 50);
    
};


//for incrementing counter on click of button
var button = document.getElementById('counter');
button.onclick=function(){
    var request= new XMLHttpRequest();
    
    request.onreadystatechange = function()
    {
     if (request.readyState===  XMLHttpRequest.DONE)
     {
         if (request.status===200)
         {
             var counter=request.responseText;
             var span=document.getElementById('count');
             span.innerHTML=counter.toString();
         }
         
     } 
        
    };
    
    request.open('GET', 'http://anoopvcet.imad.hasura-app.io/counter',true);
    request.send(null);
    
};



// for addi g to list on clicking submit
   var submit =document.getElementById('submit_btn');
submit.onclick = function()
{
    
    var request= new XMLHttpRequest();
    
    request.onreadystatechange = function()
    {
     if (request.readyState===  XMLHttpRequest.DONE)
     {
         if (request.status===200)
         { 
              var names =request.responseText;
             names=JSON.parse(names);
    var list='';
         for(var i=0 ; i<names.length ; i++)
    {
        
      list+='<li>'+names[i]+'</li>';  
        
        
    }
    
    var ul= document.getElementById('namelist');
    ul.innerHTML= list;
             }
         
     } 
        
    };
    var nameInput= document.getElementById('name');
    var name =nameInput.value;
    
    request.open('GET', 'http://anoopvcet.imad.hasura-app.io/submit-name?name='+ name ,true);
    request.send(null);
    
    
    
    //submit username and password
    var submit =document.getElementById('submit_btn1');
submit.onclick = function()
{
    
    var request= new XMLHttpRequest();
    
    request.onreadystatechange = function()
    {
     if (request.readyState===  XMLHttpRequest.DONE)
     {
         if (request.status===200)
         {
             alert("logged in sucessfully");
         }else if (request.status===403)
         {
             alert("Username/password is incorrect");
         }
         else if(request.status===500)
         {
             alert("something went wrong with the server");
         }
         
     } 
        
    };
    var username= document.getElementById('username').value;
    var password= document.getElementById('password').value;
    request.open('POST', 'http://anoopvcet.imad.hasura-app.io/login' ,true);
    request.setRequestHeader('content-type','application/json');
    request.send(JSON.stringify({username:username, password:password}));
    
};



