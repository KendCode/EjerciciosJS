let btn = document.getElementById("button");

btn.onclick = function() {

    let N = document.getElementById("number").value;
    let c = 2,
        cd = 0;
    let total = "";
    while (c <= Math.sqrt(N)) {
        if (N % c == 0) {
            cd++;
        }
        c++;
    }
    if (cd == 0) {
        total += `<h1> ${N} es Primo!</h1>`;
    } else {
        total += `<h1> ${N} No es Primo!</h1>`;
    }
    document.getElementById("resp").innerHTML = total;
}