//1
let idade = Number(prompt("Me fale sua idade?"))
let res = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log(res)
console.log(res)

console.log("--------------------")

//2
let num1 = Number(prompt("Informe um numero"))
let num2 = num1 % 2
let res12 = num2 == 0 ? "par" : "impar"
console.log(res12)


console.log("--------------------")

//3
let nota = Number(prompt("Qual sua nota?"))
let res1 = nota >= 6 ? "Aprovado" : "Reprovado"
console.log(res1)

console.log("--------------------")

//4
let banco = Number(prompt("Qual seu saldo?"))
let res2 = banco > 0 ? "Saldo Positivo" : "Saldo Negativo"
console.log(res2)

console.log("--------------------")

//5
let compra = Number(prompt("Qual o valor da compra?"))
let res3 = compra >= 100 ? "Você vai receber 10% de desconto" : "Você ira pagar o valor normal"
console.log(res3)

console.log("--------------------")

//6
let idd = Number(prompt("Qual sua idade?"))
let res4 = idd >= 18 ? "Entrada permitida" : "Entrada proibida"
console.log(res4)

console.log("--------------------")

//7
let usuario = (prompt("Qual o usuario?"))
let res5 = usuario != "admin" ? "Acesso Negado" : "Acesso Liberado"
console.log(res5)

console.log("--------------------")

//8
let temp = Number(prompt("Qual a temperatura?"))
let res6 = temp > 30 ? "Está Quente" : "Temperatura Normal"
console.log(res6)

console.log("--------------------")

//9
let num = Number(prompt("Me fale um numero?"))
let res7 = num > 0 ? "Numero Positivo" : "Número negativo ou zero"
console.log(res7)

console.log("--------------------")

//10
let idd1 = Number(prompt("Qual Idade?"))
let res8 = idd1 < 12 ? "Criança" : idd1 < 18 ? "Adolescente" : idd1 < 60 ? "Adulto" : "Idoso"
console.log(res8)

console.log("--------------------")

//11
let velo = Number(prompt("Qual a velocidade?"))
let res9 = velo > 80 ? "Multado" : "Dentro do limite"
console.log(res9)

console.log("--------------------")

//12
let valor = Number(prompt("Qual o valor da compra?"))
let limite = Number(prompt("Qual o limite do cartão?"))
let res10 = valor <= limite ? "Compra Aprovada" : "Compra Recusada"
console.log(res10)

console.log("--------------------")

//13
let pontu = Number(prompt("Qual a pontuação?"))
let res11 = pontu < 100 ? "Iniciante" : pontu < 500 ? "Intermediário" : pontu < 1000 ? "Avançado" : "Mestre"
console.log(res11)