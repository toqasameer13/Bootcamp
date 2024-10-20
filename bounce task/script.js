function updatePrintPreview() {
  const orientation = document.getElementById("orientation").value;
  const size = document.getElementById("size").value;
  const color = document.getElementById("color").value;

  let previewText = `Orientation: ${orientation}, Size: ${size}, Color: ${color}`;

  const printContent = document.getElementById("print-content");
  printContent.innerHTML = `<h3>Print Preview</h3>
                              <p>This is a sample content that will be printed.</p>
                              <p>${previewText}</p>`;

  if (orientation === "landscape") {
    printContent.style.width = "100%";
  } else {
    printContent.style.width = "210mm";
  }
}

function printDocument() {
  window.print();
}
