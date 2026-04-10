//1
let x = 1
while (x <= 10) {
    console.log(x)
    x++
}
console.log("------------------")
//2
let num = prompt("Digite um número para ver a tabuada:")
let contador = 1
while (contador <= 10) {
    console.log(num + " x " + contador + " = " + (num * contador))
    contador++
}
console.log("------------------")
//3
let y = 10
while (y >= 1) {
    console.log(y)
    y--
}
console.log("------------------")
//4
let senha = prompt("Qual sua senha?")
while (senha != "1234") {
    senha = prompt("Qual a senha")
}
console.log("Pode Acessar")
//5
let z = 50
while (z <= 100) {
    console.log(z)
    z++
}
console.log("------------------")
//6
let w = 0
while (w <= 100) {
    console.log(w)
    w += 5
}
console.log("------------------")
//7
let qnt = 1
let escreva = "Eu amo JavaScript"
while (qnt <= 5) {
    console.log(escreva)
    qnt += 1
}
console.log("------------------")
//8
let nome = prompt("Digite seu nome:")
let numero = prompt("Digite um número:")
let contador1 = 0
while (contador1 < numero) {
    console.log(nome)
    contador1++
}
console.log("------------------")
//9
let nota = 0
nota = (prompt("Digite uma nota entre 0 e 10:"))
while (nota < 0 || nota > 10) {
    nota = prompt("Nota inválida. Tente novamente.")
}
console.log("Nota registrada com sucesso")
console.log("------------------")
// 10
let soma = 0
let numero9 = 0
numero9 = Number(prompt("Digite um número (negativo para parar):"))
while (numero9 >= 0) {
    soma += numero9
    numero9 = Number(prompt("Digite um número (negativo para parar):"))
}
console.log("A soma dos números digitados é: " + soma )
console.log("------------------")
//11
let numero1 = 0
numero1 = (prompt("(1 - Cadastrar) (2 - Consultar) (3 - Sair)"))
while (numero1 != 3) {
    numero1 = prompt("(1 - Cadastrar) (2 - Consultar) (3 - Sair)")
}
console.log("Saiu")
console.log("------------------")
//12
let num4 = 1
while (num4 <= 50) {
    let resto = num4 % 2
    if (resto == 0) {
        console.log(num4)
    }
    num4++
}
console.log("------------------")
//13
let usuario = prompt("Qual o login?")
let senha1 = prompt("Qual sua senha?")
while (usuario != "admin" || senha1 != 123) {
    login = prompt("Qual o login")
    senha = prompt("Qual a senha")
}
console.log("Bem-vindo ao sistema!")
console.log("------------------")
//14
let numerosecret = 7
let desc = prompt("Descubra o numero")
while (desc != numerosecret) {
    desc = prompt("Descubra o numero")
}
console.log("Acertou numero 7")
