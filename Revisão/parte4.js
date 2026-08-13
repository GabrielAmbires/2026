// function saudacao(nome) {
//     console.log("Olá, " + nome)
// }
// saudacao("Gabriel")

//Função Anonima e Arrow Function
let saudacao = function() {
    console.log("oi")
}
// let saudacao = console.log("oi")
console.log(saudacao())

//Pedir dois numeros e mostrar a soma deles
let soma = function(num1, num2) {
    return num1 + num2
}
console.log(soma(3,9))

//Perguntar quantos anos tem e mostrar quantos dias viveu
let viveu = function(anos) {
    return anos * 365
}
// let anos = Number(prompt("Quantos anos você tem?"))
// console.log(viveu(anos))

//Arrow Function
// => Function
let saudacao1 = (nome) => {
    console.log("oii " + nome)
}
saudacao1("Gabriel")

// Multiplicar dois numeros
let mult = (n1, n2) => {
    return n1 * n2
}
console.log(mult(6,4))

/* Crie uma função de calculo de hora extra pergunte quantas horas extras o funcionário fez, se ele fez menos que 10 horas extras, ele deve ganhar R$20 reais por hora extra, se ele fez mais, eke deve ganhar R$15 reais por hora extra */
let extra = (horas) => {
    if (horas < 10) {
        return horas * 20
    } else {
        return horas * 15
    }
}
// let horas = Number(prompt("Quantas horas extras você fez?"))
// console.log(extra(horas))

// DOM - Manipulação

let texto = document.getElementById("texto")

function troca() {
    texto.innerHTML = "Hojé é Quinta"
}
function cor() {
    texto.style.color = "red"
    if (texto.style.backgroundColor == "orange") {
        texto.style.backgroundColor = "white"
        texto.style.color = "black"
    } else {
        texto.style.backgroundColor = "orange"
        texto.style.color = "red"
    }
}
function aumentar() {
    texto.style.fontSize = "50px"
}
function diminuir() {
    texto.style.fontSize = "10px"
}
let zero = document.getElementById("zero")

let numero0 = 0
function mais() {
    numero0++
    zero.innerText = numero0
}

function menos() {
    numero0--
    zero.innerText = numero0
}

function zerar() {
    numero0 = 0
    zero.innerText = numero0
}