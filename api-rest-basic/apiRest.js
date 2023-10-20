const d = document;

d.addEventListener("submit", (e) => {
    e.preventDefault(); // Se utiliza comúnmente en los controladores de eventos para evitar que el navegador ejecute su acción predeterminada cuando ocurre un evento
    alert("enviando formulario")

    const $response = d.querySelector(".contact-form-response")
    $form = d.querySelector(".form")

    // Se utiliza para hacer solicitudes de red y recuperar recursos de una URL específica. 
    // Permite enviar y recibir datos de forma asíncrona, lo que significa que no bloquea la ejecución del resto del código mientras espera la respuesta del servidor.
    // Esto la hace especialmente útil para realizar solicitudes AJAX y recuperar datos de APIs web.
    fetch("https://formsubmit.co/ajax/ndmunozc@udistrital.edu.co", {
        method: "POST",
        body: new FormData(e.target) // FormData se utiliza normalmente para enviar datos en solicitudes HTTP, como datos de formularios.
        // e.target hace referencia al formulario HTML que se está enviando.
        // FormData se utiliza para recopilar los datos del formulario y enviarlos en la solicitud HTTP.
    })
        // Método que se utiliza en Promesas en JavaScript para manejar el resultado exitoso de una operación asíncrona.
        // Se utiliza para manejar la respuesta exitosa de una llamada a una API
        .then(res => res.ok ? res.json() : Promise.reject(res))
        // Promise es un objeto incorporado en JavaScript que se utiliza para representar una operación asíncrona
        // que puede estar en uno de los tres estados: pendiente (pending), resuelta (fulfilled) o rechazada (rejected).
        .then(json => {
            console.log(json)
            $response.classList.remove("none")
            $form.reset()
        })
        .catch(err => {
            console.log(err);
        });

})