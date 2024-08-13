let x =parseInt(prompt("Ingrese los digitos"));

let a= x %10;
    x/=10;

    while(x > 0){
        d = x%10;
        x /=10;
    }
    let nuevo = (d*10)+a;
    alert(nuevo);