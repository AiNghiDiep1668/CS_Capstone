var r= document.querySelector("#sq_block");
r.style.width = "40px";
r.style.height = "40px";
r.style.background = "cyan";
var currentMargin = 0;
r.style.position=absolute;






function nextFrame()
{
    currentMargin++;
    r.style.margin = currentMargin + "px";
 
}
var animation = setInterval(nextFrame,10);

function changeColor()
{
    if (currentMargin==100){
        document.write(5 + 6);
        //r.style.background = "green";
    }
}


function start() {
    clearInterval(animation);
    animation = setInterval(nextFrame, 10);
  }


function reset()
{
    currentMargin=0;
    r.style.margin= "0px";
    clearInterval(animation);


}

document.


