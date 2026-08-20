// 1
let mensagem = document.getElementById("mensagem")
let input = document.getElementById("input")

input.addEventListener("input", function() {
    mensagem.innerText = input.value
})

// -------------------------------------------------

//2
let mouse = document.getElementById("mouse")
mouse.addEventListener("mouseover", function() {
    mouse.innerText = "Você passou o mouse!"
})

// ----------------------------------------------------

//3








// -------------------------------------------------------

//4
let texto = document.getElementById("texto")
let mudar = document.getElementById("mudar")

mudar.addEventListener("click", function() {
    texto.style.fontSize = "40px"
})

// ------------------------------------------------------

//5
let mostrar = document.getElementById("mostrar") 
let esquecer = document.getElementById("esquecer")
let texto1 = document.getElementById("texto1")

