let btn = document.getElementById("Analizar");
btn.addEventListener("click", function() {
    let A = parseInt(document.getElementById("nota").value);
    let B = parseInt(document.getElementById("nota2").value);
    let C = 0,
        AUX = 0,
        r = 0;

    /*while (A > C) {
        AUX += B;
        C++;
    }*/
    for (let i = 0; i < B; i++) {
        r += A;
    }

    document.getElementById("resp").innerHTML = `<h1>Resultado: ${A} * ${B} = ${r} </h1>`;
});


//limpiar los datos
function limpiarCampos() {
    // todo Obtener los elementos de entrada por su ID y establecer su valor en cadena vacía.
    document.getElementById("nota").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("resp").innerHTML = "";
}