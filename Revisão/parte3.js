// Revisão Parte 3

// Função de textos
let nome = "Gabriel"
console.log(nome.length) // length = tamanho

console.log("----------------------------------")

//Maisculas e Minusculas
let frase = "   Hoje É Sexta   "
console.log(frase)
console.log(frase.toUpperCase()) //maisculas
console.log(frase.toLowerCase()) //minusculas
console.log(frase.trim()) //remove os espaços

console.log("----------------------------------")
//Substituição de palavras
let frase2 = "Hoje o dia está bonito"
let palavraAntiga = "bonito"
let palavraNova = "lindo"
console.log(frase2)
console.log(frase2.replace(palavraAntiga, palavraNova))

// Verificar se existe uma palavra
let buscar = "dia"
console.log(frase2.includes(buscar))
console.log("----------------------------------")
let palavra = "senai"
//             01234
console.log(palavra.charAt(1)) //retorna a letra da posição
console.log("----------------------------------")
let texto = "Eu gosto de jogar"
console.log(texto.split(" "))
console.log("----------------------------------")
console.log("----------------------------------")
//Math
//Aleatório
console.log(Math.random()) //Numero aleatorio entre 0 e 1
//Numero aleatiorio entre 0 e 1
let n1 = Math.random() + 1
console.log(n1) // Entre 1 e 2
let n2 = Math.random() * 5 //0 a 5
console.log(n2)
let n3 = Math.floor(Math.random() * 5) //0 a 5
console.log(n3)
let n4 = Math.floor(Math.random() * 5) + 1 
//             (Math.random() * quantidade) + inicio
console.log(n4) // 1 a 5
let n5 = Math.floor(Math.random() * 11) + 10
//                                possibilidade + inicio
console.log(n5) // 10 a 20

console.log("----------------------------------")
//Arredondamento
let numero = 5.9
console.log(Math.ceil(numero)) //cima
console.log(Math.floor(numero)) //baixo
console.log(Math.round(numero)) //justo

console.log("----------------------------------")

//Funçoes Matemáticas
console.log(Math.max(10, 5, 9, 3, 1, 65, 14)) //maior número

console.log(Math.min(10, 5, 9, 3, 1, 65, 14)) //menor número

console.log("----------------------------------")

//Raiz quadrada
console.log(Math.sqrt(25)) //5
// Potência
console.log(Math.pow(2, 4)) // 2 * 2 * 2 * 2 = 16
//Valor absoluto
console.log(Math.abs(-5))

console.log("----------------------------------")
console.log("----------------------------------")

//Função Declarativa
function escola() {
    console.log("Luis Eulalio de Bueno Vidigal Filho")
}
function soma() {
    let num1 = 5
    let num2 = 7
    console.log(num1 + num2)
}

escola()
soma()
function idade(nascimento) {
    let total = 2026 - nascimento
    console.log("Você tem ", anos)
}
let valor = Number(prompt("Digite o ano do seu nascimento: "))
idade(valor)

function banco(saldo, saque) {
    let total = saldo - saque
    console.log("Saldo restante", sobrou)
}
banco(3000, 500)