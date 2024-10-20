function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function cloneDiv() {
  let originalDiv = document.getElementById("originalDiv");

  let clonedDiv = originalDiv.cloneNode(true);

  clonedDiv.style.backgroundColor = getRandomColor();

  clonedDiv.textContent = "I'm a clone!";

  document.body.appendChild(clonedDiv);
}

document.getElementById("originalDiv").addEventListener("click", cloneDiv);
