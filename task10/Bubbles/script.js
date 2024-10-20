const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawRandomCircles(numCircles, color) {
  for (let i = 0; i < numCircles; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 40 + 10;
    //////
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = color;
    ctx.stroke();
  }
}

document.getElementById("generateBtn").addEventListener("click", function () {
  const color = document.getElementById("circleColor").value;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawRandomCircles(100, color);
});
