// Operador Tenário
/*
if (condição) {
    se verdadeiro
} else {
    se falso
}
*/
let idade = 20
let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log(resultado)

let nota = 9
let situacao = nota > 9 ? "Aprovado" : nota > 7 ? "Recuperação" : nota <= 7 ? "Reprovado" : "Nota inválida"
console.log(situacao)

// Laços de Repetição
// While - Enquanto

let numero = 6
while (numero <= 5) {
    console.log(numero)
    numero++ //+1
}
let numero2 = 10
while (numero2 >= 0) {
    console.log(numero2)
    numero2 -= 2 //numero2 = numero2 - 2
}
let palavra = "senai"
// while (palavra == "senai") {
//     console.log("Acertou")
//     palavra = prompt("Digite uma nova palavra: ")
// }
//Do...While
let num = 1
do {
    console.log(num)
    num += 1
} while (num <= 5)

let dobro = 2
do {
    console.log(dobro)
    dobro *= 2 
} while (dobro <= 1000)
console.log("----------------------------")
//For
for(let i = 1; i <= 5; i++) {
    console.log(i)
}
//tabuada
let num1 = 5
for(let i = 1; i <= 10; i++) {
    let tabuada = num1 * i
    console.log(tabuada)
}
console.log("----------------------------")
// ARRAY
let frutas = ["maçã", "banana", "laranja"]
//              0         1          2
// Tamanho 3
console.log(frutas[1]) //banana
console.log(frutas)

frutas.pop() //remove o último elemento
console.log(frutas)

frutas.push("uva") //adiciona um elemento no final
console.log(frutas)

frutas.shift() //remove o primeiro elemento
console.log(frutas)

frutas.unshift("morango") //adiciona um elemento no início
console.log(frutas)

console.log(frutas.length) //tamanho do array

console.log(frutas.includes("manga")) //verifica se o elemento existe no array

console.log(frutas.indexOf("uva")) //retorna a posição do elemento no array, caso não exista retorna -1

console.log(frutas.reverse()) //inverte a ordem do array

console.log(frutas.sort()) //ordena o array em ordem alfabética