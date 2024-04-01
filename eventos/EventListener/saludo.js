// usamos window.onload para asegurarnos de que el DOM está completamente cargado antes de intentar acceder al botón.
window.onload = function () {
    var boton = document.getElementById("miBoton");
    boton.addEventListener("click", function () {
        alert("¡Hola!");
    });
}
