let frutas = ["maça", "banana", "laranja"]

console.log(frutas) // todo o array

console.log("-------------------") 

console.log(frutas[0])
console.log(frutas[2]) 
console.log(frutas[1]) 

console.log("-------------------")

//Medir
console.log(frutas.length) //Contar //3
//length = tamanho
console.log(frutas[1].length) //6
let nome = "Curso Tecnico em desenvolvimento de sistemas"
console.log(nome.length)

//Adicionar
//push = adicionar no final
frutas.push("Uva")
frutas.push("Morango")
console.log(frutas)
//unshift = Adicionar no começo 
frutas.unshift("Abacaxi")
frutas.unshift("Manga")

//Remover
//pop = remover do final
frutas.pop()
console.log(frutas)
//shift = remover do inicio
frutas.shift()
console.log(frutas)

//spice = remover do meio
frutas.splice(1,1) //splice(posição, quantidade)
console.log(frutas)

//Editar
frutas[2] = "limão"
console.log(frutas)

//Encontrar uma posição
console.log(frutas.indexOf("Abacaxi")) //0
console.log(frutas.indexOf("limão")) //2
console.log(frutas.indexOf("Morango")) //-1 

console.log("-----------------------------------")
//Varrer o vetor
let amigos = ["Luana", "Rebeca", "Tatiane", "Felipe", "Ana"]
for(let i = 0; i < amigos.length; i++) {
    if(amigos[i].length >= 6) {
        console.log("O nome tem 6 letras mais")
    } else {
        console.log("O nome tem 5 letras ou menos")
    }
}
console.log("------------------------------")
let alunos = []
for(let i = 0; i < 5; i++) {
    alunos[i] = prompt("Qual o nome do aluno?")
}
for(let i = 0; i < alunos.length; i++) {
    console.log(alunos[i])
}
let cores = ["Rosa", "Preto", "Branco", "Roxo"]
cores.push("Verde")
cores.push("Azul")
cores.shift()

for(let i = 0; i < cores.length; i++) {
    console.log(cores[i])
}


let notas = []
for(let i = 0;   i < 5; i++) {
    notas[i] = Number(prompt("Fale 5 Cores"))
}
for(let i = 0; i < notas.length; i++) {
    if(notas[i] > 7) {
        console.log (notas[i])
    }
}
console.log(notas)
