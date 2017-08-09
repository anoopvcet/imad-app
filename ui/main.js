// for moving image on click

var img=document.getElementById('madi');
var img1=document.getElementById('madi1');
var img2=document.getElementById('madi2');
var img3=document.getElementById('madi3');
var img4=document.getElementById('madi4');
var img5=document.getElementById('madi5');

var marginLeft =0;
function moveRight(imag){
    marginLeft+=1;
    imag.style.marginLeft = marginLeft + 'px';
    
    
}
img.onclick= function(){
    
    
    
    var interval= setInterval(moveRight(img) , 50);
    
};
img1.onclick= function(){
    
    
    
    var interval= setInterval(moveRight(img1) , 50);
    
};
img2.onclick= function(){
    
    
    
    var interval= setInterval(moveRight(img2) , 50);
    
};
img3.onclick= function(){
    
    
    
    var interval= setInterval(moveRight(img3) , 50);
    
};
img4.onclick= function(){
    
    
    
    var interval= setInterval(moveRight(img4) , 50);
    
};
img5.onclick= function(){
    
    
    
    var interval= setInterval(moveRight(img5) , 50);
    
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
    
    
};


