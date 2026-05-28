let senha = document.getElementById("senha");
let confirmar = document.getElementById("confirmar");
let mensagem = document.getElementById("mensagem");

confirmar.addEventListener("input", function () {
    let numero = /[0-9]/.test(senha.value)
    let letas = /[a-zA-Z]/.test(senha.value)
    let especial = /[!@#$%&*]/.test(senha.value)
    // no minimo 10 
    let tamanho = senha.value.length >= 10

    if (senha.value == confirmar.value && numero && letas && especial && tamanho) {
        mensagem.innerText = "As senhas são iguais!";
        mensagem.classList.add("certo");
        mensagem.classList.remove("errado");
    } else {
        mensagem.innerText = "A senha deve conter letras, números e caracteres especiais, ter no mínimo 10 caracteres e as senhas devem ser iguais!";
        mensagem.classList.add("errado");
        mensagem.classList.remove("certo");
    }
})