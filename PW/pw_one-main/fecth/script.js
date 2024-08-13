//funciones
// function suumar() {
//     console.log("holas suma");
// }
// suumar();
//funciones normales

// function multiplicaciones(a,b) {
    
//     return a*b;
// }

// let aa = multiplicaciones(2,4);
// console.log(aa);

//funciones con flecha

// const sumar = b =>{
//     for (let index = 0; index < b; index++) {
//         const element = index;
//         return element;
//     }
// }
// console.log(sumar(4));


const https = ()=>{


  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        let cuerpo="";
        //console.log(json)
        json.forEach(element => {
          console.log(element.title);
          cuerpo += ` <div class="col-4">
          <div class="card" class="col-6 col-sm-3" style="width: 18rem;">
          <img src="https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/8/84/latest/20180613002622/Link_SSBU.png/1200px-Link_SSBU.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.body}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>`
        });

        document.getElementById("verDato").innerHTML = cuerpo;
      })

    
}

https();


// let datas = [{nombre: "fff",
// edad: [34,56]}]

//--->>lista de objetos
// Object.entries(datas).forEach(([key, value]) =>{
//   console.log(key +":"+ value);
// })

//listar con forEach
// datas.forEach(element => {
//   console.log(element.nombre);
//   element.edad.forEach(element => {
//     console.log(element);
//   });
// });

//-->se puede modificar sobre el array.
// array.forEach((elemento, indice, arr) => {
//   arr[indice] = elemento * 2;
// });

//-->map(), se utiliza para forma otro array.
// datas.map(ele =>{
//   console.log(ele);
// })

