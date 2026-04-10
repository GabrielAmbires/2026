//DOM - String
let nome = "Gabriel"

let maiuscula = nome.toUpperCase()
let minuscula = nome.toLocaleLowerCase()

console.log(maiuscula)
console.log(minuscula)

//--------------------------------------

function mostrar() {
    let texto = document.getElementById("texto").value
    let mn = document.getElementById("mn")
    let ms = document.getElementById("ms")
    let letras = document.getElementById("letras")
    ms.innerText = texto.toUpperCase()
    mn.innerText = texto.toLocaleLowerCase()
    //length conta quantas letras tem
    letras.innerText = texto.length
    //Apaga o que esta escrito no input
    let texto2 = document.getElementById("texto")
    texto2.value = ""
}
function parte() {
    let palavra = document.getElementById("palavra").value
    let resultado = document.getElementById("resultado")

    //Slice (Inicio, Fim)
    let parte = palavra.slice(1, 5)
    // C A N E T A
    // 0 1 2 3 4 5
    resultado.innerText = parte


    let final = document.getElementById("final")
    // S E N A I
    // 0 1 2 3 4
    // LENGHT = 5
    final.innerText = palavra[palavra.length-1]
}
function juntar() {
    let palavra1 = document.getElementById("palavra1").value
    let palavra2 = document.getElementById("palavra2").value
    juntos = document.getElementById("juntos")
    juntos.innerText = palavra1 + "" + palavra2  
}
