function buttonFunction() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "orange";
  ctx.fillRect(0, 0, 200, 200);
  ctx.fillStyle = "yellow";

  /*  
  ctx.fillRect(0, 0, 10, 10);
  ctx.fillRect(20, 20, 10, 10);
  ctx.fillRect(40, 40, 10, 10);
  ctx.fillRect(60, 60, 10, 10);
  ctx.fillRect(80, 80, 10, 10);
  ctx.fillRect(100, 100, 10, 10);

  ctx.fillRect(0, 100, 10, 10);
  ctx.fillRect(100, 0, 10, 10);
  ctx.fillRect(80, 20, 10, 10);
  ctx.fillRect(60, 40, 10, 10);
  ctx.fillRect(40, 60, 10, 10 );
  ctx.fillRect(20, 80, 10, 10);  
  */
  
  /*
  let x = 0;
  let y = 0;
  
  for (let i = 0; i < 6; i++) {
     ctx.fillRect(x , y, 10, 10);
     x += 20;
     y += 20;
  }
  
  let a = 100;
  let b = 0;

  for (let i = 0; i < 6; i++) {
    ctx.fillRect(a , b, 10, 10);
    a -= 20;
    b += 20; 
 }
 */
 /*
 let x = 0;
 let y = 0;
 let a = 150;
 let b = 0;

 for (let i = 0; i < 6; i++) {
   ctx.fillRect(x , y , 10 , 10);
   ctx.fillRect(a, b, 10, 10);
   x += 20;
   y += 20;
   a -= 20;
   b += 20;
 } 
 */

 let x = 0;
 let y= 0;
 let a = 0;

 for (let i = 100; i >0;i < 20) {
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

  for(let i = 100; i > 0; i - 20) {
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
    document.getElementById("text").innerHTML = "prontone"
    x = true
  } else {
    document.getElementById("text").innerHTML = "ciaone"
    x = false
  }
}