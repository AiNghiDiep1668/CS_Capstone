//var p= document.getElementById("changeMe");
var p= document.querySelector("#changeMe");
p.innerHTML = "text";
p.style.background = "pink";
p.style.color="green";
p.style.textAlign = "center";

function makeParagraphBlue(){
    p.style.background='blue';
}

var currentMargin = 0;

function nextFrame()
{
    currentMargin++;
    p.style.margin = currentMargin + "px"; 
}

var animation = setInterval(nextFrame,20);

function reset()
{
    currentMargin=0;
    p.style.margin= "0px";
    clearInterval(animation);

}
document.querySelector("#stop").onclick=reset;

p.onclick = makeParagraphBlue;