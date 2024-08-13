/*let dividendo = parseInt(prompt("Ingrese A"));
let divisor = parseInt(prompt("Ingrese B"));
let cociente = 0,
    resto = dividendo;
while (resto >= divisor) {
    resto -= divisor;
    cociente++
}
alert(cociente)*/

let btn = document.getElementById("Analizar");
btn.addEventListener("click", function() {
    let dividendo = parseFloat(document.getElementById("nota").value);
    let divisor = parseFloat(document.getElementById("nota2").value);
    let cociente = 0,
        resto = dividendo;

    if (divisor === 0) {
        document.getElementById("resp").innerHTML = `<h1>No se puede divir por 0</h1>`;

    } else {
        for (resto = dividendo; resto >= divisor; resto -= divisor) {
            cociente++;
        }
    }
    document.getElementById("resp").innerHTML = `<h1>Resultado: ${dividendo} / ${divisor} = ${cociente} </h1>`;
});


//limpiar los datos
function limpiarCampos() {
    // todo Obtener los elementos de entrada por su ID y establecer su valor en cadena vacía.
    document.getElementById("nota").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("resp").innerHTML = "";
}