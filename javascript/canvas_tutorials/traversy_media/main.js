const cavas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// ctx.fillStyle = "red";
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle = "blue";
// ctx.fillRect(40, 40, 150, 100);
// ctx.strokeStyle = "green";
// ctx.lineWidth = 5;
// ctx.strokeRect(100, 200, 150, 150);

// ctx.clearRect(25, 25, 120, 90);
// ctx.font = "30px Arial";
// ctx.fillStyle = "purple";
// ctx.fillText("Hello", 400, 50);
// ctx.lineWidth = 1;
// ctx.strokeText("Hey", 400, 100);

// PATHS

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(100, 200);
ctx.lineTo(50, 50);
// ctx.closePath();
ctx.stroke();
ctx.fillStyle = "coral";
ctx.fill();

ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(150, 200);
ctx.lineTo(250, 200);
ctx.closePath();
ctx.stroke();
