// Funções de Texto: 
let texto = (prompt("Digite um texto: "))
console.log(texto)
console.log("Tem " + texto.length + " caracteres")
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
let palavraNova = (prompt("Digite uma palavra nova: "))
let palavraAntiga = (prompt("Digite uma palavra antiga: "))
console.log(texto.replace(palavraAntiga, palavraNova))
let buscar = (prompt("Digite uma palavra para buscar: "))
if (texto.includes(buscar)) {
    console.log("A palavra " + buscar + " existe no texto")
} else {
    console.log("A palavra " + buscar + " não existe no texto")
}
console.log(texto.charAt(5))

consele.log("----------------------------")

// Funções Matemáticas:
// 1 - Adivinhar o número
let n3 = Math.floor(Math.random() * 11)
console.log(n3)
let adivinhar = Number(prompt("Digite um número de 0 a 10: "))
if (adivinhar == n3) {
    console.log("Parabéns, você acertou!")
} else {
    console.log("Você errou, o número era " + n3)
}

consele.log("----------------------------")

// 2 - Arredondando valores
let decimal = Number(prompt("Digite um número decimal: "))
console.log("Número digitado: " + decimal)
console.log("Arredondando para cima: " + Math.ceil(decimal))
console.log("Arredondando para baixo: " + Math.floor(decimal))
console.log("Arredondando para o mais próximo: " + Math.round(decimal))

consele.log("----------------------------")

// 3 - Manipulando números
console.log(Math.max(10, 5, 9, 3, 1, 65, 14)) //maior número

console.log(Math.min(10, 5, 9, 3, 1, 65, 14)) //menor número

console.log("----------------------------")

// 4 - Novos valores
let num1 = Number(prompt("Digite um número: "))
//Raiz quadrada
console.log(Math.sqrt(num1))
// Potência
console.log(Math.pow(num1, 4))
//Valor absoluto
console.log(Math.abs(-num1))

consele.log("----------------------------")

// Funções Declarativas:
// 1 - Saudação
function saudacao() {
    console.log("Olá, seja bem-vindo!")
}

console.log("----------------------------")

// 2 - Contar Caracteres
function contarCaracteres(texto) {
    console.log("O texto digitado tem " + texto.length + " caracteres")
}

console.log("----------------------------")

// 3 - Maior Número
function maiorNumero(num1, num2) {
    console.log("O maior número é: " + Math.max(num1, num2))
}

console.log("----------------------------")

// 4 - Potência
function potencia(base, expoente) {
    console.log("O resultado da potência é: " + Math.pow(base, expoente))
}

console.log("----------------------------")

// 5 - Contagem
function contagem(inicio, fim) {
    for (let i = inicio; i <= fim; i++) {
        console.log(i)
    }
}
saudacao()
contarCaracteres(prompt("Digite um texto: "))
maiorNumero(Number(prompt("Digite o primeiro número: ")), Number(prompt("Digite o segundo número: ")))
potencia(Number(prompt("Digite a base: ")), Number(prompt("Digite o expoente: ")))
contagem(Number(prompt("Digite o início da contagem: ")), Number(prompt("Digite o fim da contagem: ")))

// Funções com Parâmetros:
// 1 - Saudação
function saudacao(nome) {
    console.log("Olá, " + nome + ", seja bem-vindo!")
}

console.log("----------------------------")

// 2 - Soma de Dois Números
function soma(num1, num2) {
    console.log("A soma dos números é: " + (num1 + num2))
}

console.log("----------------------------")

// 3 - Número Par ou Ímpar
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log("O número " + numero + " é Par") 
    } else {
        console.log("O número " + numero + " é Ímpar")
    }
}

console.log("----------------------------")

// 4 - Média de Três Notas
function media(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3
    console.log("A média das notas é: " + media)
}

console.log("----------------------------")

// 5 - Dobro de um Número
function dobro(numero) {
    console.log("O dobro do número " + numero + " é: " + (numero * 2))
}

console.log("----------------------------")

// 6 - Aprovação
function aprovacao(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3
    if (media >= 7) {
        console.log("Parabéns! Você foi aprovado com média: " + media)
    } else {
        console.log("Infelizmente, você foi reprovado com média: " + media)
    }
}

console.log("----------------------------")

// 7 - Calculadora
function calculadora(num1, num2, operacao) {
    switch (operacao) {
        case "soma":
            console.log("O resultado da soma é: " + (num1 + num2))
            break
        case "subtracao":
            console.log("O resultado da subtração é: " + (num1 - num2))
            break
        case "multiplicacao":
            console.log("O resultado da multiplicação é: " + (num1 * num2))
            break
        case "divisao":
            console.log("O resultado da divisão é: " + (num1 / num2))
            break
        default:
            console.log("Operação inválida!")
    }
}

// Chamadas das funções com parâmetros
saudacao(prompt("Digite seu nome: "))
soma(Number(prompt("Digite o primeiro número: ")), Number(prompt("Digite o segundo número: ")))
parOuImpar(Number(prompt("Digite um número e descubra se é par ou ímpar: ")))
media(Number(prompt("Digite a primeira nota: ")), Number(prompt("Digite a segunda nota: ")), Number(prompt("Digite a terceira nota: ")))
dobro(Number(prompt("Digite um número e descubra o dobro: ")))
aprovacao(Number(prompt("Digite a primeira nota: ")), Number(prompt("Digite a segunda nota: ")), Number(prompt("Digite a terceira nota: ")))
calculadora(Number(prompt("Digite o primeiro número: ")), Number(prompt("Digite o segundo número: ")), prompt("Digite a operação: "))

// Desafio: Fatorial
function fatorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}
