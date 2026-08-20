//Operadores Aritmeticos

// 1 - Area de um Retangulo
let largura = Number(prompt("Digite a largura do retangulo:"))
let altura = Number(prompt("Digite a altura do retangulo:"))
let area = largura * altura
console.log("Area do retangulo: " + area)

// 2 - Dobro e Metade
let numero = Number(prompt("Digite um numero:"))
console.log("Dobro: " + numero * 2)
console.log("Metade: " + numero / 2)

// 3 - Media Aritmetica
let nota1 = Number(prompt("Digite a primeira nota:"))
let nota2 = Number(prompt("Digite a segunda nota:"))
let nota3 = Number(prompt("Digite a terceira nota:"))
let media = (nota1 + nota2 + nota3) / 3
console.log("Media aritmetica: " + media)

// 4 - Conversao de Temperatura
let celsius = Number(prompt("Digite a temperatura em Celsius:"))
let fahrenheit = (celsius * 9 / 5) + 32
console.log("Temperatura em Fahrenheit: " + fahrenheit)

//Operadores Relacionais

// 1 - Comparando dois numeros
let primeiroNumero = Number(prompt("Digite o primeiro numero:"))
let segundoNumero = Number(prompt("Digite o segundo numero:"))
console.log("O primeiro e maior que o segundo: " + (primeiroNumero > segundoNumero))
console.log("O primeiro e menor ou igual ao segundo: " + (primeiroNumero <= segundoNumero))
console.log("Os dois numeros sao iguais: " + (primeiroNumero === segundoNumero))

// 2 - Maioridade
let idade = Number(prompt("Digite a idade:"))
console.log("Maior de idade: " + (idade >= 18))
console.log("Idosa: " + (idade >= 60))

console.log("ESTRUTURA CONDICIONAL - IF ELSE")

// 1 - Verificacao de Maioridade
function verificarMaioridade(idade) {
	if (idade >= 18) {
		return "Voce e maior de idade"
	}
	return "Voce e menor de idade"
}
console.log(verificarMaioridade(Number(prompt("Digite uma idade para verificar:"))))

// 2 - Verificacao de Aprovado
function verificarAprovacao(nota) {
	if (nota >= 7) {
		return "Aprovado"
	}
	return "Reprovado"
}
console.log(verificarAprovacao(Number(prompt("Digite a nota do aluno:"))))

// 3 - Verificar Temperatura
function verificarTemperatura(temperatura) {
	if (temperatura > 30) {
		return "Esta quente"
	}
	return "Esta frio"
}
console.log(verificarTemperatura(Number(prompt("Digite a temperatura:"))))

// 4 - Classificacao de Idade
function classificarIdade(idade) {
	if (idade < 12) {
		return "Crianca"
	} else if (idade < 17) {
		return "Adolescente"
	} else if (idade < 60) {
		return "Adulto"
	}
	return "Idoso"
}
console.log(classificarIdade(Number(prompt("Digite a idade para classificar:"))))

// 5 - Sistema de Notas Escolares
function classificarNota(nota) {
	if (nota > 90) {
		return "A"
	} else if (nota > 80) {
		return "B"
	} else if (nota > 70) {
		return "C"
	} else if (nota > 60) {
		return "D"
	}
	return "F"
}
console.log(classificarNota(Number(prompt("Digite a nota escolar:"))))

// 6 - Classificacao de Pistas em Corridas
function classificarPista(distancia) {
	if (distancia < 400) {
		return "Pista curta"
	} else if (distancia < 800) {
		return "Pista media"
	} else if (distancia <= 1500) {
		return "Pista longa"
	}
	return "Pista muito longa"
}
console.log(classificarPista(Number(prompt("Digite a distancia da pista em metros:"))))

// 7 - Pontuacao de Jogo
function classificarPontuacao(pontuacao) {
	if (pontuacao < 1000) {
		return "Iniciante"
	} else if (pontuacao < 5000) {
		return "Intermediario"
	} else if (pontuacao < 10000) {
		return "Avancado"
	}
	return "Mestre"
}
console.log(classificarPontuacao(Number(prompt("Digite a pontuacao do jogador:"))))

//Operadores Logicos

// 1 - Elegivel para Promocao
function verificarPromocao(anosDeTrabalho, projetosRealizados) {
	if (anosDeTrabalho >= 5 || projetosRealizados > 10) {
		return "Voce esta elegivel para promocao"
	}
	return "Voce nao esta elegivel para promocao"
}
let anosDeTrabalho = Number(prompt("Digite os anos de trabalho:"))
let projetosRealizados = Number(prompt("Digite a quantidade de projetos realizados:"))
console.log(verificarPromocao(anosDeTrabalho, projetosRealizados))

// 2 - Entrar em um Evento
function verificarEntradaEvento(idade) {
	if (idade >= 18 && idade <= 30) {
		return "Voce pode entrar no evento"
	}
	return "Voce nao pode entrar no evento"
}
console.log(verificarEntradaEvento(Number(prompt("Digite a idade para entrar no evento:"))))

// 3 - Verificacao de Login Avancada
function verificarLogin(usuario, senha) {
	if (usuario === "admin" && senha === "1234") {
		return "Login bem-sucedido"
	}
	return "Nome de usuario ou senha incorretos"
}
let usuario = prompt("Digite o nome de usuario:")
let senha = prompt("Digite a senha:")
console.log(verificarLogin(usuario, senha))

// 4 - Intervalo de Valores
function verificarIntervalo(numero) {
	if (numero >= 10 && numero <= 20) {
		return "O numero esta dentro do intervalo entre 10 e 20"
	} else if (numero >= 30 && numero <= 50) {
		return "O numero esta dentro do intervalo entre 30 e 50"
	}
	return "Ele nao esta dentro do intervalo de 10 e 20, nem 30 e 50"
}
console.log(verificarIntervalo(Number(prompt("Digite um numero:"))))

//Estrutura condicional - Switch Case

// 1 - Dias da Semana
let dia = Number(prompt("Digite um numero de 1 a 7:"))
switch (dia) {
	case 1:
		console.log("Domingo")
		break
	case 2:
		console.log("Segunda-feira")
		break
	case 3:
		console.log("Terca-feira")
		break
	case 4:
		console.log("Quarta-feira")
		break
	case 5:
		console.log("Quinta-feira")
		break
	case 6:
		console.log("Sexta-feira")
		break
	case 7:
		console.log("Sabado")
		break
	default:
		console.log("Numero invalido. Insira um valor entre 1 e 7.")
}

// 2 - Classificacao de Idade
let idadeClassificacao = Number(prompt("Digite 5, 10, 15, 20 ou 30:"))
switch (idadeClassificacao) {
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
		console.log("Idade invalida. Insira 5, 10, 15, 20 ou 30.")
}

// 3 - Turno de Trabalho
let turno = prompt("Digite o turno (M, V ou N):").toUpperCase()
switch (turno) {
	case "M":
		console.log("Bom dia!")
		break
	case "V":
		console.log("Boa tarde!")
		break
	case "N":
		console.log("Boa noite!")
		break
	default:
		console.log("Turno invalido. Insira M, V ou N.")
}

// 4 - Estacoes do Ano
let estacao = Number(prompt("Digite um numero de 1 a 4:"))
switch (estacao) {
	case 1:
		console.log("Primavera")
		break
	case 2:
		console.log("Verao")
		break
	case 3:
		console.log("Outono")
		break
	case 4:
		console.log("Inverno")
		break
	default:
		console.log("Estacao invalida. Insira um numero de 1 a 4.")
}
