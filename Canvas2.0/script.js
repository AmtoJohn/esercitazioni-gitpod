function buttonFunction() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "orange";
  ctx.fillRect(0, 0, 200, 200);
  ctx.fillStyle = "yellow";

 let x = 0;
 let y= 0;
 let a = 0;

 for (let i = 180; i >0;i -= 20) {
   ctx.fillRect(x , y, 10, 10);
   ctx.fillRect(i, a, 10, 10);
   x+=20;
   y+=20;
   a+=20;
 }
 
}
function buttonFunction2() 
{
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "orange";
  ctx.fillRect(0, 0, 200, 200);
  ctx.fillStyle = "yellow";

  let x = 0;
  let y = 0;
  let a = 0;

  for(let i = 190; i > 0; i -= 20) {
    ctx.fillRect(x, y , 10, 10);
    ctx.fillRect(i, a, 10, 10);
    x+=20;
    y+=20;
    a+=20;
  }

}

let x=false; 
function buttonFunction3() {
  if(!x) {
    document.getElementById("text").innerHTML = "Prontone"
    x = true
  } else {
    document.getElementById("text").innerHTML = "Ciaone"
    x = false
  }
}