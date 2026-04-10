//1
let triplo = function(numero) {
    return numero * 3
}
let numero = Number(prompt("Digite um numero e receba o triplo dele"))
console.log(triplo(numero))

//2
let multiplicar = function(num1, num2) {
    return num1 * num2
}
let num1 = Number(prompt("Primeiro Numero"))
let num2 = Number(prompt("Segundo Numero"))
console.log(multiplicar(num1, num2))

//3
let metade = function(n1) {
    return n1 / 2
}
let n1 = Number(prompt("Digite um numero te darei a metade dele"))
console.log(metade(n1))

//4
let sucessor = function(nsucessor) {
    return nsucessor + 1
}
let nsucessor = Number(prompt("Digite um numero e receba o sucessor"))
console.log(sucessor(nsucessor))

//5
let maiorNumero = function(mnum1, mnum2) {
    if(mnum1 > mnum2) {
        return mnum1 
    } else if (mnum2 > mnum1) {
        return mnum2
    } else {
        return "Invalido"
    }
}
let mnum1 = Number(prompt("Primeiro Numero"))
let mnum2 = Number(prompt("Segundo Numero"))
console.log(maiorNumero(mnum1, mnum2))  

//6
let verificarNumero = function(vnum) {
    if(vnum == 0) {
        return "Numero é zero"
    } else if (vnum > 0) {
        return "Numero Positivo"
    } else {
        return "Numero Negativo"
    }
}
let vnum = Number(prompt("Digite um numero"))
console.log(verificarNumero(vnum))

//7
let parImpar = function(numer) {
    let aux = numer % 2
    if(aux == 0) {
        return "Par"
    } else {
        return "Impar"
    }
}
let numer = Number(prompt("Qual o numero?"))
console.log(parImpar(numer))

//8
let media = (numero, numero1, numero2) => {
    let aux1 = (numero3 + numero1 + numero2)
    return aux1 / 3
}
let numero3 = Number(prompt("1° Número"))
let numero1 = Number(prompt("2° Número"))
let numero2 = Number(prompt("3° Número")) 
console.log(media(numero, numero1, numero2))


//9
let calcularDesconto = function(preco) {
    let aux2 = preco * 0.15
    return preco - aux2
}
let preco = Number(prompt("Digite o preço do produto"))
console.log(calcularDesconto(preco))

console.log("------------------------------")

//10
let verificarAprovacao = function(nota1, nota2) {
    auxmedia = (nota1 + nota2) / 2
    if(auxmedia >= 7) {
        return "Aprovado"
    } else if (auxmedia >= 5 && auxmedia < 7) {
        return "Recuperação"
    } else if (auxmedia < 5) {
        return "Reprovado"
    } else {
        return "Nota invalida"
    }
}
let nota1 = Number(prompt("1° Nota"))
let nota2 = Number(prompt("2° Nota"))
console.log(verificarAprovacao(nota1, nota2))