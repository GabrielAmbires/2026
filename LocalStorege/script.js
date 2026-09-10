let input = document.getElementById("input")
let salvar = document.getElementById("salvar")
let mensagem = document.getElementById("mensagem")

// Verificar se ja existe um nome salvo
// Busca o nome que ta salvo
let nomeSalvo = localStorage.getItem("nome")
//Se existir um nome salvo
if (nomeSalvo) {
    //mostrar na tela
    mensagem.innerText = "Oi " + nomeSalvo
}
salvar.addEventListener("click", function () {
    // mensagem.innerText = "Oi " + input.value
    // localStorage.setItem("nome", "Gabriel")
    // let nomeLS = localStorage.getItem("nome")
    // console.log(nomeLS)

    localStorage.setItem("nome", input.value)
    mensagem.innerText = "Oi " + nomeSalvo
})
