let tarefa = document.getElementById("tarefa")
let adicionar = document.getElementById("adicionar")
let lista = document.getElementById("lista")
let tarefas = []

// Pegando as tarefas salvas no localStorage
let tarefaSalva = localStorage.getItem("tarefa")

if (tarefaSalva) {
    tarefas = JSON.parse(tarefaSalva)
} else {
    tarefas = []
}

function mostrarTarefas() {

    // Apaga o que já existe na lista
    lista.innerText = ""

    // Verificar todas as tarefas
    tarefas.forEach(function (tarefaAtual, indice) {

        // Criar um item da lista
        let item = document.createElement("li")

        // CORRIGIDO
        item.innerText = tarefaAtual

        // Criar um botão
        let apagar = document.createElement("button")
        apagar.innerText = "Apagar"

        // Quando clicar, apaga a tarefa
        apagar.addEventListener("click", function () {

            tarefas.splice(indice, 1)

            // Atualizar o localStorage
            localStorage.setItem("tarefa", JSON.stringify(tarefas))

            mostrarTarefas()
        })

        // Coloca o botão dentro do LI
        item.appendChild(apagar)

        // Coloca o LI dentro do UL
        lista.appendChild(item)
    })
}

// Adicionando a tarefa
adicionar.addEventListener("click", function () {

    // Pega o que foi digitado
    let novaTarefa = tarefa.value

    // Verificar se está vazio
    if (novaTarefa != "") {

        tarefas.push(novaTarefa)

        localStorage.setItem("tarefa", JSON.stringify(tarefas))

        // Limpar o input
        tarefa.value = ""
        
        // Mostrar a nova tarefa
        mostrarTarefas()
    }
})

mostrarTarefas()