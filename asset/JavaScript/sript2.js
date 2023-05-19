$(document).ready(function () {
  $("#boton").on("click", function () {
    var buttonLoader = this.querySelector("#button-loader");
    var buttonText = this.querySelector("#button-text");

    // Muestra el efecto de carga
    buttonLoader.style.display = "inline-block";

    // Deshabilita el botón mientras se realiza la carga
    this.disabled = true;

    setTimeout(function () {
      buttonLoader.style.display = "none";

      // Habilita el botón nuevamente
      $("#boton").prop("disabled", false);
    }, 1000);
  });
});
