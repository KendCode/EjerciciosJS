//funciones
/*function sumar() {
    console.log("Hola Suma");
}
sumar();*/
//funciones normales
function multiplicaciones() {
   let a=2, b=3;
    return a*b;
}
let aa = multiplicaciones();
console.log(aa);

//funciones con flecha

//const sumar = )=> 4+b ESO SERA IGUAL A 8
//console.log(sumar(4));
/*const sumar = (b)=>{
    for (let index = 0; index < b; index++) {
        const element = index;
        return element;
    }
}
console.log(sumar(4))*/
const https = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => { 
        let cuerpo;
        //onsole.log(json)
        json.forEach(element => {
            console.log(element.title);
            cuerpo += `<div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.body}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`
        });
        document.getElementById("verDato").innerHTML
    })
}
https();