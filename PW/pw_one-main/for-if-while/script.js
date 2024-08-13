//if
// let a,b,c
// a = parseInt(prompt("Ingrese el valor A"));
// b = parseInt(prompt("Ingrese valor B"));
// c = parseInt(prompt("Ingrese el valor C"));
// //and --> &&, or --> ||
// // if-ternario --> (condicio) ? verdadero : falso;
// if(a>b && a>c){
//     //let me = b>c ? "-" + a+ "-" + b + " -" + c :"-" + a+ "-" + c + " -" + b
    
//     //alert(me)
//     alert(b>c ? "-" + a+ "-" + b + " -" + c :"-" + a+ "-" + c + " -" + b);
//     // if(b>c){
//     //     alert("-" + a+ "-" + b + " -" + c)
//     // }else{
//     //     alert("-" + a+ "-" + c + " -" + b)
//     // }
    
// }else if(b>a && b>c){
//     if(a>c){
//         alert("-" + b+ "-" + a + " -" + c)
//     }else{
//         alert("-" + b+ "-" + c + " -" + a)
//     }
// }else{
//     if(a>b){
//         alert("-" + c+ "-" + a + " -" + b)
//     }else{
//         alert("-" + c+ "-" + b + " -" + a)
//     }
// }

//if terniario
//while
// while (condition) {
    
// }
//for
let d =""


let btnButon = document.getElementById("btnCal");

btnButon.onclick = function(){

    let n1= document.getElementById("txtN1").value;
    let data = ""
    for (let index = 1; index <= 10; index++) {
        let to = index * n1
        data += `<h1>${index} X ${n1} = ${to}</h1>`;
        console.log(index, "X" , n1, "=" ,to)
    }
    document.getElementById("verResul").innerHTML  = data;
}


