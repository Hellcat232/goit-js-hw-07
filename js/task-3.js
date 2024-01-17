const input = document.querySelector("input");
const output = document.querySelector("span");

input.addEventListener("input", typeInputHandler);

function typeInputHandler() {
  const inputType = input.value.trim();
  if (inputType === "") {
    return (inputType = "Anonymous");
  } else {
    output.innerHTML = inputType;
  }
}
