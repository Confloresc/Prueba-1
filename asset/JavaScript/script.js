const form = document.querySelector(".needs-validation");

form.addEventListener("submit", function (event) {
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add("was-validated");
});

const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("pwd");
const checkInput = document.getElementById("myCheck");

nombreInput.addEventListener("input", function () {
  if (nombreInput.value.length === 0) {
    nombreInput.setCustomValidity("Por favor ingresar el nombre");
  } else {
    nombreInput.setCustomValidity("");
  }
});

apellidoInput.addEventListener("input", function () {
  if (apellidoInput.value.length === 0) {
    apellidoInput.setCustomValidity("Por favor ingresar el apellido");
  } else {
    apellidoInput.setCustomValidity("");
  }
});

emailInput.addEventListener("input", function () {
  if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity(
      "Por favor ingresar un correo electrónico válido"
    );
  } else {
    emailInput.setCustomValidity("");
  }
});

passwordInput.addEventListener("input", function () {
  if (passwordInput.validity.patternMismatch) {
    passwordInput.setCustomValidity(
      "La contraseña debe tener 8 caracteres, mayuscula, minuscula y números"
    );
  } else {
    passwordInput.setCustomValidity("");
  }
});

checkInput.addEventListener("click", function () {
  if (checkInput.checked) {
    checkInput.setCustomValidity("");
  } else {
    checkInput.setCustomValidity("Haz click para continuar");
  }
});
