const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormEvent);

function onFormEvent(event) {
  event.preventDefault();
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  const objData = {
    email,
    password,
  };
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  console.log(objData);
  form.reset();
}
