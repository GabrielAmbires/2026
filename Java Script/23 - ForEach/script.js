//1
let divs1 = document.querySelectorAll(".q1");
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function(){
    divs1.forEach(function(div){
        div.classList.toggle("corNova");
    });
});

//2
let elementos2 = document.querySelectorAll(".q2");
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function(){
    elementos2.forEach(function(item){
        item.classList.add("ativo");
    });
});

//3
let divs3 = document.querySelectorAll(".q3");
divs3.forEach(function(div){
    div.addEventListener("click", function(){
        console.log("clicou");
    });
});

//4
let divs4 = document.querySelectorAll(".q4");
divs4.forEach(function(div){
    div.addEventListener("click", function(){
        div.classList.add("rosa");
    });
});

//5
let divs5 = document.querySelectorAll(".q5");
divs5.forEach(function(div){
    div.addEventListener("click", function(){
        div.classList.toggle("rosa");
    });
});

//6 e 7
let divs6 = document.querySelectorAll(".q6");
divs6.forEach(function(div){
    div.addEventListener("click", function(){
        div.classList.toggle("destacado");
    });

});

//8
let divs8 = document.querySelectorAll(".q8");
divs8.forEach(function(div){
    div.addEventListener("click", function(){
        divs8.forEach(function(item){
            item.classList.remove("selecionado");
        });
        div.classList.add("selecionado");
    });
});

//9
let menuItens = document.querySelectorAll(".itemMenu");
menuItens.forEach(function(item){
    item.addEventListener("click", function(){
        menuItens.forEach(function(menu){
            menu.classList.remove("menuAtivo");
        });
        item.classList.add("menuAtivo");
    });
});