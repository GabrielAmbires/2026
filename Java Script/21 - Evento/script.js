let porta1 = document.getElementById("porta1")
porta1.addEventListener("click", function () {
    img1.src = "PortaRuim.png"
})
porta1.addEventListener("mouseout", function () {
    img1.src = "PortaFechada.png"
})


let porta2 = document.getElementById("porta2")
porta2.addEventListener("click", function () {
    img2.src = "PortaRuim.png"
})
porta2.addEventListener("mouseout", function () {
    img2.src = "PortaFechada.png"
})

let porta3 = document.getElementById("porta3")
porta3.addEventListener("click", function () {
    img3.src = "PortaBoa.png"
})
porta3.addEventListener("mouseout", function () {
    img3.src = "PortaFechada.png"
})
