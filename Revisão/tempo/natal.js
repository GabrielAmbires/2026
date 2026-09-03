
function contarDias() {
    let hoje = new Date()
    console.log(hoje)
                    // ano mes dia
    let natal = new Date(2026,11,25) //25/12/2026
    
    // Meses do 0-11
    
    let dezembro = document.getElementById("dezembro")
    //Calcular a diferença dos dois
    //1s -> 1000
    //1m -> 60s
    //1h -> 60m
    //1d -> 24h
    let diferenca = natal - hoje
    console.log(diferenca)
    //milisegundos - segundos - minutos - horas - dias

    //Converter os valores
    let dias = Math.floor(diferenca / 1000/60/60/24)
    console.log(dias)

    //Horas restantes
    let horas = Math.floor(diferenca / 1000/60/60) % 24
    console.log(horas)

    //Minutos restantes
    let minutos = Math.floor(diferenca / 1000/60) % 60
    console.log(minutos)

    //Segundos restantes
    let segundos = Math.floor(diferenca / 1000) % 60
    console.log(segundos)

    //Mostrar resultado final 
    dezembro.innerText = dias + " dias, " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos"
}
setInterval(contarDias, 1000)