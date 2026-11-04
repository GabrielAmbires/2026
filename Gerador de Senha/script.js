const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const minusculas = "abcdefghijklmnopqrstuvwxyz"
const numeros = "0123456789"
const simbolos = "!@#$%&*()_-+="

const tamanhoInput = document.getElementById("tamanho")
const gerar = document.getElementById("gerar")
const resultado = document.getElementById("resultado")
const copiar = document.getElementById("copiar")
const copiarTexto = copiar.querySelector("span")

const checkMaiusculas = document.getElementById("maiusculas")
const checkMinusculas = document.getElementById("minusculas")
const checkNumeros = document.getElementById("numeros")
const checkSimbolos = document.getElementById("simbolos")

resultado.classList.add("placeholder")

function gerarSenha(tamanho, banco) {
    let senha = ""
    const caracteres = new Uint32Array(tamanho)
    crypto.getRandomValues(caracteres)

    for (let i = 0; i < tamanho; i++) {
        senha += banco[caracteres[i] % banco.length]
    }

    return senha
}

function montarBanco() {
    let banco = ""
    if (checkMaiusculas.checked) banco += maiusculas
    if (checkMinusculas.checked) banco += minusculas
    if (checkNumeros.checked) banco += numeros
    if (checkSimbolos.checked) banco += simbolos
    return banco
}

function mostrarMensagem(mensagem) {
    resultado.textContent = mensagem
    resultado.classList.add("placeholder")
}

gerar.addEventListener("click", function () {
    const tamanho = Number(tamanhoInput.value)
    const banco = montarBanco()

    if (!Number.isInteger(tamanho) || tamanho < 4 || tamanho > 32) {
        mostrarMensagem("Use um comprimento entre 4 e 32", true)
        copiar.disabled = true
        return
    }

    if (banco === "") {
        mostrarMensagem("Selecione pelo menos um tipo de caractere", true)
        copiar.disabled = true
        return
    }

    resultado.textContent = gerarSenha(tamanho, banco)
    resultado.classList.remove("placeholder")
    copiar.disabled = false
})

copiar.addEventListener("click", async function () {
    if (copiar.disabled) return

    try {
        await navigator.clipboard.writeText(resultado.textContent)
        copiarTexto.textContent = "Copiado!"
        setTimeout(function () {
            copiarTexto.textContent = "Copiar"
        }, 2000)
    } catch {
        copiarTexto.textContent = "Erro ao copiar"
    }
})