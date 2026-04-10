//1
function dobro(num) {
    let resultado = num * 2
    return resultado 
}
let num = Number(prompt("Fale um numero que irei dizer o dobro"))
console.log(dobro(num))

console.log("-------------------------------")

//2
function soma(nuu1, nuu2) {
    return n1 + n2
}
let nuu1 = Number(prompt("Primeiro Numero"))
let nuu2 = Number(prompt("Segundo Numero"))
console.log(soma(nuu1, nuu2))

console.log("-------------------------------")

//3
function soma(l1, l2) {
    return l1 * l2
}
let l1 = Number(prompt("Primeiro Lado do quadrado"))
let l2 = Number(prompt("Segundo Lado do quadrado"))
console.log(soma(l1, l2))

console.log("-------------------------------")

//4
function antecessor(n1) {
    return "Numero Antecessor " + (n1 - 1)
}
let n1 = Number(prompt("Digite o numero"))
console.log(antecessor(n1))

console.log("-------------------------------")

//5
function tamanhoTexto(texto) {
    return texto.length
}
let texto = prompt("Digite uma frase")
console.log(tamanhoTexto(texto)) 

console.log("-------------------------------")

//6
function NumeroMaior(num1, num2) {
    if(num1 > num2) {
        return num1
    } else if(num2 > num1) {
        return num2
    } else {
        return "numero invalido"
    }
}
let num1 = Number(prompt("Primeiro numero"))
let num2 = Number(prompt("Segundo numero"))
console.log(NumeroMaior(num1, num2))

// console.log("-------------------------------")

//7
function VerificarIdade(idade) {
    if(idade >= 18) {
        return "Maior De Idade"
    } else {
        return "Menor De Idade"
    }
}
let idade = Number(prompt("Qual Sua Idade? "))
console.log(VerificarIdade(idade))

console.log("-------------------------------")

//8
function imparOupar(numero) {
    let resto = numero % 2
    if(resto == 0) {
        return "Par"
    } else { 
        return "Impar"
    }
}
let numero = Number(prompt("Fale um numero"))
console.log(imparOupar(numero))

console.log("-------------------------------")

//9
function media(nu1, nu2, nu3) {
    let media = (nu1 + nu2 + nu3) / 3
    return media
}
let nu1 = Number(prompt("Primeira Nota"))
let nu2 = Number(prompt("Segunda Nota"))
let nu3 = Number(prompt("Terceira Nota"))
console.log(media(nu1, nu2, nu3))

console.log("-------------------------------")

//10
function calcularDesconto(preco) {
    let desconto = preco * 0.10
    return preco - desconto
}
let preco = Number(prompt("Qual o preço do produto?"))
console.log(calcularDesconto(preco))