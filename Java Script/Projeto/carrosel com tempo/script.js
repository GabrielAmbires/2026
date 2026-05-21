let imagens = document.querySelectorAll(".img");
let indice = 0;
// img1, img2, img3
//   0     1     2
function mostrarImagem() { 
    imagens.forEach(function(img) {
        img.classList.remove("ativa");
    })
    imagens[indice].classList.add("ativa");
}
function avancarAutomatico() {
    indice++ //+1
    if (indice >= imagens.length) {
        indice = 0
    }
    mostrarImagem()
}
setInterval(avancarAutomatico, 3000) //3000ms = 3s