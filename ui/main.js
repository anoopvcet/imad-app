console.log('Loaded!');
console.log('how are you');

var img=document.getElementById('madi');

var marginLeft =0;
function moveRight(){
    marginLeft+=1;
    img.style.marginLeft = marginLeft + 'px';
    
}
img.onclick= function(){
    
    var interval= setInterval(moveRight , 50);
    
};

var button = document.getElementById('counter');
button.onclick=function(){
    
    
    counter+=1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};