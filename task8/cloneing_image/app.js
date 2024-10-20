window.onload = function () {
  const imageToClone = document.getElementById("image-to-clone");

  const clonedImage = imageToClone.cloneNode(true);

  imageToClone.style.position = "absolute";
  imageToClone.style.bottom = "10px";
  imageToClone.style.left = "10px";

  clonedImage.style.position = "absolute";
  clonedImage.style.top = "10px";
  clonedImage.style.right = "10px";

  document.body.appendChild(clonedImage);
};
