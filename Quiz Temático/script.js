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
        correta: 3, //Dodge Charger
    },
    {
        pergunta: "Qual o nome desse carro?",
        imagem: "img/lambo.png",
        respostas: ["Lamborghini Huracán", "Lamborghini Aventador", "Lamborghini Revuelto", "Lamborghini Temerario"],
        correta: 1 //Lamborghini Aventador
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
const resultadoEl = document.getElementById("resultado")
const imagemPergunta = document.getElementById("imagemPergunta")
const imagemWrapper = document.querySelector(".imagem-pergunta")
const startScreen = document.getElementById("startScreen")
const container = document.getElementById("container")

function iniciarQuiz() {
    startScreen.classList.add("hidden")
    container.classList.remove("hidden")
    mostrarPergunta()
}

function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual]
    document.getElementById("pergunta").innerText = pergunta.pergunta

    if (pergunta.imagem) {
        imagemPergunta.src = pergunta.imagem
        imagemPergunta.alt = pergunta.pergunta
        imagemWrapper.style.display = "block"
    } else {
        imagemPergunta.src = ""
        imagemPergunta.alt = ""
        imagemWrapper.style.display = "none"
    }

    const respostasDiv = document.getElementById("respostas")
    respostasDiv.innerHTML = ""
    resultadoEl.innerText = ""
    resultadoEl.className = "resultado"

    pergunta.respostas.forEach((resposta, index) => {
        const button = document.createElement("button")
        button.type = "button"
        button.className = "resposta-btn"
        button.innerText = resposta
        button.addEventListener("click", () => verificarResposta(index, button))
        respostasDiv.appendChild(button)
    })
}

function verificarResposta(index, button) {
    const pergunta = perguntas[perguntaAtual]
    const respostasButtons = document.querySelectorAll("#respostas button")
    respostasButtons.forEach((btn, idx) => {
        btn.disabled = true
        if (idx === pergunta.correta) {
            btn.classList.add("correct")
        }
    })

    if (index === pergunta.correta) {
        resultadoEl.innerText = "Acertou!"
        resultadoEl.classList.add("success")
        button.classList.add("correct")
        pontuacao++
    } else {
        resultadoEl.innerText = "Errou!"
        resultadoEl.classList.add("error")
        button.classList.add("wrong")
    }
}

function proximaPergunta() {
    perguntaAtual++
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta()
    } else {
        mostrarResultadoFinal()
    }
}

function mostrarResultadoFinal() {
    document.getElementById("container").innerHTML = `
        <h2>Quiz Finalizado!</h2>
        <p class="final-text">Você acertou ${pontuacao} de ${perguntas.length} perguntas.</p>
        <button class="btn proxima" type="button" onclick="location.reload()">Jogar Novamente</button>
    `
}   