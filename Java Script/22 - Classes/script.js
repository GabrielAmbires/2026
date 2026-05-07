let texto = document.getElementById("texto")
let botao = document.getElementById("botao")
let remover = document.getElementById("remover")
let alterar = document.getElementById("alterar")
let botao1 = document.getElementById("botao1")
let botao2 = document.getElementById("botao2")
let texto1 = document.getElementById("texto1")
let texto2 = document.getElementById("texto2")
let texto3 = document.getElementById("texto3")
let botao3 = document.getElementById("botao3")
let texto4 = document.getElementById("texto4")
let botao4 = document.getElementById("botao4")
let botao5 = document.getElementById("botao5")
let texto5 = document.getElementById("texto5")
let botao6 = document.getElementById("botao6")
let botao7 = document.getElementById("botao7")
let botao8 = document.getElementById("botao8")
let texto6 = document.getElementById("texto6")
let azul = document.getElementById("azul")
let vermelho = document.getElementById("vermelho")
let verde = document.getElementById("verde")
let texto7 = document.getElementById("texto7")
let div1 = document.getElementById("div1")
let div2 = document.getElementById("div2")
let div3 = document.getElementById("div3")

botao.addEventListener("click", function() {
    texto.classList.add("ativo")
})

remover.addEventListener("click", function() {
    texto.classList.remove("ativo")
})
alterar.addEventListener("click", function() {
    texto.classList.toggle("ativo")
})
botao1.addEventListener("click", function() {
    texto1.classList.add("destaque")
})
botao2.addEventListener("click", function() {
    texto2.classList.toggle("grande")
})
botao3.addEventListener("click", function() {
    texto3.classList.toggle("escondido")
})
texto4.addEventListener("mouseover", function() {
    texto4.classList.toggle("hover")
})
texto4.addEventListener("mouseout", function() {
    texto4.classList.toggle("hover")
})
botao4.addEventListener("click", function() {
    botao4.classList.toggle("botao")
})
botao5.addEventListener("click", function() {
    document.body.classList.toggle("dark")
})
botao6.addEventListener("click", function() {
    texto5.classList.toggle("mostrar")
})
botao7.addEventListener("click", function() {
    texto6.classList.toggle("cores")
})
texto6.addEventListener("mouseover", function() {
    texto6.classList.toggle("borda")
})
texto6.addEventListener("mouseout", function() {
    texto6.classList.remove("borda")
})
verde.addEventListener("click", function() {
    texto7.classList.add("verde")
    texto7.classList.remove("vermelho")
    texto7.classList.remove("azul")
})
vermelho.addEventListener("click", function() {
    texto7.classList.add("vermelho")
    texto7.classList.remove("verde")
    texto7.classList.remove("azul")
})
azul.addEventListener("click", function() {
    texto7.classList.add("azul")
    texto7.classList.remove("verde")
    texto7.classList.remove("vermelho")
})
div1.addEventListener("click", function() {
    div1.classList.add("selecionado")
    div2.classList.remove("selecionado")
    div3.classList.remove("selecionado")
})
div2.addEventListener("click", function() {
    div2.classList.add("selecionado")
    div1.classList.remove("selecionado")
    div3.classList.remove("selecionado")
})
div3.addEventListener("click", function() {
    div3.classList.add("selecionado")
    div1.classList.remove("selecionado")
    div2.classList.remove("selecionado")
})