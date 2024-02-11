const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", typeInputHandler);

function typeInputHandler() {
  const inputType = input.value.trim();
  if (inputType === "") {
    return (output.textContent = "Anonymous");
  } else {
    output.textContent = inputType;
  }
}
