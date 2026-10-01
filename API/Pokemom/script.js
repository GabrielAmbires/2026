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

const nomesAtributos = {
    hp: "PV",
    attack: "Ataque",
    defense: "Defesa",
    "special-attack": "Atq. especial",
    "special-defense": "Def. especial",
    speed: "Velocidade"
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
    resultado.classList.remove("has-result")
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

        const medidas = document.createElement("dl")
        medidas.className = "pokemon-measures"
        for (const [rotulo, valor] of [
            ["Altura", `${(dados.height / 10).toLocaleString("pt-BR")} m`],
            ["Peso", `${(dados.weight / 10).toLocaleString("pt-BR")} kg`]
        ]) {
            const item = document.createElement("div")
            const termo = document.createElement("dt")
            termo.textContent = rotulo
            const descricao = document.createElement("dd")
            descricao.textContent = valor
            item.append(termo, descricao)
            medidas.appendChild(item)
        }

        const tituloAtributos = document.createElement("h3")
        tituloAtributos.className = "pokemon-section-title"
        tituloAtributos.textContent = "Atributos"

        const atributos = document.createElement("dl")
        atributos.className = "pokemon-stats"
        for (const atributo of dados.stats) {
            const item = document.createElement("div")
            item.className = "stat-row"
            const termo = document.createElement("dt")
            termo.textContent = nomesAtributos[atributo.stat.name] || atributo.stat.name
            const barra = document.createElement("span")
            barra.className = "stat-track"
            barra.setAttribute("aria-hidden", "true")
            const preenchimento = document.createElement("span")
            preenchimento.className = "stat-fill"
            preenchimento.style.width = `${Math.min(atributo.base_stat / 255 * 100, 100)}%`
            barra.appendChild(preenchimento)
            const valor = document.createElement("dd")
            valor.textContent = atributo.base_stat
            item.append(termo, barra, valor)
            atributos.appendChild(item)
        }

        const tituloHabilidades = document.createElement("h3")
        tituloHabilidades.className = "pokemon-section-title"
        tituloHabilidades.textContent = "Habilidades"

        const habilidades = document.createElement("p")
        habilidades.className = "pokemon-abilities"
        habilidades.textContent = dados.abilities
            .map(({ ability }) => ability.name.replaceAll("-", " "))
            .join(" · ")

        cartao.append(nomePokemon, imagemPokemon, tiposPokemon, medidas, tituloAtributos, atributos, tituloHabilidades, habilidades)
        resultado.classList.add("has-result")
        resultado.replaceChildren(cartao)
        numeroPokemon.textContent = `#${String(dados.id).padStart(3, "0")}`
        statusBusca.textContent = "DADOS CARREGADOS"
    } catch (erro) {
        resultado.classList.remove("has-result")
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