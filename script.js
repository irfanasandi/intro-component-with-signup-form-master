const form = document.querySelector(".main-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const arr = [firstName, lastName, email, password];
  arr.map((field) => {
    if (!field.value) {
      setError(
        field,
        field.getAttribute("placeholder"),
        " cannot be empty boss !"
      );
    } else {
      removeError(field);
    }
    if (field === email && field.value != "") {
      if (!validateEmail(field.value)) {
        setError(field, field.value, "is not a valid email");
      } else {
        removeError(field);
      }
    }
  });
});

function setError(field, fieldName, message) {
  const formControl = field.parentNode;
  formControl.classList.add("error");
  const small = field.nextElementSibling;
  small.innerText = `${fieldName} ${message}`;
  // get after element
  const exclam = window
    .getComputedStyle(formControl, "after")
    .getPropertyValue("display");
}

function removeError(field) {
  const formControl = field.parentNode;
  formControl.classList.remove("error");
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
