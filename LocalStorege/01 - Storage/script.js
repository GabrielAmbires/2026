let presente = document.getElementById("presente")
let adicionar = document.getElementById("adicionar")
let lista = document.getElementById("lista")
let quantidade = document.getElementById("quantidade")

// Recuperar os presentes salvos
let presentes = JSON.parse(localStorage.getItem("presentes")) || []

// Salvar no LocalStorage
function salvarPresentes() {
    localStorage.setItem("presentes", JSON.stringify(presentes))
}

// Mostrar os presentes na tela
function mostrarPresentes() {
    lista.innerHTML = ""

    presentes.forEach(function(presenteAtual, indice) {

        let item = document.createElement("li")

        let nome = document.createElement("span")
        nome.innerText = "🎁 " + presenteAtual

        let apagar = document.createElement("button")
        apagar.innerText = "Apagar"
        apagar.classList.add("apagar")

        // Apagar presente
        apagar.addEventListener("click", function() {
            presentes.splice(indice, 1)

            salvarPresentes()
            mostrarPresentes()
        })

        item.appendChild(nome)
        item.appendChild(apagar)
        lista.appendChild(item)
    })

    // Atualizar a quantidade de presentes
    quantidade.innerText = presentes.length
}

// Adicionar presente
adicionar.addEventListener("click", function() {

    let nomePresente = presente.value.trim()

    if (nomePresente === "") {
        alert("Digite o nome de um presente!")
        return
    }

    presentes.push(nomePresente)

    salvarPresentes()
    mostrarPresentes()

    presente.value = ""
    presente.focus()
})

// Adicionar pressionando Enter
presente.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionar.click()
    }
})

// Mostrar os presentes ao abrir a página
mostrarPresentes()
