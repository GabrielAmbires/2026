let perguntas = [
    {
        pergunta: "Qual o nome desse carro?",
        imagem: "img/ferrari.png",
        respostas: ["Ferrari Roma", "Ferrari SF90 Stradale", "Ferrari 488", "Ferarri F8 Tributo"],
        correta: 1, //Ferrari SF90  
    },
    {
        pergunta: "De qual carro é essa traseira?",
        imagem: "img/dodge.jpg",
        respostas: ["Dodge Durango", "Dodge Challenger", "Dodge Viper", "Dodge Charger"],
        correta: 3, //Ferrari SF90  
    },
    {
        pergunta: "Qual o nome desse carro?",
        imagem: "img/lambo.png",
        respostas: ["Lamborghini Huracán", "Lamborghini Aventador", "Lamborghini Revuelto", "Lamborghini Temerario"],
        correta: 1 //2023
    },
    {
        pergunta: "Qual o nome desse carro?",
        imagem: "img/lambo.png",
        respostas: ["Lamborghini Huracán", "Lamborghini Aventador", "Lamborghini Revuelto", "Lamborghini Temerario"],
        correta: 1 //2023
    },
]

let perguntaAtual = 0

let pontuacao = 0

function mostrarPergunta() {
    let pergunta = perguntas[perguntaAtual]
    //Pega a pergunta atual dentro do array

    document.getElementById("pergunta").innerHTML = pergunta.pergunta

    if (pergunta.imagem) {
        document.getElementById("pergunta").innerHTML += `<br><img src="${pergunta.imagem}" alt="Imagem da pergunta" style="width: 680px; height: auto;">`
    }

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
    //Vai para a próxima pergunta
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