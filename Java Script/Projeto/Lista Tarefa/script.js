function adicionar() {
    let tarefa = document.getElementById("tarefa").value
    let lista = document.getElementById("lista") 
    let tarefaInput = document.getElementById("tarefa")
    
    //Avisar a tarefa vazia
    if ( tarefa == "") {
        alert("Digite uma tarefa")
        return
    }

//Criar <li>
let novoItem = document.createElement("li")
novoItem.innerText = tarefa

//Adicionar <li> no site
lista.appendChild(novoItem)
// Limpar o imput
tarefaInput.value = ""
// Apagar a tarefa
novoItem.onclick = function() {
    lista.removeChild(novoItem)
}
}