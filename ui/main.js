console.log('Loaded!');
console.log('how are you');

var img=document.getElementById('madi');

var marginLeft =0;
function moveRight(){
    marginLeft+=5;
    img.style.marginLeft = marginLeft + 'px';
    
}
img.onclick= function(){
    
    var interval= setInterval(moveRight , 50);
    
};