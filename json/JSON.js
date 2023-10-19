let data = `{  "empleados": [
{"nombre": "Juan", "apellido": "Perez"},
{"nombre": "Karina", "apellido": "Gonzalez"},
{"nombre": "Luz", "apellido": "López"},
{"nombre": "Marcos", "apellido": "Villalba"}
]
}`

let processedData = JSON.parse(data);

console.log(processedData.empleados[0]);

let _data = {
    empleados: [
        { nombre: "Juan", apellido: "Perez" },
        { nombre: "Karina", apellido: "Gonzalez" },
        { nombre: "Luz", apellido: "López" },
        { nombre: "Marcos", apellido: "Villalba" }
    ]
}

let dataJson = JSON.stringify(_data);

console.log(dataJson);