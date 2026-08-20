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
let texto = document.getElementById("texto");
let botao = document.getElementById("botao");
botao.addEventListener("click", function () {
    texto.classList.toggle("destaque");
});

// --------------------------------------------------------

//8
let img = document.getElementById("img")
let bt1 = document.getElementById("bt1")
let bt2 = document.getElementById("bt2")

img1.addEventListener("click", function () {
    img.src = "img2.png"
})

img2.addEventListener("click", function () {
    img.src = "img1.png"
})

// --------------------------------------------------------

//9 
let mensagem1 = document.getElementById("mensagem1")
let input1 = document.getElementById("input1")

input.addEventListener("input", function () {
    mensagem1.l
})
