let canvas = document.getElementById("memeCanvas");
let ctx = canvas.getContext("2d");

let image = new Image();
image.src = "family.jpg";
image.onload = function () {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  ctx.font = "bold 36px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.shadowColor = "black";
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowBlur = 5;

  ctx.fillText("It's Gonna Be Okay", canvas.width / 2, canvas.height - 30);
};
