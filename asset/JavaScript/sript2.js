if (window.jQuery) {
  // jQuery está vinculado correctamente
  console.log("jQuery está vinculado correctamente en esta página.");
} else {
  // jQuery no está vinculado o no se ha cargado correctamente
  console.log(
    "jQuery no está vinculado o no se ha cargado correctamente en esta página."
  );
}

document.querySelector(".carga").addEventListener("click", function (event) {
  event.preventDefault();
  var button = event.target;
  button.disabled = true;
  button.innerHTML = '<span class="loading"></span> Cargando...';

  // Simular una carga de 3 segundos
  setTimeout(function () {
    button.disabled = false;
    button.innerHTML = "Subir Archivo";
  }, 3000);
});
