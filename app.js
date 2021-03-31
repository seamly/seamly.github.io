// Variables
const patternSelect = document.getElementById("select-my-pattern");
const okButton = document.getElementById("ok-button");
const cancelButton = document.getElementById("cancel-button");
const convertButton = document.querySelectorAll(".convert-button");
const exitButton = document.getElementById("exit-button");

// Redirect functions
const selectRedirect = () => {
  window.location.href = "measurements.html";
};

const okRedirect = () => {
  window.location.href = "convert-my-pattern.html";
};

const cancelRedirect = () => {
  window.location.href = "index.html";
};

const handleConvert = () => {
  window.location.href = "converting.html";
};

const exitRedirect = () => {
  window.location.href = "index.html";
};

// Check if patternSelect exists on the page and return accordingly
patternSelect === null
  ? ""
  : patternSelect.addEventListener("change", selectRedirect);

// Check if okButton exists on the page and return accordingly
okButton === null ? "" : okButton.addEventListener("click", okRedirect);

// Check if cancelButton exists on the page and return accordingly
cancelButton === null
  ? ""
  : cancelButton.addEventListener("click", cancelRedirect);

// Loop over nodeList and add an event listener to each convertButton
convertButton.forEach(button => {
  button.addEventListener("click", handleConvert);
});

// Progress bar
window.addEventListener("load", () => {
  let i = 0;

  if (i === 0) {
    i = 1;
    let progressBar = document.getElementById("progress-bar");
    let width = 1;
    let id = setInterval(frame, 2);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        progressBar.style.width = width + "%";
        window.location.href = "download-files.html";
      }
    }
  }
});

// Check if exitButton exists on the page and return accordingly
exitButton === null ? "" : exitButton.addEventListener("click", exitRedirect);
