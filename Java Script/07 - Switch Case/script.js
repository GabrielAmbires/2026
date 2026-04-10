//1
let dia = Number(prompt("Qual dia da semana você esta? (1 = Domingo | 2 = Segunda-Feira | 3 = Terça-Feira | 4 = Quarta-feira | 5 = Quinta-feira | 6 = Sexta-feira | 7 = Sabado)"))
switch (dia) {
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda-Feira")
        break
    case 3:
        console.log("Terça-Feira")
        break
    case 4:
        console.log("Quarta-Feira")
        break
    case 5:
        console.log("Quinta-Feira")
        break
    case 6:
        console.log("Sexta-Feira")
        break
    case 7:
        console.log("Sabado")
        break
    default:
        console.log("Dia Invalido")
}

//2
let idd = Number(prompt("Classifique Idade Insira 5, 10, 15, 20 ou 30."))
switch (idd) {
    case 5:
        console.log("Infantil A")
        break
    case 10:
        console.log("Infantil B")
        break
    case 15:
        console.log("Juvenil A")
        break
    case 20:
        console.log("Juvenil B")
        break
    case 30:
        console.log("Adulto")
        break
    default:
        console.log("Idade Invalida Insira 5, 10, 15, 20 ou 30.")
}

//3
let turno = Number(prompt("Qual seu turno? M - Bom dia | V - Boa tarde | N - Boa noite"))
switch (turno) {
    case "M":
        console.log("Bom Dia")
        break
    case "V":
        console.log("Boa Tarde")
        break
    case "N":
        console.log("Boa Noite")
        break
    default:
        console.log("Turno inválido. Insira M, V ou N.")
}

//4
let num = Number(prompt("Insira um número de 1 a 5"))
switch (num) {
    case 1:
        console.log("Bom Dia")
        break
    case 2:
        console.log("Boa Tarde")
        break
    case 3:
        console.log("Boa Noite")
        break
    case 4:
        console.log("Boa Madrugada")
        break
    case 5:
        console.log("Bom Trabalho")
        break
    default:
        console.log("Número fora do intervalo. Insira um valor entre 1 e 5.")
}

//5
let est = Number(prompt("Insira um número de 1 a 4"))
switch (est) {
    case 1:
        console.log("Primavera")
        break
    case 2:
        console.log("Verão")
        break
    case 3:
        console.log("Outono")
        break
    case 4:
        console.log("Inverno")
        break
    default:
        console.log("Estação inválida. Insira um número de 1 a 4.")
}

//6
let mat = Number(prompt("Insira um número | 1 = Somar | 2 = Subtrair | 3 = Multiplicar | 4 = Dividir"))
switch (mat) {
    case 1:
        console.log("Somar")
        break
    case 2:
        console.log("Subtrair")
        break
    case 3:
        console.log("Multiplicar")
        break
    case 4:
        console.log("Dividir")
        break
    default:
        console.log("Operação inválida.")
}

//7
let cod = Number(prompt("Informe o codigo do produto (100 = Caneta | 200 = Lápis | 300 = Borracha | 400 = Caderno)"))
switch (cod) {
    case 100:
        console.log("Caneta")
        break
    case 200:
        console.log("Lápis")
        break
    case 300:
        console.log("Borracha")
        break
    case 400:
        console.log("Caderno")
        break
    default:
        console.log("Produto não encontrado")
}

//8
let nota = Number(prompt("Informe uma letra e receba o desempenho"))
switch (nota) {
    case "A":
        console.log("Exelente")
        break
    case "B":
        console.log("Bom")
        break
    case "C":
        console.log("Regular")
        break
    case "D":
        console.log("Ruim")
        break
    case "F":
        console.log("Reprovado")
        break
    default:
        console.log("Conceito inválido")
}

//9
let jg = Number(prompt("Escolha uma opção (1 = Atacar | 2 = Defender | 3 = Curar | 4 = Fugir)"))
switch (jg) {
    case 1:
        console.log("Atacar")
        break
    case 2:
        console.log("Defender")
        break
    case 3:
        console.log("Curar")
        break
    case 4:
        console.log("Fugir")
        break
    default:
        console.log("Opção inválida. Você perdeu a vez")
}

//10
let cnv = Number(prompt("Escolha uma opção (1 = Atacar | 2 = Defender | 3 = Curar | 4 = Fugir)"))
switch (cnv) {
    case 1:
        console.log("Atacar")
        break
    case 2:
        console.log("Defender")
        break
    case 3:
        console.log("Curar")
        break
    default:
        console.log("Opção inválida")
}

//11
let tec = Number(prompt("Escolha um setor (1 = Suporte Técnico | 2 = Financeiro | 3 = Comercial | 4 = Cancelamento)"))
switch (tec) {
    case 1:
        console.log("Suporte Tecnico")
        break
    case 2:
        console.log("Financeiro")
        break
    case 3:
        console.log("Comercial")
        break
    case 3:
        console.log("Cancelamento")
        break
    default:
        console.log("Setor inválido.")
}

//12
let card = Number(prompt("Escolha um Lanche do cardapio (1 = Hambúrguer | 2 = Pizza | 3 = Suco | 4 = Sorvete)"))
switch (card) {
    case 1:
        console.log("Hambúrger")
        break
    case 2:
        console.log("Pizza")
        break
    case 3:
        console.log("Suco")
        break
    case 3:
        console.log("Sorvete")
        break
    default:
        console.log("Pedido inválido")
}

//13
let avl = Number(prompt("Escolha um Lanche do cardapio (1 = Hambúrguer | 2 = Pizza | 3 = Suco | 4 = Sorvete)"))
switch (avl) {
    case 1:
        console.log("Péssimo")
        break
    case 2:
        console.log("Ruim")
        break
    case 3:
        console.log("Regular")
        break
    case 3:
        console.log("Bom")
        break
    case 3:
        console.log("Excelente")
        break
    default:
        console.log("Nota inválida")
}

//14
let usu = Number(prompt("Escolha um Lanche do cardapio (1 = Administrador | 2 = Professor | 3 = Aluno | 4 = Visitante)"))
switch (usu) {
    case 1:
        console.log("Administrador")
        break
    case 2:
        console.log("Professor")
        break
    case 3:
        console.log("Aluno")
        break
    case 3:
        console.log("Visitante")
        break
    default:
        console.log("Usuário inválido.")
}

//15
let cat = Number(prompt("Escolha uma categoria de filme (1 = Ação | 2 = Comédia | 3 = Drama | 4 = Terror | 5 = Animação)"))
switch (cat) {
    case 1:
        console.log("Ação")
        break
    case 2:
        console.log("Comédia")
        break
    case 3:
        console.log("Drama")
        break
    case 4:
        console.log("Terror")
        break
    case 5:
        console.log("Animação")
        break
    default:
        console.log("Categoria inválida.")
}