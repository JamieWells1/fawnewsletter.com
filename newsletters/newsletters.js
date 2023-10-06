function downloadLocalPDF() {
  // Use forward slashes and remove extra quotes in the path
  const localPDFPath = "C:/newsletter-pdfs/data-types.pdf";

  const anchor = document.createElement("a");

  // Set the href attribute to the path of your local PDF file
  anchor.href = localPDFPath;

  // Set the download attribute to specify the file name users will see
  anchor.download = "data-types.pdf";

  // Trigger a click event on the anchor element to start the download
  anchor.click();

  // Remove the anchor element from the DOM
  anchor.remove();
}

// Attach the function to the button click event
const downloadButton = document.getElementById("downloadButton");
downloadButton.addEventListener("click", downloadLocalPDF);
