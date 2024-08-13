//PROPIEDADES 
//TYPEOF () , EL TIPO DE DATO EN JAVASCRIPT

/*let nombre = "Rodrigo";
//console.log(typeof(nombre));

//PROPIEDAD QUE CONCATENA  (CONCAT) , string, array

let apellido = "Quelali";
let nombresCajas = ["Rodri", "Alex"];
let nombresSerClientes = ["maria", "juan", "pepe"];

let nuevoArray = nombresCajas.concat(nombresSerClientes);
console.log(nombresCajas);
console.log(nombresSerClientes);
console.log(nuevoArray);*/


//CON FOR MAS GASTO DE MEMORIA
/*let nueRR = [];

for (let index = 0; index < nombresCajas.length; index++) {
    const element = nombresCajas[index];
    nueRR[index] = element;

}*/

//FOREACH NOS PERMITE RECORRER UNA LISTA O UN ARRAY
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




//FORECH MOSTRAR nota
estudiante.forEach(element => console.log ("Nota: ",element.nota));




//let listaNombre = ["alex", "rodri", "juan"]
// estudiante.forEach((element, index, arr) => {
//     //console.log("pos: ", index);
//     //console.log("lista: ", arr);
//     console.log("contenido: ", element.telefono);
//     element.telefono.forEach(element => {
//         console.log(element);

//     });

// });