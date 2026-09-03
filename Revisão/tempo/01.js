
function contarDias() {
    let hoje = new Date()
    let diao = new Date(2028, 6, 14)
    let olimpiadas = document.getElementById("olimpiadas")
    let diferenca = diao - hoje
    let meses = (diao.getFullYear() - hoje.getFullYear()) * 12 + diao.getMonth() - hoje.getMonth()

    if (diao.getDate() < hoje.getDate()) {
        meses--
    }

    meses = Math.max(0, meses)
    let dias = Math.max(0, Math.floor(diferenca / 1000 / 60 / 60 / 24))
    let horas = Math.max(0, Math.floor(diferenca / 1000 / 60 / 60) % 24)
    let minutos = Math.max(0, Math.floor(diferenca / 1000 / 60) % 60)
    let segundos = Math.max(0, Math.floor(diferenca / 1000) % 60)

    olimpiadas.innerHTML =`
        <div class="tempo"><strong>${meses}</strong><span>meses</span></div>
        <div class="tempo"><strong>${dias}</strong><span>dias</span></div>
        <div class="tempo"><strong>${String(horas).padStart(2, "0")}</strong><span>horas</span></div>
        <div class="tempo"><strong>${String(minutos).padStart(2, "0")}</strong><span>minutos</span></div>
        <div class="tempo"><strong>${String(segundos).padStart(2, "0")}</strong><span>segundos</span></div>`
}
contarDias()
setInterval(contarDias, 1000)