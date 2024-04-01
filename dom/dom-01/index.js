// usamos window.onload para asegurarnos de que el DOM está completamente cargado antes de intentar acceder al botón.
window.onload = function () {
    //document.getElementById("parrafo").innerHTML = "Hola Mundo";
    let $h1 = document.querySelector("h1");
    let $p = document.querySelector("#parrafo");

    console.log($h1)
    console.log($p)

    console.log($h1.textContent)
}