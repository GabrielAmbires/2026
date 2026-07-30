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
let desconto = compra >= 100 ? compra - (compra * 0.1) : "Você ir pagar " + compra
console.log(desconto)
console.log("----------------------------")
console.log("Atividade 6")
let num = Number(prompt("Digite um número: "))
let resultado3 = num > 0 ? "Positivo" : num < 0 ? "Negativo" : "Zero"
console.log(resultado3)
console.log("----------------------------")

//While
console.log("Laço de Repetição - While: )")
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
let numero = 0
while (numero <= 100) {
    console.log(numero)
    numero += 5
}

    console.log("5 - Mostrando mensagem:")
let mensagem = 1
while (mensagem <= 5) {
    console.log("Eu gosto de JavaScript")
    mensagem++
}

//Do...While



















//For
console.log("Laço de Repetição - For: )")
console.log("1 For - Contador")
for(let i = 1; i <= 30; i++) {
    console.log(i)
}

console.log("2 For - Contador")
for(let i = 30; i >= 1; i--) {
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
for(let i = 50; i >= 30; i--) {
    console.log(i)
}

console.log("5 For - Números Alternados")
for(let i = 1; i <= 50; i += 2) {
    console.log(i)
}