function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divBox = document.querySelector("#boxes");

const input = document.querySelector("input");

const createBtn = document.querySelector("[data-create]");

const destroyBtn = document.querySelector("[data-destroy]");

let boxWidth = 30;
let boxHeight = 30;

createBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (input.value < 1 && input.value > 100) return input.value === "";
  const values = input.value;
  createBoxes(values);
});

function createBoxes() {
  const createBoxes = document.createElement("div");
  createBoxes.style.backgroundColor = getRandomHexColor();
  createBoxes.style.width = boxWidth;
  createBoxes.style.height = boxHeight;
  createBoxes.innerHTML;
  divBox.append(createBoxes.children);
}
