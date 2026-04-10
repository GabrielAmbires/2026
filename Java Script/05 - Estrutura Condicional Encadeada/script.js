//1
let idade = Number(prompt("Qual é a idade ?"))
if (idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}

console.log("----------------------------")

//2
let numero = Number(prompt("diga um numero ?"))
let aux = numero % 2
if (aux == 0) {
    console.log("é par")
} else {
    console.log("é impar")
}

console.log("----------------------------")

//3
let nota1 = Number(prompt("Qual a nota ?"))
if (nota1 >= 7) {
    console.log("O aluno sera aprovado ")
} else {
    console.log("o aluno será reprovado")
}

console.log("----------------------------")

//4
let idade1 = Number(prompt("Qual sua idade ?"))
if (idade1 >= 18) {
    console.log("Entrada Permitida")
} else {
    console.log("Entrada proibida")
}

console.log("----------------------------")

//5
let senha = prompt("Qual é a senha")
if (senha == "1234") {
    console.log("Senha correta")
} else {
    console.log("Senha incorreta ")
}

console.log("----------------------------")

//6
let temp = Number(prompt("Qual a temperatura ?"))
if (temp > 30) {
    console.log("Esta quente ")
} else {
    console.log("Esta frio")
}

console.log("----------------------------")

//7
let numero1 = Number(prompt("Informe um numero "))
if (numero1 > 0) {
    console.log("Numero positivo")
} else if (numero1 < 0) {
    console.log("numero negativo")
} else {
    console.log("numero é zero")
}

console.log("----------------------------")

//8
let saldo = Number(prompt("Qual o valor do saldo ?"))
let saque = Number(prompt("Qual o valor do saque ?"))
if (saldo >= saque) {
    console.log("Saque realizado")
} else {
    console.log("Saldo insuficiente")
}

console.log("----------------------------")

//9
let valor1 = Number(prompt("Qual o valor da compra"))
if (valor1 >= 200) {
    console.log("Desconto Aplicado")
} else {
    console.log("Sem desconto")
}

console.log("----------------------------")

//10
let num1 = Number(prompt("Informe um numero"))
let num2 = Number(prompt("Informe outro numero"))
if (num1 > num2) {
    console.log("o primeiro numero é maior")
} else if (num2 > num1) {
    console.log("o segundo numero é maior")
} else {
    console.log("os numeros são iguais")
}

console.log("----------------------------")

//11
let usu = prompt("Qual o nome de usuario ?")
if (usu == "admin") {
    console.log("Acesso permitido")
} else {
    console.log("Acesso Negado")
}

console.log("----------------------------")

//12
let nota = Number(prompt("Informe sua nota"))
if (nota >= 9) {
    console.log("Excelente")
} else {
    console.log("Pode melhorar")
}

console.log("----------------------------")

//13
let hora = Number(prompt("Digite a hora (0 a 23):"))
if (hora >= 8 && hora <= 18) {
    console.log("Horário de funcionamento")
} else {
    console.log("Fora do horário")
}

console.log("----------------------------")

//14
let usuario1 = prompt("Você tem cadastro ?")
if (usuario1 == "true") {
    console.log("Usuario Cadastrado")
} else {
    console.log("Cadastro necessario")
}