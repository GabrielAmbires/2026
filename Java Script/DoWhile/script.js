let num1 = 1
while(num1 <= 5) {
    console.log(num1)
    num1++
}
console.log("-------------------------------")
let num2 = 6
do {
    console.log("DoWhile")
    console.log(num2)
    num2++
} while (num2 <= 5)
console.log("-------------------------------")
// let resposta
// do {
//     resposta = prompt("Deseja Continuar")
// } while (resposta == "sim")
// console.log("-------------------------------")
// let soma = 0
// let num
// let contador = 1
// do {
//     num = Number(prompt("Digite um numero"))
//     soma = soma + num
//     console.log(soma)
//     contador++
// } while (contador <= 3)
// console.log("O resultado da soma é " + soma)
// console.log("-------------------------------")
// let usuario
// let senha
// do {
//     usuario = prompt("Qual o usuario")
//     senha = prompt("Qual a senha")
// } while (usuario != "admin" || senha != "senha")
// console.log("-------------------------------")
// let nume = 1
// do {
//     console.log(nume)
//     nume += 2
// } while (nume <= 99)

let esc
do {
    esc = prompt("Qual escola você estudou?")
} while (esc != "Senai")
console.log("Você é Senaiano")