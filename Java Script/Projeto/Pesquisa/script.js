// JS
let pesquisa = document.getElementById('pesquisa')

pesquisa.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        let texto = pesquisa.value.toLowerCase()
        let cards = document.getElementsByClassName('card')

        let encontrado = 0

        cards.forEach(function (card) {
            let titulo = card.querySelector('.card-title').innerText.toLowerCase()

            if (titulo.includes(texto)) {
                card.style.display = 'block'
                encontrado++
            } else {
                card.style.display = 'none'
            }
        })
        document.getElementById('resultado').innerText = " encontrados: " + "Resultado encontrado"
    }
})
