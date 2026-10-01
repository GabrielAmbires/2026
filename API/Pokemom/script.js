const input = document.getElementById("input")
const formBusca = document.getElementById("formBusca")
const botao = document.getElementById("botao")
const resultado = document.getElementById("resultado")
const numeroPokemon = document.getElementById("numeroPokemon")
const statusBusca = document.getElementById("statusBusca")

const nomesTipos = {
    bug: "Inseto",
    dark: "Sombrio",
    dragon: "Dragão",
    electric: "Elétrico",
    fairy: "Fada",
    fighting: "Lutador",
    fire: "Fogo",
    flying: "Voador",
    ghost: "Fantasma",
    grass: "Planta",
    ground: "Terrestre",
    ice: "Gelo",
    normal: "Normal",
    poison: "Veneno",
    psychic: "Psíquico",
    rock: "Pedra",
    steel: "Aço",
    water: "Água"
}

function mostrarMensagem(mensagem, classe = "") {
    resultado.replaceChildren()
    const texto = document.createElement("p")
    texto.className = `screen-message ${classe}`
    texto.textContent = mensagem
    resultado.appendChild(texto)
}

async function buscarPokemon(nome) {
    const busca = nome.trim().toLocaleLowerCase("pt-BR")
    if (!busca) return

    botao.disabled = true
    resultado.setAttribute("aria-busy", "true")
    numeroPokemon.textContent = "#---"
    statusBusca.textContent = "CONSULTANDO..."
    mostrarMensagem("Consultando Pokédex...", "is-loading")

    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(busca)}`)
        if (!resposta.ok) throw new Error("Pokemon não encontrado")

        const dados = await resposta.json()
        const cartao = document.createElement("div")
        cartao.className = "pokemon-result"

        const nomePokemon = document.createElement("h2")
        nomePokemon.textContent = dados.name

        const imagemPokemon = document.createElement("img")
        imagemPokemon.src = dados.sprites.front_default || dados.sprites.other?.["official-artwork"]?.front_default || ""
        imagemPokemon.alt = `Imagem de ${dados.name}`

        const tiposPokemon = document.createElement("div")
        tiposPokemon.className = "type-list"
        tiposPokemon.setAttribute("aria-label", "Tipos")
        for (const item of dados.types) {
            const tipo = document.createElement("span")
            tipo.className = "type-badge"
            tipo.textContent = nomesTipos[item.type.name] || item.type.name
            tiposPokemon.appendChild(tipo)
        }

        cartao.append(nomePokemon, imagemPokemon, tiposPokemon)
        resultado.replaceChildren(cartao)
        numeroPokemon.textContent = `#${String(dados.id).padStart(3, "0")}`
        statusBusca.textContent = "DADOS CARREGADOS"
    } catch (erro) {
        mostrarMensagem(erro.message === "Pokemon não encontrado" ? "Pokémon não encontrado." : "Falha na conexão. Tente novamente.")
        statusBusca.textContent = erro.message === "Pokemon não encontrado" ? "SEM REGISTRO" : "ERRO DE CONEXÃO"
    } finally {
        botao.disabled = false
        resultado.removeAttribute("aria-busy")
    }
}

formBusca.addEventListener("submit", (evento) => {
    evento.preventDefault()
    buscarPokemon(input.value)
})