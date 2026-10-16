
 // EXERCÍCIOS 1, 2 E 3 - BARRA DE PROGRESSO

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let slider = document.getElementById("progresso");
let porcentagem = document.getElementById("porcentagem");

function desenharBarra() {
    let valor = Number(slider.value);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Moldura azul
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.strokeRect(10, 25, 380, 40);

    // Barra preenchida
    ctx.fillStyle = "blue";
    ctx.fillRect(10, 25, 380 * valor / 100, 40);

    porcentagem.innerText = valor + "%";
}

slider.addEventListener("input", desenharBarra);

desenharBarra();


// EXERCÍCIO 4 - BANDEIRAS

let bandeiras = document.getElementById("bandeiras");
let ctx2 = bandeiras.getContext("2d");

// JAPÃO
ctx2.fillStyle = "white";
ctx2.fillRect(10, 10, 60, 60);

ctx2.fillStyle = "red";
ctx2.beginPath();
ctx2.arc(40, 40, 15, 0, Math.PI * 2);
ctx2.fill();

// ITÁLIA
ctx2.fillStyle = "green";
ctx2.fillRect(90, 10, 20, 60);

ctx2.fillStyle = "white";
ctx2.fillRect(110, 10, 20, 60);

ctx2.fillStyle = "red";
ctx2.fillRect(130, 10, 20, 60);

// POLÔNIA
ctx2.fillStyle = "white";
ctx2.fillRect(170, 10, 60, 30);

ctx2.fillStyle = "red";
ctx2.fillRect(170, 40, 60, 30);

// URUGUAI
ctx2.fillStyle = "white";
ctx2.fillRect(250, 10, 60, 60);

ctx2.fillStyle = "lightblue";

for (let i = 0; i < 4; i++) {
    ctx2.fillRect(250, 17 + i * 14, 60, 7);
}

ctx2.fillStyle = "white";
ctx2.fillRect(250, 10, 26, 26);

ctx2.fillStyle = "yellow";
ctx2.beginPath();
ctx2.arc(263, 23, 7, 0, Math.PI * 2);
ctx2.fill();

// ALEMANHA
ctx2.fillStyle = "black";
ctx2.fillRect(10, 100, 60, 20);

ctx2.fillStyle = "red";
ctx2.fillRect(10, 120, 60, 20);

ctx2.fillStyle = "yellow";
ctx2.fillRect(10, 140, 60, 20);

// FRANÇA
ctx2.fillStyle = "blue";
ctx2.fillRect(90, 100, 20, 60);

ctx2.fillStyle = "white";
ctx2.fillRect(110, 100, 20, 60);

ctx2.fillStyle = "red";
ctx2.fillRect(130, 100, 20, 60);


// EXERCÍCIO 5 - CASA

let casa = document.getElementById("casa");
let ctx3 = casa.getContext("2d");

// Corpo da casa
ctx3.fillStyle = "lightblue";
ctx3.fillRect(100, 150, 200, 180);

// Telhado triangular vinho
ctx3.fillStyle = "#722F46";
ctx3.beginPath();
ctx3.moveTo(80, 150);
ctx3.lineTo(200, 50);
ctx3.lineTo(320, 150);
ctx3.closePath();
ctx3.fill();

// Janela redonda preta
ctx3.fillStyle = "black";
ctx3.beginPath();
ctx3.arc(200, 200, 25, 0, Math.PI * 2);
ctx3.fill();

// Porta marrom
ctx3.fillStyle = "brown";
ctx3.fillRect(175, 260, 50, 70);
