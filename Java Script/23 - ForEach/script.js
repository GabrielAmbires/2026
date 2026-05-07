//1
let itens = document.querySelectorAll(".item");
let trocar = document.getElementById("#troca");

itens.forEach(function(item) {
    troca.addEventListener("click", function() {
        item.classList.toggle("troca");
    })
})

//2
let itens1 = document.querySelectorAll(".item1");
let ativo1 = document.getElementById("ativo1");

itens1.forEach(function(item1) {
    ativo1.addEventListener("click", function() {
        item1.classList.toggle("ativo");
    })
})


//3
let mult = document.querySelectorAll(".mult");
let botao = document.getElementById("botao");

botao.addEventListener("click", function() {
    mult.forEach(function(mult) {
        mult.classList.toggle("rosa");
    })
})