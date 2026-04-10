//1
for(let i = 1; i <=30; i++) {
console.log(i)
}

console.log("-------------------------")

//2
for(let i = 30; i >=1; i--) {
    console.log(i)
}

console.log("-------------------------")

//3
for(let i = 1; i <= 5; i++ ) {  
let numero = Number(prompt("Informe 5 numeros") )
if(numero >= 50) {
    console.log("Acima da Media")
} else {
    console.log("Abaixo da media")
}
}

console.log("-------------------------")

//4
let tabuada = Number(prompt("Informe um numero"))
for(let i = 1; i <= 10; i++ ) {
    let resultado = tabuada * i
    console.log(tabuada, "x," , i , "=", resultado)
}   

console.log("-------------------------")

//5
let numero = Number(prompt("Informe um numero positivo"))

for (let i = numero; i > 0; i--) {

    console.log(i, " patinhos foram passearAlém das montanhas para brincar A mamãe gritou: Quá, quá, quá, quá Mas só ",i-1," patinhos voltaram de lá")
}

console.log("-------------------------")

//6
let idade = Number(prompt("Informe 10 idades"))
for(let i = 1; i <=10; i++) {
    if(idade >= 18){
        console.log("Maior de idade")
} else {
console.log("Menor de idade")
}
}

console.log("-------------------------")

//7
let votos = Number(prompt("Informe 5 votos"))
for(let i = 1; i  <=6; i++){
 if(votos == 1,2,3,4){
    console.log("Candidato")
}else if(votos = 5){
   console.log("Voto nulo")  
}else{
    console.log("Voto em brancol")
    }
}
for(let i = 1; i <=5; i++) {
 let numero = Number(prompt("Informe 5 Numeros"))
resultado =  numero + numero 
console.log(resultado)
}

console.log("-------------------------")

//9
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("-------------------------")

//10

let inicio = Number(prompt("Digite o número inicial:"));
let fim = Number(prompt("Digite o número final:"));
for (let i = inicio; i <= fim; i++) {
    console.log(i);
}