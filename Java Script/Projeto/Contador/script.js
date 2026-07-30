let numero = 0

let intervalo = setInterval(function () {
    numero += 100

    document.getElementById('contador').innerText = numero

    if (numero >= 10000) {
        clearInterval(intervalo)
    }
    setInterval(intervalo, 100)
}, 100)