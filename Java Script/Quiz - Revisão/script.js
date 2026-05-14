let perguntas = [
    {
        pergunta: "Qual o nome da nossa Escola?",
        respostas: ["Luis Eulalio de Bueno Vidigal Filho", "Nani Jafet", "Senai Osasco", "Senai São Caetano"],
        correta: 0 //Luis Eulalio de Bueno Vidigal Filho 
    },
    {
        pergunta: "Qual o nome do diretor da escola?",
        respostas: ["Santos", "Moraes", "Sanches", "Willian"],
        correta: 3 //Willian
    },
    {
        pergunta: "Em que ano começou o primeiro técnico em Desenvolvimento de Sistemas?",
        respostas: ["2020", "2021", "2022", "2023"],
        correta: 3 //2023
    },
]

let perguntaAtual = 0

let pontuacao = 0

function mostrarPergunta() {
    let pergunta = perguntas[perguntaAtual]
    //Pega a pergunta atual dentro do array

    document.getElementById("pergunta").innerText = pergunta.pergunta

    let respostasDiv = document.getElementById("respostas")
    respostasDiv.innerHTML = ""
    //Limpa a div antes de adicionar as novas respostas
    pergunta.respostas.forEach((resposta, index) => {
        respostasDiv.innerHTML += `<button onclick="verificarResposta(${index})">${resposta}</button>`
    })
}
function verificarResposta(index) {
    let pergunta = perguntas[perguntaAtual]
    let resultado = document.getElementById("resultado")
    if (index == pergunta.correta) {
        resultado.innerText = "Acertou!"
        pontuacao++
    } else {
        resultado.innerText = "Errou!"
    }
}
function proximaPergunta() {
    perguntaAtual++
    //Vai ppara a próxima pergunta
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta()
        document.getElementById("resultado").innerText = ""
    } else {
        mostrarResultadoFinal()
    }
}
function mostrarResultadoFinal() {
    document.getElementById("container").innerHTML = `
    <h2>Quiz Finalizado!</h2>
    <p>Sua pontuação final é: ${pontuacao}<p>
    <button onclick="location.reload()">Jogar Novamente</button>
`}
mostrarPergunta()   