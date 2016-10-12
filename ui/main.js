console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML = ':)';

var img = document.getEementById('madi');
var marginLeft=0;
function moveRight()
    {
    marginLeft+=1;
    img.style.marginLeft+='px';
    }
img.onclick = function()
    {
    var interval = setInterval(moveRight,50);
    };

