//1
function converter() {
    let texto = document.getElementById("texto").value
    let resultado = document.getElementById("resultado")
    resultado.innerText = texto.toLocaleLowerCase()
}
//2
function contarLetras() {
    let nome = document.getElementById("nome").value
    let resultado1 = document.getElementById("resultado1")
    resultado1.innerText = nome.length
}
//3
function ultimaLetra() {
    let ultima = document.getElementById("ultima").value
    let resultado2 = document.getElementById("resultado2")
    resultado2.innerText = ultima[ultima.length-1]
}
//4
function mostrar() {
    let letras = document.getElementById("letras").value
    let resultado3 = document.getElementById("resultado3")
    let parte = letras.slice(0, 4)
    resultado3.innerText = parte
}
//5
function MostrarTres() {
    let ultimasTres = document.getElementById("ultimasTres").value
    let resultado4 = document.getElementById("resultado4")
    let parte2 = ultimasTres.slice(-3)
    resultado4.innerText = parte2

}
//6
function juntar() {
    let nome1 = document.getElementById("nome1").value
    let nome2 = document.getElementById("nome2").value
    let juntos = document.getElementById("juntos")
    juntos.innerText = nome1 + " " + nome2  
}
//7
function mostrarPrimeira() {
    let primeira = document.getElementById("primeira").value
    let resultado5 = document.getElementById("resultado5")
    let parte1 = primeira.slice(0, 1)
    resultado5.innerText = parte1
}
//8
function formatar() {
    let nomealuno = document.getElementById("nomealuno").value
    let resultado6 = document.getElementById("resultado6")
    resultado6.innerText = "Olá, " + nomealuno.toUpperCase() + " Seja bem-vindo ao sistema"
}
//9
function verificar() {
    let nomever = document.getElementById("nomever").value
    let resultado7 = document.getElementById("resultado7")
    if(nomever.length <= 5) {
        resultado7.innerText = "Curto"
    } else {
        resultado7.innerText = "Nome Longo"
    }
}