let user_2 = [{
    nombre: "Rodrigo",
    edad: 30,
    genero: "Masculino",
    telefono: [71953293, 71944220],
    direccion:[
        {zona:"distrito 8", 
        calle: "Siempre max", 
        numero: 34},
        {zona:"distrito 14", 
        calle: "Siempre Viva", 
        numero: 45}
    ]
},{
    nombre: "Maria",
    edad: 23,
    genero: "Femenino",
    telefono: [114477],
    direccion:[
        {zona:"distrito 25", 
        calle: "Siempre adelante", 
        numero: 118},
        {zona:"distrito 5", 
        calle: "Flor", 
        numero: 34}
    ]
}];

let Name = 0;
let pro = 0;
let aux = 0;
for (let index = 0; index < user_2.length; index++) {
    const element = user_2[index].nombre;
    Name = Name +element
    pro= pro +user_2[index].edad;
    aux += 1;
    console.log(element);
    for (let j = 0; j < user_2[index].telefono.length; j++) {
        const element2 = user_2[index].telefono[j];
        console.log(element2);
        
    }
}
console.log("el promedio de edad: ", pro/aux);