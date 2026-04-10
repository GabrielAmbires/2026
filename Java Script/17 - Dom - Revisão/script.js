//script.js
let titulo = document.getElementById("titulo")
//No HTML.Pegue o elemento ID
function mudarTexto() {
    titulo.innerText = "Você clicou no botão"
    titulo.style.color = "blue"
}
let mensagem = document.getElementById("mensagem")
function saudacao() {
    let nome = document.getElementById("nome").value
    mensagem.innerText = "Olá " + nome
}
// -----------------------------------------------
const texto = document.getElementById("texto")
function sumir() {

    if (texto.style.display == "none") {
        texto.style.display = "block"
    } else {
        texto.style.display = "none"
    }
}
const texto2 = document.getElementById("texto2")
function mudar() {
    texto2.style.color = "green"
    texto2.style.backgroundColor = "pink"
}