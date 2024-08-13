//OBJETO
let productoFrutas = [{
        //CLAVE     =   VALOR
        nombre: "manzana de Chile",
        color: "roja",
        precio: [1, 2, 3, 2.5],
        peso: "300 g"
    }, {
        //CLAVE     =   VALOR
        nombre: "manzana Bolivia",
        color: "verde",
        precio: [1, 2, 3, 2.5],
        peso: "300 g"
    }]
    //for (let index = 0; index < productoFrutas.length; index++) {
    //const element = productoFrutas[index];
    //console.log(elemment);

//musestra solo el color
//console.log(productoFrutas[index].color);

/* console.log(productosFrutas[index].precio);
    for (let i = 0; i< precio.length; i++) {
        const element = productoFrutas[index].precio[i];
        console.log(element);
        
    }

}*/
//console.log(productoFrutas);



//CREAR OBJETO DE PROFESION
/*let profesion=[{
    nombre:"profesor",
    edad: 35,
    especialidad: ["psicopedagogia", "curriculum"," informatica educativa"],

},{
    nombre:"policia",
    edad: 40,
    especialidad: ["investigacion tecnologica", "especial de operaciones"],
},{
    nombre:"medico",
    edad:45,
    especialidad:["pediatra", "dermatologia"]
}]

for (let index = 0; index < profesion.length; index++) {
    //const element = productoFrutas[index];
    //console.log(elemment);

    //muestra solo el color
    //console.log(productoFrutas[index].color);

    console.log(profesion[index].nombre);
    /*for (let i = 0; i< especialidad.length; i++) {
        const element = profesion[index].especialidad[i];
        console.log(element);
        
    }

}*/

let estudiante = [{
    nombre: "Ram",
    edad: 25,
    nota: 65,
    telefono: [77777777, 888888888, 99999999, 55555555, 44444444],
}, {

    nombre: "fer",
    edad: 22,
    nota: 54,
    telefono: [11111111, 222222222, 333333333]

}, {

    nombre: "victor",
    edad: 22,
    nota: 80,
    telefono: [11111111, 222222222, 333333333]
}, {

    nombre: "ana",
    edad: 22,
    nota: 94,
    telefono: [11111111, 222222222, 333333333]

}];

// let aux = 0,
//     prom = 0,
//     mejorNota = 0; // Inicializa mejorNota con 0 antes de iterar sobre las notas de los estudiantes

// for (let index = 0; index < estudiante.length; index++) {
//     const element = estudiante[index].nombre;
//     prom = prom + estudiante[index].nota; // Suma las notas en lugar de las edades
//     aux += 1;

//     // Verifica si la nota actual es mejor que la mejorNota actual
//     if (estudiante.nota > mejorNota) {
//         mejorNota = estudiante.nota;
//     }
//     console.log(nombre);

//     for (let j = 0; j < estudiante[index].telefono.length; j++) {
//         const element2 = estudiante[index].telefono[j];
//         console.log(element2);
//     }
// }
// console.log("El promedio de nota: ", prom / aux);
// console.log("La mejor nota del curso: ", mejorNota);
// mostrar promedio de nota, mejor nota del curso

let aux = 0,
    prom = 0,
    mejorNota = 0;

estudiante.forEach((element, index) => {
    let nombre = element.nombre; 
    let telefono = element.telefono; 

    prom += element.nota;
    aux += 1;

    
    if (element.nota > mejorNota) {
        mejorNota = element.nota;
    }

    console.log(nombre);

    telefono.forEach((numero) => {
        console.log("Número telefonico: ",numero);
    });
});

console.log("El promedio de nota: ", prom / aux);
console.log("La mejor nota del curso: ", mejorNota);