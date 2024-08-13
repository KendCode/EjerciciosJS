//propiedades
//Typeof(), el tipo de datos en javascript.
let nombre = "Rodrigo";

// console.log(typeof(nombre));

//--->concat, es una propiedad que concatena, string, array o.

let apellido = "Quelali"
let nombresCajas = ["rodri", "alex"]
let nombresSerCliente = ["maria", "juan", "pepe"]

//con for
// let nueRR = [];
// for (let index = 0; index < nombresCajas.length; index++) {
//     const element = nombresCajas[index];
//     nueRR[index] = element
    
// }


// let nuevoArray = nombresCajas.concat(nombresSerCliente);
// console.log(nombresCajas);
// console.log(nombresSerCliente);
// console.log(nuevoArray);

//---->forEach, no permite recorrer una lista o array.
let estudiante =[
    {nombre: "pepe",
    edad: 23,
    telefono: [234,4546,5657,444,5]},
    {nombre: "juan",
    edad: 45,
    telefono: [234,4546,5657]}

]
let listaNombre =["alex", "rodri", "juan"]
estudiante.forEach((element,index,arr) => {
    // console.log("po:", index);
    // console.log("lista", arr.length);
    console.log("contenido", element.telefono);
    element.telefono.forEach(element => {
        console.log(element);
    });
});
let roooo;
console.log(roooo);