const httpRest = () => {
    fetch('https://apirestitpm.itpm.edu.bo/apis/index.php/Grado/listarGrado')
        .then(response => response.json())
        .then(json => {
            console.log(json);
                let verda = "";
                json.forEach(element => {
                    // if(element.rango >= 50){
                    //     verda += `<h1>${element.nombre}</h1>
                    //     <hr>
                    //     <h2>${element.rango}</h2>`
                    // }
                    if (element.id == 2) {
                        verda += `<h1>${element.nombre}</h1>
                       <hr>
                       <h2>${element.rango}</h2>`
                    }
                });
                document.getElementById("cuerpo").innerHTML = verda;
        });
}
httpRest();