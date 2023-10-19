const persona1 = {
    nombre: "Mariana",
    edad: 36,
    amigos: ["Juan", "Fernanda", "José"]
}

const persona2 = {
    nombre: "Juan",
    edad: 56,
    amigos: ["Fernanda", "José", "Mariana"]
}

const jsonPersona1 = JSON.stringify(persona1);
const jsonPersona2 = JSON.stringify(persona2);
console.log(persona1)
console.log(jsonPersona1)
console.log(persona2)
console.log(jsonPersona2)

/* ****************************************************************** */

class persona {
    constructor(nombre = "Lucho", apellido = "Martinez", correo = "correo@correo.com", telefono = "1123", nacionalidad = "Haitiano") {
        this.nombre = nombre
        this.apellido = apellido
        this.correo = correo
        this.telefono = telefono
        this.nacionalidad = nacionalidad
    }
}

let personas = []

for (let index = 0; index < 5; index++) {
    personas[index] = new persona()
}

console.log(personas)
let datajson = JSON.stringify(personas)
console.log(datajson)

/* ****************************************************************** */

const peliculas = `[
    {
        "Nombre": "Iron Man",
        "Author": "Marvel",
        "ActorsMain": "Tony Stark",
        "Tipo": "Ciencia ficcion"
    },
    {
        "Nombre": "Hombre arana",
        "Marca": "Marvel",
        "ActorsMain": "Peter Parker",
        "Tipo": "Ciencia ficcion"
    }
]`

const objetosPeliculas = JSON.parse(peliculas);
console.log(objetosPeliculas);

// *******************************************************************

let jsonpeliculas = `[
    {
        "nombre":"Malena",
        "Anio":"2000"
    },
    {
        "nombre":"GodFather",
        "Anio":"1972"
    },
    {
        "nombre":"Once Upon a Time in Hollywood",
        "Anio":"2019"
    },
    {
        "nombre":"The Great Gatsby",
        "Anio":"2013"
    },
    {
        "nombre":"Get Out",
        "Anio":"2017"
    }
]`

let dataobject = JSON.parse(jsonpeliculas);

console.log(dataobject)