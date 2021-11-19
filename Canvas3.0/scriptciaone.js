function buttonFunction() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "orange";
    ctx.fillRect(0, 0, 200, 200);
    ctx.fillStyle = "yellow";
    
    let x = false;
    if (!x) {
        document.getElementById("text").innerHTML = "Prontone"
        x = true
    } else {
        document.getElementById("text").innerHTML = "Ciaone"
        x = false
    }
}