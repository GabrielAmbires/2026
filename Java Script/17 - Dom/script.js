//1
function mudar() {
    texto.innerText = "Aprendendo DOM com JavaScript"
}
//2
let mensagem = document.getElementById("mensagem")
function entrar() {
    let nome = document.getElementById("nome").value
    mensagem.innerText = "Bem Vindo ao sistema, " + nome
}
//3
function mudarFrase() {
    texto1.innerText = "Manipulando HTML com JavaScript"
}
//4
let mensagem1 = document.getElementById("mensagem1")
function enviar() {
    let nome1 = document.getElementById("nome1").value
    if (nome1 == "") {
        mensagem1.innerText = "Digite o nome primeiro"
    } else {
        mensagem1.innerText = "Olá, " + nome1
    }
}
//5
const fundo = document.getElementById("fundo")
fundo.style.backgroundColor = "white"
function modoEscuro() {
    if (fundo.style.backgroundColor == "white") {
        fundo.style.backgroundColor = "black"
    } else {
        fundo.style.backgroundColor = "white"
    }
}

//6
let mensagem2 = document.getElementById("mensagem2")
function verificar() {
    let nota = document.getElementById("nota").value
    if (nota >= 7) {
        mensagem2.innerText = "Aprovado"
    } else {
        mensagem2.innerText = "Reprovado"
    }
}
//7
let secreta = document.getElementById("secreta")
function cliq() {
    secreta.innerText = "Você encontrou a mensagem secreta!"
}
//8
let txt1 = document.getElementById("txt1")
function destacar() {
    txt1.style.color = 'red'
    txt1.style.fontWeight = 'bold'
}
//9
let ver = document.getElementById("ver")
let ver1 = document.getElementById("ver1")
function veri() {
    ver1.innerText = "Você Digitou " + ver.length
}
//10
let txt2 = document.getElementById("txt2")
function cor() {
    txt2.style.color = 'blue'
}
//11
let txt3 = document.getElementById("txt3")
function sumirdatela() {
    txt3.innerText = ""
}
//12
let resultadoMeses = document.getElementById("resultadoMeses")
function calcularMeses() {
    let idade = document.getElementById("idadeMeses").value
    let meses = idade * 12
    resultadoMeses.innerText = "Você já viveu " + meses + " meses"
}
//13
let resultadoIdade = document.getElementById("resultadoIdade")
function verificarIdade() {
    let idade = document.getElementById("idadeMaior").value
    if (idade >= 18) {
        resultadoIdade.innerText = "Você é maior de idade"
    } else {
        resultadoIdade.innerText = "Você é menor de idade"
    }
}