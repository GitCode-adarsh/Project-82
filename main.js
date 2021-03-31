var mousevent = "empty";
var lastpositionofX , lastpositionofY;

canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

var color= "red";
widthofline = 2;

canvas.addEventListener("mousedown", mdown);

function mdown(e){

    color = document.getElementById("color").value;
    widthofline = document.getElementById("width").value;
    radius = document.getElementById("radius").value;

    mousevent = "mousedown";
    
}

canvas.addEventListener("mousemove", mmove);

function mmove(e){
     currentpositionofX = e.clientX - canvas.offsetLeft ;
     currentpositionofY = e.clientY - canvas.offsetTop ;

     if(mousevent == "mousedown"){
        console.log("Current position of X = " + currentpositionofX + " Current position of Y = " + currentpositionofY);
        ctx.beginPath();
        ctx.lineWidth = widthofline;
        ctx.strokeStyle = color;
        ctx.arc(currentpositionofX, currentpositionofY, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseup", mup);

function mup(e){
    mousevent = "mouseup" ;
}

canvas.addEventListener("mouseleave", mleave);

function mleave(e){
    mousevent = "mouseleave";
}
function cleararea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}