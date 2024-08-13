let btn = document.getElementById("Analizar");
btn.addEventListener("click", function () {
    let N = parseInt(document.getElementById("nota").value);

    let p = 2, con = 0;
    let SeriePrimos = "";
    if (N > 0) {
        while (con < N) {
            let cd = 0;
            for (i = 2; i <= Math.sqrt(p); i++) {
                if (p % i == 0) {
                    cd++;
                }
            }
            if(cd == 0){
                SeriePrimos += `${p}, `
                con++;
            }
            p++;
        }
        document.getElementById("resp").innerHTML = `<h1>Serie de Primos: ${SeriePrimos} </h1>`;
    } else {
        document.getElementById("resp").innerHTML = `<h1>Ingrese un número válido</h1>`;
    }
});


//limpiar los datos
function limpiarCampos() {
    // todo Obtener los elementos de entrada por su ID y establecer su valor en cadena vacía.
    document.getElementById("nota").value = "";
    document.getElementById("resp").innerHTML = "";
}
