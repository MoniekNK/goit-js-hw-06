const widget = document.querySelector(".widget");
const colorText = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  widget.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
});
