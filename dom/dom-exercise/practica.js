// 1. Devuelve por consola el elemento asociado al id “descripcion”. Utilice el método getElementById()
var descripcion = document.getElementById("descripcion");
console.log(descripcion);

// 2. Devuelve por consola el elemento asociado al id “descripcion”. Utilice el método querySelector()
var descripcionQuery = document.querySelector("#descripcion");
console.log(descripcionQuery);

// 3. Devuelve por consola todos los elementos li en forma de lista. Utilice el método querySelectorAll()
var liElements = document.querySelectorAll("li");
console.log(liElements);

// 4. Devuelve por consola la cantidad de elementos listados con li con el siguiente mensaje.
console.log(`Hay ${liElements.length} elementos en la lista.`);

// 5. Genere una lista de todos los elementos li y recorra la lista con ayuda de un ciclo.
liElements.forEach((li, index) => {
    console.log(`Elemento ${index + 1}: ${li.textContent}`);
});

// Crear un nuevo elemento de párrafo
var nuevoParrafo = document.createElement("p");

// Agregar el texto al párrafo
nuevoParrafo.textContent = "En el año 2008 la competición fue llevada a cabo en el Reino Unido en la Universidad deReading en donde se presentaron 13 candidatos de los cuales se seleccionaron 6 programasfinalistas: Alice, Brother Jerome, Elbot, Eugene Goostman, Jabberwacky y Ultra Hal. Los seisprogramas tuvieron que interactuar con los 12 jueces manteniendo una conversaciónmediante un computador durante cinco minutos en donde se plantean una serie de preguntascon el fin de determinar si es un computador o un humano. En la edición del 2008 ningunologré pasar el Test de Turing, aunque el ganador de la medalla de bronce fue el programaElbot, que estuvo muy cerca de pasar esta prueba ya que consiguió convencer a 3 de los 12jueces, es decir el 25% de los jueces pensó que estaba conversando con un ser humano.";

// Agregar el nuevo párrafo al final del cuerpo del documento
document.body.appendChild(nuevoParrafo);

// Crear un nuevo elemento de enlace
var nuevoEnlace = document.createElement("a");
nuevoEnlace.href = "#";
nuevoEnlace.innerHTML = "Enlace principal";

// Agregar el nuevo enlace al final del cuerpo del documento
document.body.appendChild(nuevoEnlace);

// Crear un nuevo elemento de título
var titulo = document.createElement("h2");
titulo.innerHTML = "Meses del año";

// Agregar el título al final del cuerpo del documento
document.body.appendChild(titulo);

// Crear un nuevo elemento de lista no ordenada
var lista = document.createElement("ul");

// Crear un arreglo con los meses del año
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Recorrer el arreglo y agregar cada mes a la lista
meses.forEach(function (mes) {
    var li = document.createElement("li");
    li.innerHTML = mes;
    lista.appendChild(li);
});

// Agregar la lista al final del cuerpo del documento
document.body.appendChild(lista);

