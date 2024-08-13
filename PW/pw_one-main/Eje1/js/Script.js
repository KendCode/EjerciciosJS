//como crear las variables
//a=2 --> esta Mal
//var a=2; --> var dependiendo de la situiacion o del problema;
//let a = 2; --> es mejor




let btn= document.getElementById("btnOpe");
btn.addEventListener("click", function () {
    let a,b,c;
    a = document.getElementById("txt1").value;
    b = document.getElementById("txt2").value;
    if(a == "ALANBRITO" && b == "PROGRMACION-1" ){
        alert("Bienvenido")
    }else{
        alert("error")
    }
    c=a+b;
    document.getElementById("res").innerHTML = `<h1>La suma es: ${c}</h1>`;
   
    document.getElementById("txt1").style.display = "none";
    document.getElementById("txt2").value = "";
});



// function suma() {
//     let a,b,c;
//     a = parseInt(document.getElementById("txt1").value);
//     b = parseInt(document.getElementById("txt2").value);
//     c=a+b;
//     document.getElementById("res").innerHTML = `<h1>La suma es: ${c}</h1>`;
   
//     document.getElementById("txt1").style.display = "none";
//     document.getElementById("txt2").value = "";
//     //alert(c);   
// }

