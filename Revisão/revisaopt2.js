console.log("Atividade 1")
console.log("----------------------------")
let idade = Number(prompt("Digite sua idade: "))
let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log(resultado)
console.log("----------------------------")
console.log("Atividade 2")
let numero = Number(prompt("Digite um número:"))
let resultado1 = (numero % 2 === 0) ? "Par" : "Ímpar";
console.log(resultado1)
alert(resultado1);
console.log("----------------------------")
console.log("Atividade 3")
let nota = Number(prompt("Digite sua nota: "))
let situacao = nota >= 7 ? "Aprovado" : "Reprovado"
console.log(situacao)
console.log("----------------------------")
console.log("Atividade 4")
let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))
let resultado2 = num1 > num2 ? "O primeiro número é maior" : num1 < num2 ? "O segundo número é maior" : "Os números são iguais"
console.log(resultado2)             
console.log("----------------------------")
console.log("Atividade 5")
let compra = Number(prompt("Digite o valor da compra: "))
let valorFinal = compra >= 100 ? compra - (compra * 0.1) : compra
console.log("Valor final: R$ " + valorFinal.toFixed(2))
console.log("----------------------------")
console.log("Atividade 6")
let num = Number(prompt("Digite um número: "))
let resultado3 = num > 0 ? "Positivo" : num < 0 ? "Negativo" : "Zero"
console.log(resultado3)
console.log("----------------------------")

//While
console.log("Laço de Repetição - While:")
console.log("1 While - Contador")
let contador = 1;
while (contador <= 10) {
    console.log(contador)
    contador++
}

console.log("2 - Contagem Regressiva")
let regressiva = 10
while (regressiva >= 1) {
    console.log(regressiva);
    regressiva--
}

console.log("3 - Verificação de senha")
let senha = ""
while (senha !== "12345") {
    senha = prompt("Digite a senha:")
}
alert("Senha correta!")

console.log("4 - Sequência numérica")
let numeroWhile = 0
while (numeroWhile <= 100) {
    console.log(numeroWhile)
    numeroWhile += 5
}

console.log("5 - Mostrando mensagem:")
let mensagem = 1
while (mensagem <= 5) {
    console.log("Eu gosto de JavaScript")
    mensagem++
}

//Do...While
console.log("Laço de Repetição - Do...While:")
console.log("1 - Contador")
let contadorDoWhile = 1

do {
    console.log(contadorDoWhile)
    contadorDoWhile++
} while (contadorDoWhile <= 20)

console.log("2 - Resposta do usuário")
let resposta = ""

do {
    resposta = prompt("Deseja continuar? Digite 's' para sim ou 'n' para não:")
    while (resposta !== "s" && resposta !== "n") {
        resposta = prompt("Resposta inválida! Digite apenas 's' ou 'n':")
    }
} while (resposta === "s")

console.log("3 - Sequência numérica")
let numeroFinal = Number(prompt("Digite um número final: "))
let i = 1

do {
    console.log(i)
    i++
} while (i <= numeroFinal)

console.log("4 - Contador")
let contadorPar = 1

do {
    console.log(contadorPar)
    contadorPar += 2
} while (contadorPar <= 31)

//Array
console.log("Array:")
console.log("1 - Filmes favoritos")
const filmesFavoritos = ["Matrix", "Interestelar", "O Senhor dos Anéis"]
console.log(filmesFavoritos[0])

console.log("2 - Criando e acessando um array")
const frutas = ["Maçã", "Banana", "Laranja", "Manga", "Uva"]
console.log(frutas[2])

console.log("3 - Adicionando elementos")
const cores = ["Azul", "Verde", "Amarelo"]
cores.push("Vermelho")
for (let i = 0; i < cores.length; i++) {
    console.log(cores[i])
}

console.log("4 - Removendo elementos")
const numeros = [10, 20, 30, 40]
numeros.pop()
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

console.log("5 - Adicionando no início")
const cidades = ["São Paulo", "Rio de Janeiro"]
cidades.unshift("Salvador")
for (let i = 0; i < cidades.length; i++) {
    console.log(cidades[i])
}

//For
console.log("Laço de Repetição - For:")
console.log("1 For - Contador")
for (let i = 1; i <= 30; i++) {
    console.log(i)
}

console.log("2 For - Contador")
for (let i = 30; i >= 1; i--) {
    console.log(i)
}

console.log("3 For - Contagem Personalizada")
let inicio = Number(prompt("Digite o número inicial:"))
let fim = Number(prompt("Digite o número final:"))
console.log("Contagem:")
for (let i = inicio; i <= fim; i++) {
    console.log(i)
}

console.log("4 For - Sequência")
for (let i = 50; i >= 30; i--) {
    console.log(i)
}

console.log("5 For - Números Alternados")
for (let i = 1; i <= 50; i += 2) {
    console.log(i)
}