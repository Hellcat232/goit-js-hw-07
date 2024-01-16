const input = document.querySelector("input");
const output = document.querySelector("span");

input.addEventListener("input", typeInputHandler);

function typeInputHandler() {
  const type = input.value.trim();
  if (type === "") type = "Anonymous";

  output.innerHTML = type;
}
