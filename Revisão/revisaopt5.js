// 1
let mensagem = document.getElementById("mensagem")
let input = document.getElementById("input")

input.addEventListener("input", function () {
    mensagem.innerText = input.value
})

// -------------------------------------------------

//2
let mouse = document.getElementById("mouse")
mouse.addEventListener("mouseover", function () {
    mouse.innerText = "Você passou o mouse!"
})

// ----------------------------------------------------

//3
let esconder = document.getElementById("esconder")
let texto2 = document.getElementById("texto2")
esconder.addEventListener("dblclick", function () {
    texto2.style.display = "none"
})

// -------------------------------------------------------

//4
let texto = document.getElementById("texto")
let mudar = document.getElementById("mudar")

mudar.addEventListener("click", function () {
    texto.style.fontSize = "40px"
})

// ------------------------------------------------------

//5
let mostrar = document.getElementById("mostrar")
let esquecer = document.getElementById("esquecer")
let texto1 = document.getElementById("texto1")

mostrar.addEventListener("click", function () {
    texto1.innerText = "Texto Apareceu"
})
esquecer.addEventListener("click", function () {
    texto1.innerText = ""
})

// --------------------------------------------------------

//6
let quadrado = document.getElementById("quadrado")
let trocar = document.getElementById("trocar")

trocar.addEventListener("click", function () {
    quadrado.style.backgroundColor = "red"
})

// ---------------------------------------------------------

//7
let textoDestaque = document.getElementById("textoDestaque");
let botao = document.getElementById("botao");
botao.addEventListener("click", function () {
    textoDestaque.classList.toggle("destaque");
});

// --------------------------------------------------------

//8
let img = document.getElementById("img")
let bt1 = document.getElementById("bt1")
let bt2 = document.getElementById("bt2")

bt1.addEventListener("click", function () {
    img.src = "img2.png"
})

bt2.addEventListener("click", function () {
    img.src = "img1.png"
})

// --------------------------------------------------------

//9 
let mensagem1 = document.getElementById("mensagem1")
let input1 = document.getElementById("input1")

input1.addEventListener("input", function () {
    mensagem1.innerText = input1.value.length
})

// --------------------------------------------------------

//10
let idade = document.getElementById("idade")
let verificarIdade = document.getElementById("verificarIdade")
let mensagemIdade = document.getElementById("mensagemIdade")

verificarIdade.addEventListener("click", function () {
    if (idade.value >= 18) {
        mensagemIdade.innerText = "Você é maior de idade"
    } else {
        mensagemIdade.innerText = "Você é menor de idade"
    }
})

// --------------------------------------------------------

//11
let numero = document.getElementById("numero")
let verificarNumero = document.getElementById("verificarNumero")
let mensagemNumero = document.getElementById("mensagemNumero")

verificarNumero.addEventListener("click", function () {
    if (numero.value % 2 === 0) {
        mensagemNumero.innerText = "O número é par"
    } else {
        mensagemNumero.innerText = "O número é ímpar"
    }
})

// --------------------------------------------------------

//12
let nota1 = document.getElementById("nota1")
let nota2 = document.getElementById("nota2")
let nota3 = document.getElementById("nota3")
let calcularMedia = document.getElementById("calcularMedia")
let mensagemMedia = document.getElementById("mensagemMedia")

calcularMedia.addEventListener("click", function () {
    let media = (Number(nota1.value) + Number(nota2.value) + Number(nota3.value)) / 3

    if (media >= 7) {
        mensagemMedia.innerText = `Média: ${media.toFixed(1)} - Aprovado`
    } else if (media >= 5) {
        mensagemMedia.innerText = `Média: ${media.toFixed(1)} - Recuperação`
    } else {
        mensagemMedia.innerText = `Média: ${media.toFixed(1)} - Reprovado`
    }
})
