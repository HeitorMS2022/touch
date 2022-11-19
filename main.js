canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
var cor = "cyan";
var widthdalinha = 2;

var touchlastpositionX , touchlastpositionY;
var larguradatela = screen.width;
var larguradocanvas = screen.width - 70;
var alturadocanvas = screen.height - 300;
if (larguradatela < 992)
{
    document.getElementById("canvas").width = larguradocanvas;
    document.getElementById("canvas").height = alturadocanvas;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart" , verificar1);

function verificar1(e)
{
    cor = document.getElementById("color").value;
    console.log = "touchstart";
    touchlastpositionX = e.touches[0].clientX - canvas.offsetLeft;
    touchlastpositionY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove" , verificar2);

function verificar2(e)
{
    widthdalinha = document.getElementById("comprimento").value;
    current_position_touchX = e.touches[0].clientX - canvas.offsetLeft;
    current_position_touchY = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = widthdalinha;

        ctx.moveTo(touchlastpositionX , touchlastpositionY);

        ctx.lineTo(current_position_touchX , current_position_touchY);
        ctx.stroke();

    touchlastpositionX = current_position_touchX;
    touchlastpositionY = current_position_touchY;
}