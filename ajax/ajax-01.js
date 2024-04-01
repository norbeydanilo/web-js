// Crear una instancia de XMLHttpRequest
var xhr = new XMLHttpRequest();

// Configurar la petición
xhr.open('GET', 'https://api.example.com/data', true);

// Establecer el tipo de respuesta esperado
xhr.responseType = 'json';

// Configurar el manejador de eventos para la respuesta
xhr.onload = function () {
    if (xhr.status === 200) {
        // La solicitud fue exitosa
        console.log(xhr.response);
    } else {
        // Hubo un problema con la solicitud
        console.error('Error: ' + xhr.status);
    }
};

// Enviar la petición
xhr.send();
