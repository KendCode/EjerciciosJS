let btn = document.getElementById("Analizar");
btn.addEventListener("click", function () {
    let N = parseInt(document.getElementById("nota").value);

    let fact = N, f =1;
    let SerieFactorial = "";
    if (N > 0) {
        /*do{
            fact *= b;
            SerieFactorial += `${fact}`
        }while(b == 1);
        b -= 1;*/
        for(let i=2; i<=N; i++){
            f*=i;
            
        }
        SerieFactorial += f
        document.getElementById("resp").innerHTML = `<h1>Serie de Factorial: ${SerieFactorial} </h1>`;
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
