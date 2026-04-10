//1
console.log("1 - Comparando Dois Números")
let numero1 = Number(prompt("Qual Seu Primeiro Numero?"));
let numero2 = Number(prompt("Qual Seu Segundo Numero?"));
console.log(numero1 > numero2)
console.log("----------------")
console.log(numero1 <= numero2)
console.log("----------------")
console.log(numero1 == numero2)
console.log("----------------")

//2
console.log("2 - Idade para Votar")
let n1 = Number(prompt("Qual Sua Idade para Votar?"));
console.log("O numero é maior ou igual a 16?")
console.log(n1 >= 16)
console.log("----------------")

//3
console.log("3 - Maioridade")
let idade = Number(prompt("Qual Sua Idade?"));
console.log("É Maior ou igual a 18?")
console.log(idade >= 18)
console.log("----------------")
console.log("É Maior ou igual a 60?")
console.log(idade >= 60)
console.log("----------------")

//4
console.log("4 - Verificação de Login")
let login = (prompt("Qual seu login?"));
console.log("A Senha Está")
console.log(login == "admin")
console.log("----------------")

//5
console.log("5 - Saldo Bancário")
let saldo = Number(prompt("Qual Seu Saldo?"));
let saque = Number(prompt("Quanto Quer Sacar?"));
console.log(saldo >= saque)
let sobrou = saldo - saque
console.log(sobrou > 100)

//6
console.log("6 - Média do Aluno")
let nota1 = Number(prompt("Qual Foi Sua Primeira Nota?"));
let nota2 = Number(prompt("Qual Foi Sua Segunda Nota?"));
console.log("A Média do Aluno é")
console.log((nota1 + nota2)/2)
console.log("----------------")

//7
console.log("7 - Preço do Produto")
let produto = Number(prompt("Qual Valor Do Produto"));
console.log("Produto é Maior Que 50?")
console.log(produto > 50)
console.log("Produto é Menor ou Igual a 20?")
console.log(produto <= 20)
console.log("----------------")

//8
console.log("8 - Velocidade da Via")
let velocidade = Number(prompt("Qual Sua Velocidade da Via"));
console.log(velocidade)
console.log("A Velocidade é Maior Que 80?")
console.log(valocidade > 80)
console.log("A Velocidade é Maior Que 60?")
console.log(valocidade > 120)
console.log("----------------")

//9
console.log("9 - Altura para Brinquedo")
let metros = Number(prompt("Qual Sua Altura em Metros?"));
console.log(altura >= 1.40)
console.log("----------------")

//10
console.log("10 - Nome Cadastrado")
let nome = (prompt("Qual Nome Cadastrado?"));
console.log("O nome é igual a Maria")
console.log(nome == "Maria")
console.log("----------------")
console.log("O nome é diferente de João")
console.log(nome != "João")
console.log("----------------")

//11
console.log("1️1 - Senha Simples")
let senha = (prompt("Qual Sua Senha?"));
console.log("A Senha é igual a 1234?")
console.log(senha = 1234)

//12
console.log("12 - Parcelamento")
let compr = (prompt("Qual Valor Do Seu Produto?"));
let parcela = (prompt("Qual Valor Da Parcela?"));
console.log(parcela <= 200)

//13
console.log("13 - Idade em Meses")
let idd = (prompt("Qual Sua Idade Em Anos?"));
let mes = idd * 12
console.log("Sua Idade Em Mês é")
console.log(mes)