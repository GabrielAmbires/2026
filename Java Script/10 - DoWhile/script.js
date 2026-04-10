//1
let num2 = 1
do {
    console.log(num2)
    num2++
} while (num2 <= 20)
console.log("-------------------------------")
//2
let resp
do {
    resp = prompt("Deseja continuar?")
} while (resp == "s" & resp != "n" )
console.log("Encerrou")
console.log("-------------------------------")
//3
let user = prompt("Escolha um numero")
let num1 = 1
do {
    console.log(num1)
    num1++
} while (num1 <= user)
console.log("-------------------------------")
//4
let num3 = 1
do {
    console.log(num3)
    num3 += 2
} while (num3 <= 31)
console.log("-------------------------------")
//5
let contador4 = 1
let numero4
do {
    numero4 = prompt("Digite 5 Numeros")
    if (numero4 > 0) {
        console.log("Numero Possitivo")
    } else if (numero4 < 0) {
        console.log("Numero Negativo")
    } else {
        console.log("O Numero é Zero")
    }
    contador4++
} while (contador4 <= 5)
console.log("-------------------------------")
//6
let resposta
do {
    resposta = prompt("Deseja fazer uma conta?")
    if (resposta == "s") {
        let num1 = prompt("Digite o primeiro número:")
        let num2 = prompt("Digite o segundo número:")
        let soma = num1 + num2
        console.log("A soma é: " + soma)
    }
} while (resposta == "s")
console.log("Programa encerrado.")
console.log("-------------------------------")
//7
let qntd = 1
let escreva = "Estudando JavaScript"
do {
    console.log(escreva)
    qntd++
} while (qntd <= 10)
//8
let vnum
do {
    vnum = Number(prompt("Digite um número positivo:"))
} while (vnum != 0)
console.log("Valor válido!")
console.log("-------------------------------")
//9
let esc
do {
    esc = prompt("Qual a senha?")
} while (esc != "Senai2026")
console.log("“Acesso liberado”")
//10
let total = 0
let continuar
do {
    let numero = prompt("Digite um número inteiro:")
    if (numero) {
        total += numero
    } else {
        console.log("Por favor, digite um número válido.")
    }
    continuar = prompt("Deseja continuar?")
} while (continuar === "s")
console.log("A soma total é: " + total)