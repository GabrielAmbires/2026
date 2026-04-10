//1
function dobro(numero) {
    console.log("O dobro é", numero * 2)
}
let n1 = Number(prompt("Digite um número"))
dobro(n1)

console.log("-------------------------------")

//2
function calcularArea(base, altura) {
    console.log("A área é", base * altura)
}
let b = Number(prompt("Informe a base"))
let h = Number(prompt("Informe a altura"))
calcularArea(b, h)

console.log("-------------------------------")

//3
function converterParaFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32
    console.log("Temperatura em Fahrenheit:", fahrenheit)
}
let c = Number(prompt("Digite a temperatura em Celsius"))
converterParaFahrenheit(c)

console.log("-------------------------------")

//4
function verificarNota(nota) {
    if (nota >= 7) {
        console.log("Aprovado")
    } else if (nota >= 5) {
        console.log("Recuperação")
    } else {
        console.log("Reprovado")
    }
}
let notaAluno = Number(prompt("Informe a nota"))
verificarNota(notaAluno)

console.log("-------------------------------")

//5
function verificarNumero(numero) {
    if (numero > 0) {
        console.log("Positivo")
    } else if (numero < 0) {
        console.log("Negativo")
    } else {
        console.log("Zero")
    }
}
let num = Number(prompt("Informe um número"))
verificarNumero(num)

console.log("-------------------------------")

//6
function contarPares(numero) {
    for (let i = 0; i <= numero; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
let limite = Number(prompt("Informe um número"))
contarPares(limite)

console.log("-------------------------------")

//7
function somarIntervalo(inicio, fim) {
    let soma = 0

    for (let i = inicio; i <= fim; i++) {
        soma += i
    }

    console.log("Soma:", soma)
}
let inicio = Number(prompt("Informe o início"))
let fim = Number(prompt("Informe o fim"))
somarIntervalo(inicio, fim)

console.log("-------------------------------")

//8
function repetirNome(nome, vezes) {
    for (let i = 0; i < vezes; i++) {
        console.log(nome)
    }
}
let nome = prompt("Informe um nome")
let vezes = Number(prompt("Quantas vezes repetir?"))
repetirNome(nome, vezes)

console.log("-------------------------------")

//9
function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i))
    }
}
let numTab = Number(prompt("Informe um número"))
tabuada(numTab)

console.log("-------------------------------")

//10
function contagemPersonalizada(numero) {
    for (let i = numero; i >= 0; i--) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}
let numCont = Number(prompt("Informe um número"))
contagemPersonalizada(numCont)

console.log("-------------------------------")

//11
function mediaAluno(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3

    if (media >= 7) {
        console.log("Aprovado")
    } else if (media >= 5) {
        console.log("Recuperação")
    } else {
        console.log("Reprovado")
    }
}
let nota1 = Number(prompt("Digite a primeira nota"))
let nota2 = Number(prompt("Digite a segunda nota"))
let nota3 = Number(prompt("Digite a terceira nota"))
mediaAluno(nota1, nota2, nota3)