function buttonFunction() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 150, 75);
  ctx.fillStyle = "#00FF00";

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

 let x = 0;
 let y = 0;
 let a = 100;
 let b = 0;

 for (let i = 0; i < 6; i++) {
   ctx.fillRect(x , y , 10 , 10);
   ctx.fillRect(a, b, 10, 10);
   x += 20;
   y += 20;
   a -= 20;
   b += 20;
 }
 
}
function buttonFunction2() {
  
}