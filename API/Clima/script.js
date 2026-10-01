const form = document.getElementById("search-form")
const input = document.getElementById("input")
const botao = document.getElementById("botao")
const statusMensagem = document.getElementById("status")
const painel = document.getElementById("weather-panel")
const previsao = document.getElementById("forecast")

function traduzirClima(codigo) {
    if (codigo === 0) return { texto: "Céu limpo", icone: "☀️" }
    if ([1, 2, 3].includes(codigo)) return { texto: "Parcialmente nublado", icone: "⛅" }
    if ([45, 48].includes(codigo)) return { texto: "Neblina", icone: "🌫️" }
    if (codigo >= 51 && codigo <= 67) return { texto: "Chuva", icone: "🌧️" }
    if (codigo >= 71 && codigo <= 77) return { texto: "Neve", icone: "❄️" }
    if (codigo >= 80 && codigo <= 82) return { texto: "Pancadas de chuva", icone: "🌦️" }
    if (codigo >= 85 && codigo <= 86) return { texto: "Pancadas de neve", icone: "🌨️" }
    if (codigo >= 95) return { texto: "Tempestade", icone: "⛈️" }
    return { texto: "Condição indisponível", icone: "🌡️" }
}

function formatarDia(data, indice) {
    if (indice === 0) return "Hoje"
    return new Intl.DateTimeFormat("pt-BR", { weekday: "short", timeZone: "UTC" })
        .format(new Date(`${data}T12:00:00Z`))
        .replace(".", "")
}

function mostrarClima(dadosClima, cidade) {
    const atual = dadosClima.current
    const clima = traduzirClima(atual.weather_code)
    const local = [cidade.name, cidade.admin1].filter(Boolean).join(", ")

    document.getElementById("city-name").textContent = local
    document.getElementById("current-date").textContent = new Intl.DateTimeFormat("pt-BR", {
        weekday: "long", day: "numeric", month: "long"
    }).format(new Date())
    document.getElementById("condition").textContent = clima.texto
    document.getElementById("temperature").textContent = `${Math.round(atual.temperature_2m)}°`
    document.getElementById("weather-icon").textContent = clima.icone
    document.getElementById("feels-like").textContent = `Sensação térmica de ${Math.round(atual.apparent_temperature)}°C`
    document.getElementById("humidity").textContent = `${atual.relative_humidity_2m}%`
    document.getElementById("wind").textContent = `${Math.round(atual.wind_speed_10m)} km/h`
    document.getElementById("current-condition").textContent = clima.texto

    previsao.replaceChildren()
    dadosClima.daily.time.forEach((data, indice) => {
        const previsaoDia = traduzirClima(dadosClima.daily.weather_code[indice])
        const cartao = document.createElement("article")
        cartao.className = "forecast-card"
        if (indice === 0) cartao.classList.add("forecast-today")

        const dia = document.createElement("p")
        dia.className = "forecast-day"
        dia.textContent = formatarDia(data, indice)

        const icone = document.createElement("span")
        icone.className = "forecast-icon"
        icone.setAttribute("aria-label", previsaoDia.texto)
        icone.textContent = previsaoDia.icone

        const condicao = document.createElement("p")
        condicao.className = "forecast-condition"
        condicao.textContent = previsaoDia.texto

        const temperaturas = document.createElement("p")
        temperaturas.className = "forecast-temperatures"
        temperaturas.innerHTML = `<strong>${Math.round(dadosClima.daily.temperature_2m_max[indice])}°</strong><span>${Math.round(dadosClima.daily.temperature_2m_min[indice])}°</span>`

        cartao.append(dia, icone, condicao, temperaturas)
        previsao.appendChild(cartao)
    })

    painel.hidden = false
}

async function buscarClima(cidadeNome) {
    if (!cidadeNome.trim()) return

    botao.disabled = true
    statusMensagem.textContent = "Buscando previsão..."
    statusMensagem.classList.add("is-loading")

    try {
        const urlBusca = new URL("https://geocoding-api.open-meteo.com/v1/search")
        urlBusca.search = new URLSearchParams({ name: cidadeNome, count: "1", language: "pt", format: "json" })
        const geolocalizacao = await fetch(urlBusca)
        if (!geolocalizacao.ok) throw new Error("Falha na busca da cidade")
        const dados = await geolocalizacao.json()

        if (!dados.results?.length) {
            painel.hidden = true
            statusMensagem.textContent = "Não encontramos essa cidade. Confira o nome e tente novamente."
            return
        }

        const cidade = dados.results[0]
        const urlClima = new URL("https://api.open-meteo.com/v1/forecast")
        urlClima.search = new URLSearchParams({
            latitude: cidade.latitude,
            longitude: cidade.longitude,
            current: "temperature_2m,relative_humidity_2m,weather_code,apparent_temperature,wind_speed_10m",
            daily: "temperature_2m_max,temperature_2m_min,weather_code",
            timezone: "auto",
            forecast_days: "7"
        })
        const resposta = await fetch(urlClima)
        if (!resposta.ok) throw new Error("Falha ao carregar a previsão")
        const dadosClima = await resposta.json()

        mostrarClima(dadosClima, cidade)
        statusMensagem.textContent = ""
    } catch (erro) {
        painel.hidden = true
        statusMensagem.textContent = "Não foi possível conectar ao serviço de previsão. Tente novamente."
    } finally {
        botao.disabled = false
        statusMensagem.classList.remove("is-loading")
    }
}

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    buscarClima(input.value)
})