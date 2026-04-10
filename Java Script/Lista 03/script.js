console.log("01 - Pode Dirigir")
let idade = (prompt("Qual sua idade?"))
let cnh = (prompt("Possui CNH (sim/nao)?"))
console.log(idade >= 18 && cnh == "sim")

console.log("--------------------------")

console.log("02 - Aprovação Escolar")
let nota = (prompt("Qual sua nota?"))
let falta = (prompt("Quantas faltas você tem?"))
console.log(nota >= 6 && falta < 10)

console.log("--------------------------")

console.log("03 - Acesso ao Evento")
let idd = (prompt("Qual sua idade?"))
let convite = (prompt("Tem convite (sim/nao)?"))
console.log(idade >= 18 && convite == "sim")

console.log("--------------------------")

console.log("04 - Empréstimo Bancário")
let sal = (prompt("Qual seu salario?"))
let nome = (prompt("Seu nome está limpo (sim/nao)?"))
console.log(sal >= 2500 && nome == "sim")

console.log("--------------------------")

console.log("05 - Entrada ")
let convite1 = (prompt("Você tem convite (sim/nao)?"))
let nome1 = (prompt("Seu nome está na lista (sim/nao)?"))
console.log(convite1 == "sim" || nome1 == "sim")

console.log("--------------------------")

console.log("06 - Desconto na Barbearia")
let compra = (prompt("Qual valor da compra?"))
let vip = (prompt("Você é cliente VIP (sim/nao)?"))
console.log(compra >= 80 || vip == "sim")

console.log("--------------------------")

console.log("07 - Recuperação Escolar")
let nota2 = (prompt("Qual foi sua nota na recuperação?"))
let trabalho = (prompt("Fez trabalho extras (sim/nao)?"))
console.log(nota2 > 5 && trabalho == "sim")

console.log("--------------------------")

console.log("08 - Liberação de Sistema")
let senha = (prompt("Qual a senha?"))
let digital = (prompt("A digital funcionou (sim/nao)?"))
console.log(senha == 1234 && digital == "sim")

console.log("--------------------------")

console.log("09 - Conta Bloqueada")
let bloqueado = true
console.log(bloqueado)

console.log("--------------------------")

console.log("10 - Cadastro Incompleto")
let temCadastro = false
console.log(temCadastro)

console.log("--------------------------")

console.log("11 - Acesso Completo")
let login1 = (prompt("Qual seu login?"))
let senha1 = (prompt("Qual seu senha?"))
console.log(login1 == "ADMIN" && senha1 == "senai2026")

console.log("--------------------------")

console.log("12 - Compra Parcelada")
let compra1 = (prompt("Qual o valor da compra?"))
let cartao = (prompt("Possui o cartão da loja (sim/nao)?"))
let nomelimpo = (prompt("Possui o nome limpo (sim/nao)?"))
console.log(compra1 > 300 && cartao == "sim" && nomelimpo == "sim")

console.log("--------------------------")

console.log("13 - Matrícula")
let idd1 = (prompt("Qual sua idade?"))
let doc = (prompt("Entregou os documentos (sim/nao)?"))
let nmlimpo = (prompt("Possui o nome limpo (sim/nao)?"))
console.log(idd1 >= 17 && doc == "sim" && nomelimpo == "sim")

console.log("--------------------------")

console.log("14 - Entrada no Clube")
let idd2 = (prompt("Qual sua idade?"))
let socio = (prompt("Você é socio (sim/nao)?"))
let convidado = (prompt("É convidao (sim/nao)?"))
console.log(idd2 >= 15 && (socio == "sim" || convidado == "sim"))