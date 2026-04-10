//1
let resultado = document.getElementById("resultado")
function arredondar() {
    let numero = document.getElementById("numero").value
    resultado.innerText = Math.round(numero)
}
//2
let resultado1 = document.getElementById("resultado1")
function arredondarBaixo() {
    let numero1 = document.getElementById("numero1").value
    resultado1.innerText = Math.floor(numero1)
}
//3
let resultado2 = document.getElementById("resultado2")
function arredondarCima() {
    let numero2 = document.getElementById("numero2").value
    resultado2.innerText = Math.ceil(numero2)
}
//4
function CalcularRaiz() {
    let numero3 = document.getElementById("numero3").value
    let resultado3 = document.getElementById("resultado3")
    resultado3.innerText = Math.sqrt(numero3)
}
//5
function CalcularPotencia() {
    let numero4 = document.getElementById("numero4").value
    let numero5 = document.getElementById("numero5").value
    let resultado4 = document.getElementById("resultado4")
    resultado4.innerText = Math.pow(numero4, numero5)
}
//6
function maiorNumero() {
    let numero6 = document.getElementById("numero6").value
    let numero7 = document.getElementById("numero7").value
    let numero8 = document.getElementById("numero8").value
    let resultado5 = document.getElementById("resultado5")
    resultado5.innerText = Math.max(numero6, numero7, numero8)
}
//7
function menorNumero() {
    let numero9 = document.getElementById("numero9").value
    let numero10 = document.getElementById("numero10").value
    let numero11 = document.getElementById("numero11").value
    let resultado6 = document.getElementById("resultado6")
    resultado6.innerText = Math.min(numero9, numero10, numero11)
}
//8
function sortearNumero() {
    let resultado7 = document.getElementById("resultado7")
    resultado7.innerText = Math.floor(Math.random()*11)
}
//9
function lancarDado() {
    let resultado8 = document.getElementById("resultado8")
    resultado8.innerText = Math.floor(Math.random()* 6)+1
}