document.addEventListener('DOMContentLoaded', function() {
  const boxes = document.querySelectorAll('.boxes > div');

  boxes.forEach(function(box, index) {
    box.addEventListener('click', function() {
      if (!box.classList.contains('active')) {
        boxes.forEach(function(otherBox) {
          otherBox.classList.remove('active');
        });
        box.classList.add('active');
      }
    });

    if (index === 0) {
      box.classList.add('active');
    }
  });

  function downloadPDF() {
    var fileUrl = "https://drive.google.com/file/d/1GWpQNUcDCh1YECMoV8YsHUsyguAfvZFQ/view?usp=sharing";

    var link = document.createElement("a");

    link.href = fileUrl;

    link.setAttribute("target", "_blank"); // Open link in a new tab

    link.setAttribute("download", "resume.pdf");

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  }

  const downloadButton = document.querySelector('.download-button');
  downloadButton.addEventListener('click', downloadPDF);
});
