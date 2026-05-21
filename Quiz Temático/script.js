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
        correta: 1 //lamborghini Aventador
    },
    {
        pergunta: "Qual o nome desse carro?",
        imagem: "img/bugatti.png",
        respostas: ["Bugatti Veyron", "Bugatti Chiron", "Bugatti Divo", "Bugatti La Voiture Noire"],
        correta: 0 //Bugatti Veyron
    },
    {
        pergunta: "Qual o nome desse carro?",
        imagem: "img/m4-.png",
        respostas: ["BMW I8", "BMW Série 8", "BMW M4", "BMW M3"],
        correta: 2, //BMW M4
    },
    {
        pergunta: "De qual carro é essa traseira?",
        imagem: "img/720s-.png",
        respostas: ["McLaren Artura", "McLaren 720S", "McLaren 570S", "McLaren P1"],
        correta: 1, //McLaren 720S
    },
    {
        pergunta: "Qual o traseira é essa?",
        imagem: "img/porsche-.png",
        respostas: ["Porsche 911 Turbo S", "Porsche 918", "Porsche 991", "Porsche 992"],
        correta: 0 //Porsche 911 Turbo S
    },
    {
        pergunta: "Qual o nome desse carro?",
        imagem: "img/r8-.png",
        respostas: ["Audi RS7", "Audi A8", "Audi R8", "Audi RS7"],
        correta: 2 //Audi R8
    },
    {
        pergunta: "Qual o nome desse carro?",
        imagem: "img/koenigsegg_.png",
        respostas: ["Koenigsegg Agera", "Koenigsegg Jesko", "Koenigsegg Regera", "Koenigsegg CC8S"],
        correta: 1 //Koenigsegg Jesko
    },
    {
        pergunta: "Qual o nome desse carro?",
        imagem: "img/rolls-royce.png",
        respostas: ["Rolls-Royce Phantom", "Rolls-Royce Ghost", "Rolls-Royce Cullinan", "Rolls-Royce Dawn"],
        correta: 2 //Rolls-Royce Cullinan
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