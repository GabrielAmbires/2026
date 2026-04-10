//1
let filmes = []
for (let i = 0; i < 3; i++) {
    filmes[i] = prompt("Fale 3 Filmes Favoritos")
}
console.log(filmes)
console.log("----------------------------------")
//2
let frutas = []
for (let i = 0; i < 5; i++) {
    frutas[i] = prompt("Fale 5 Frutas")
}
console.log(frutas)
console.log("----------------------------------")
//3
let cores = []
for (let i = 0; i < 3; i++) {
    cores[i] = prompt("Fale 3 Cores")
    cores.push("Rosinha")
}
console.log(cores)
console.log("----------------------------------")
//4
let num = []
for (let i = 0; i < 4; i++) {
    num[i] = Number(prompt("Me fale 4 numeros"))
}
num.pop()
console.log(num)
console.log("----------------------------------")
//5
let cidade = []
for (let i = 0; i < 2; i++) {
    cidade[i] = prompt("Adicione 2 Cidades")
}
cidade.unshift("Itaquaquecetuba")
console.log(cidade)
console.log("----------------------------------")
//6
let animais = []
for (let i = 0; i < 3; i++) {
    animais[i] = prompt("Adicione 3 Animais")
}
animais.shift()
console.log(animais)
//7
let carro = []
for (let i = 0; i < 4; i++) {
    carro[i] = prompt("Coloque 4 carros")
}
console.log(carro)
//8
let comb = []
for (let i = 0; i < 3; i++) {
    comb[i] = prompt("Me fale 3 numeros")
}
comb.unshift(99)
comb.pop()
comb.shift()
console.log(comb)
//9
let posi = []
for (let i = 0; i < 6; i++) {
    posi[i] = prompt("Me fale 6 posições (1 - 99): ")
}
for (let i = 0; i < 6; i++) {
    console.log(posi[i])
}