var canvas = document.getElementById("canv1");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(0,0);
var xCoord=0;
var yCoord=0;
var lineDrawing = setInterval(function () {
    xCoord+=10;
    yCoord+=10;
    ctx.lineTo(xCoord,yCoord);
    ctx.stroke();
    if(xCoord>=300){
        clearInterval(lineDrawing)
        alert("animation ended");
    }
  }, 100);