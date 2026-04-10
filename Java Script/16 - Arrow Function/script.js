//1
let dobro = (num) => {
    return num * 2
}
let num = Number(prompt("Me fale um numero"))
console.log(dobro(num))

console.log("------------------------------")

//2
let somar = (n1, n2) => {
    return n1 + n2
}
let n1 = Number(prompt("Me fale o 1° número"))
let n2 = Number(prompt("Me fale o 2° número"))
console.log(somar(n1, n2))

console.log("------------------------------")

//3
let quadrado = (nu1) => {
    return "A Raiz Quadrada é " + nu1 * nu1
}
let nu1 = Number(prompt("Me fale um número"))
console.log(quadrado(nu1))

console.log("------------------------------")

//4
let sucessor = (num1) => {
    return num1 + 1
}
let num1 = Number(prompt("Me fale um numero"))
console.log(sucessor(num1))

console.log("------------------------------")

//5
let maiorNumero = (nume, nume1) => {
    if(nume > nume1) {
        return nume
    } else if (nume1 > nume) {
        return nume1
    }
}
let nume = Number(prompt("1° Numero"))
let nume1 = Number(prompt("2° Numero"))
console.log(maiorNumero(nume, nume1))

console.log("------------------------------")

//6
let parOuImpar = (numer) => {
    let aux = numer % 2
    if(aux == 0) {
        return "Par"
    } else {
        return "Impar"
    }
}
let numer = Number(prompt("Qual o numero?"))
console.log(parOuImpar(numer))

console.log("------------------------------")

//7
let verificarNumero = (numer1) => {
    if(numer1 == 0) {
        return "Numero é Zero"
    } else if (numer1 > 0) {
        return "Numero Positivo"
    } else {
        return "Numero Negativo"
    }
}
let numer1 = Number(prompt("Qual o Numero? "))
console.log(verificarNumero(numer1))

console.log("------------------------------")

//8
let media = (numero, numero1, numero2) => {
    let aux1 = (numero + numero1 + numero2)
    return aux1 / 3
}
let numero = Number(prompt("1° Nota"))
let numero1 = Number(prompt("2° Nota"))
let numero2 = Number(prompt("3° Nota")) 
console.log(media(numero, numero1, numero2))

console.log("------------------------------")

//9
let calcularDesconto = (preco) => {
    let aux2 = preco * 0.20
    return preco - aux2
}
let preco = Number(prompt("Digite o preço do produto"))
console.log(calcularDesconto(preco))

console.log("------------------------------")

//10
let verificarAprovacao = (nota1, nota2) => {
    auxmedia = (nota1 + nota2) / 2
    if(auxmedia >= 7) {
        return "Aprovado"
    } else if (auxmedia >= 5 && auxmedia < 7) {
        return "Recuperação"
    } else if (auxmedia < 5) {
        return "Reprovado"
    } else {
        return "nota invalida"
    }
}
let nota1 = Number(prompt("1° Nota"))
let nota2 = Number(prompt("2° Nota"))
console.log(verificarAprovacao(nota1, nota2))