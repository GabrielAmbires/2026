let senha = document.getElementById("senha");
let confirmar = document.getElementById("confirmar");
let mensagem = document.getElementById("mensagem");

confirmar.addEventListener("input", function () {
    let numero = /[0-9]/.test(senha.value)
    let letas = /[a-zA-Z]/.test(senha.value)
    let especial = /[!@#$%&*]/.test(senha.value)
    let maiscula = /[A-Z]/.test(senha.value)
    let minuscula = /[a-z]/.test(senha.value)
    // no minimo 12 
    let tamanho = senha.value.length >= 12

    if (senha.value == confirmar.value && numero && letas && especial && maiscula && minuscula && tamanho) {
        mensagem.innerText = "As senhas são iguais!";
        mensagem.classList.add("certo");
        mensagem.classList.remove("errado");
    } else {
        mensagem.innerText = "A senha deve conter letras maiúsculas, letras minúsculas, números e caracteres especiais, ter no mínimo 12 caracteres e as senhas devem ser iguais!";
        mensagem.classList.add("errado");
        mensagem.classList.remove("certo");
    }
})