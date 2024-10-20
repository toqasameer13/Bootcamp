function applyStyles() {
  let paragraph = document.getElementById("styledParagraph");

  let fontFamily = document.querySelector(
    'input[name="fontFamily"]:checked'
  ).value;
  paragraph.style.fontFamily = fontFamily;

  let textAlign = document.querySelector(
    'input[name="textAlign"]:checked'
  ).value;
  paragraph.style.textAlign = textAlign;

  let lineHeight = document.querySelector(
    'input[name="lineHeight"]:checked'
  ).value;
  paragraph.style.lineHeight = lineHeight;

  let letterSpacing = document.querySelector(
    'input[name="letterSpacing"]:checked'
  ).value;
  paragraph.style.letterSpacing = letterSpacing;

  let textIndent = document.querySelector(
    'input[name="textIndent"]:checked'
  ).value;
  paragraph.style.textIndent = textIndent;

  let textTransform = document.querySelector(
    'input[name="textTransform"]:checked'
  ).value;
  paragraph.style.textTransform = textTransform;

  let textDecoration = document.querySelector(
    'input[name="textDecoration"]:checked'
  ).value;
  paragraph.style.textDecoration = textDecoration;

  let textBorder = document.querySelector(
    'input[name="textBorder"]:checked'
  ).value;
  paragraph.style.borderStyle = textBorder;

  let borderColor = document.querySelector(
    'input[name="Bordercolor"]:checked'
  ).value;
  paragraph.style.borderColor = borderColor;
}

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", applyStyles);
});
