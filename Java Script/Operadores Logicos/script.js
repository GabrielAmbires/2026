//04 - Operadores Lógicos
// && - e - tudo tem que ser verdade
// || - ou - apenas uma coisa deve ser verdade
// ! - não - inverte o resultado

let idade = 18
let convite = true
console.log(idade >= 18 && convite == true) //true

console.log("----------------------------")

let dia = "quinta"
console.log(dia == "sabado" || dia == "domingo") //false

console.log("----------------------------")

let valor = 20
console.log(valor >= 10 && valor <= 99) //true

console.log("----------------------------")

let bloqueado = true
console.log(!bloqueado) //true

console.log("----------------------------")

let numero = Number(prompt("Informe um numero"))
console.log(!(numero >= 100))

console.log("----------------------------")

/* Para fazer login em um computador do Senai, o usuario deve ser "TDS2" e a senha "senai2026". Faça o código que pergunte as credenciais para o usuario e mostre se ele consegue ou não acessar */

console.log("RESPOSTA")
let login = (prompt("Login"))
let senha = Number(prompt("Senha"))
console.log(login == "TDS2" && senha == "senai2026")

/* Para ser aprovado o aluno precisa ter nota maior ou igual a 50 e ter a frequencia maior ou igual a 75. Peça as informaçoes para o usuario e veja se ela sera aprovado. */

console.log("RESPOSTA 2")
let aluno = Number(prompt("Qual Sua Nota?"))
let freq = Number(prompt("Qual Sua Frequencia?"))
console.log(aluno >= 50 && freq >= 75)

/* Para assistir o filme de terror no cinema, é preciso ter idade maior ou igual a 14 ou estar acompanhado do responsavel */

console.log("RESPOSTA 3")
let idd = Number(prompt("Qual Sua Idade?"))
let acomp = prompt("Esta Acompanhado")
console.log(idd >= 14 || aconp == "sim")

/* Para fazer academia do Sesi voce deve ser aluno do sesi ou do senai e pagar a mensalidade */

console.log("RESPOSTA 4")
let esc = Number(prompt("Você é aluno de qual escola??"))
let mensa = Number(prompt("Você paga mensalidade?"))
console.log((esc == "sesi" || esc == "senai") && mensa == "sim")

/* Pergunte para esse usuario se ele tem internet (true/false) e mostre */

console.log("RESPOSTA 5")
let int = prompt("Você tem internet?")
console.log(internet == true)
console.log(internet)           