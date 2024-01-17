function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");

btn.addEventListener("click", onBtnHandler);

function onBtnHandler() {
  const body = document.querySelector("body");
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  const outputValueColor = document.querySelector(".color");
  outputValueColor.textContent = newColor;
}
