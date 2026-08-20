// Funcoes anonimas

// 1 - Mensagem
let mensagemAnonima = function() {
	return "Ola! Esta mensagem veio de uma funcao anonima."
}
console.log(mensagemAnonima())

// 2 - Dobro
let dobro = function(numero) {
	return numero * 2
}
console.log("Dobro: " + dobro(8))

// 3 - Media
let calcularMedia = function(nota1, nota2, nota3) {
	return (nota1 + nota2 + nota3) / 3
}
let mediaCalculada = calcularMedia(8, 7, 9)
console.log("Media: " + mediaCalculada)

// 4 - Situacao
let verificarSituacao = function(media) {
	if (media >= 7) {
		return "Aprovado"
	}
	return "Reprovado"
}
console.log("Situacao: " + verificarSituacao(mediaCalculada))

// 5 - Calculadora
let somar = function(numero1, numero2) {
	return numero1 + numero2
}
let subtrair = function(numero1, numero2) {
	return numero1 - numero2
}
let multiplicar = function(numero1, numero2) {
	return numero1 * numero2
}
let dividir = function(numero1, numero2) {
	return numero1 / numero2
}
console.log("Soma: " + somar(10, 2))
console.log("Subtracao: " + subtrair(10, 2))
console.log("Multiplicacao: " + multiplicar(10, 2))
console.log("Divisao: " + dividir(10, 2))

// Arrow functions
let multiplicacaoArrow = (numero1, numero2) => numero1 * numero2
let triplo = numero => numero * 3
let parOuImpar = numero => numero % 2 === 0 ? "Par" : "Impar"
let maiorNumero = (numero1, numero2) => numero1 > numero2 ? numero1 : numero2
let verificarNumero = numero => {
	if (numero > 0) {
		return "Positivo"
	} else if (numero < 0) {
		return "Negativo"
	}
	return "Zero"
}
console.log("Multiplicacao com arrow function: " + multiplicacaoArrow(4, 5))
console.log("Triplo: " + triplo(5))
console.log("Par ou impar: " + parOuImpar(7))
console.log("Maior numero: " + maiorNumero(12, 9))
console.log("Numero: " + verificarNumero(-3))

// DOM - Manipulacao

let textoTroca = document.getElementById("textoPrincipal")
document.getElementById("botaoTexto").addEventListener("click", function() {
	textoTroca.innerText = "Texto alterado com JS!"
})

let divCorAzul = document.getElementById("divPersonalizada")
document.getElementById("botaoDiv").addEventListener("click", function() {
	divCorAzul.style.backgroundColor = "blue"
})

let textoPersonalizado = document.getElementById("textoEstilo")
document.getElementById("botaoEstilo").addEventListener("click", function() {
	textoPersonalizado.style.color = "blue"
	textoPersonalizado.style.fontSize = "20px"
	tituloPersonalizado.style.color = "green"
	tituloPersonalizado.style.fontSize = "35px"
})

let divEscondida = document.getElementById("elementoEscondido")
document.getElementById("botaoEsconder").addEventListener("click", function() {
	if (divEscondida.style.display === "none") {
		divEscondida.style.display = "block"
	} else {
		divEscondida.style.display = "none"
	}
})

let textoTrocaAlternada = document.getElementById("textoAlternavel")
let textoOriginalAlternavel = textoTrocaAlternada.innerText
document.getElementById("botaoAlternarTexto").addEventListener("click", function() {
	if (textoTrocaAlternada.innerText === textoOriginalAlternavel) {
		textoTrocaAlternada.innerText = "Este e o novo texto."
	} else {
		textoTrocaAlternada.innerText = textoOriginalAlternavel
	}
})

let imagemArredondada = document.getElementById("imagem")
document.getElementById("botaoImagem").addEventListener("click", function() {
	imagemArredondada.style.borderRadius = "50%"
})

let botaoEstilizado = document.getElementById("botaoPersonalizado")
document.getElementById("botaoPersonalizado").addEventListener("click", function() {
	botaoEstilizado.style.backgroundColor = "#222"
	botaoEstilizado.style.color = "white"
	botaoEstilizado.style.border = "3px solid #00a86b"
	botaoEstilizado.style.borderRadius = "12px"
})
