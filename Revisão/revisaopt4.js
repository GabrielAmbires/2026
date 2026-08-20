// Funcoes anonimas

// 1 - Mensagem
let mensagem = function() {
	return "Ola! Esta mensagem veio de uma funcao anonima."
}
console.log(mensagem())

// 2 - Dobro
let dobro = function(numero) {
	return numero * 2
}
console.log("Dobro: " + dobro(8))

// 3 - Media
let calcularMedia = function(nota1, nota2, nota3) {
	return (nota1 + nota2 + nota3) / 3
}
let media = calcularMedia(8, 7, 9)
console.log("Media: " + media)

// 4 - Situacao
let verificarSituacao = function(media) {
	if (media >= 7) {
		return "Aprovado"
	}
	return "Reprovado"
}
console.log("Situacao: " + verificarSituacao(media))

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
let multiplicacao = (numero1, numero2) => numero1 * numero2
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
console.log("Multiplicacao com arrow function: " + multiplicacao(4, 5))
console.log("Triplo: " + triplo(5))
console.log("Par ou impar: " + parOuImpar(7))
console.log("Maior numero: " + maiorNumero(12, 9))
console.log("Numero: " + verificarNumero(-3))

// DOM - Manipulacao
let textoPrincipal = document.getElementById("textoPrincipal")
let divPersonalizada = document.getElementById("divPersonalizada")
let textoEstilo = document.getElementById("textoEstilo")
let tituloEstilo = document.getElementById("tituloEstilo")
let elementoEscondido = document.getElementById("elementoEscondido")
let textoAlternavel = document.getElementById("textoAlternavel")
let imagem = document.getElementById("imagem")
let botaoPersonalizado = document.getElementById("botaoPersonalizado")

document.getElementById("botaoTexto").addEventListener("click", function() {
	textoPrincipal.innerText = "Texto alterado com JS!"
})

document.getElementById("botaoDiv").addEventListener("click", function() {
	divPersonalizada.style.backgroundColor = "blue"
})

document.getElementById("botaoEstilo").addEventListener("click", function() {
	textoEstilo.style.color = "blue"
	textoEstilo.style.fontSize = "20px"
	tituloEstilo.style.color = "green"
	tituloEstilo.style.fontSize = "35px"
})

document.getElementById("botaoEsconder").addEventListener("click", function() {
	if (elementoEscondido.style.display === "none") {
		elementoEscondido.style.display = "block"
	} else {
		elementoEscondido.style.display = "none"
	}
})

let textoOriginal = textoAlternavel.innerText
document.getElementById("botaoAlternarTexto").addEventListener("click", function() {
	if (textoAlternavel.innerText === textoOriginal) {
		textoAlternavel.innerText = "Este e o novo texto."
	} else {
		textoAlternavel.innerText = textoOriginal
	}
})

document.getElementById("botaoImagem").addEventListener("click", function() {
	imagem.style.borderRadius = "50%"
})

document.getElementById("botaoPersonalizado").addEventListener("click", function() {
	botaoPersonalizado.style.backgroundColor = "#222"
	botaoPersonalizado.style.color = "white"
	botaoPersonalizado.style.border = "3px solid #00a86b"
	botaoPersonalizado.style.borderRadius = "12px"
})
