// let login = prompt("Qual o login?")
// let senha = prompt("Qual sua senha?")
// while (login != "TDS2" || senha != "senai") {
//     login = prompt("Qual o login")
//     senha = prompt("Qual a senha")
// }
// console.log("Pode Acessar")

console.log("--------------")
// let x = 1
// while (x <= 10) {
//     console.log(x)
//     x++
// }
console.log("--------------")
// let magica = prompt("Qual palavra mágica")
// while(magica != "abracadabra") {
//     console.log("Errou")
//     magica = prompt("Errou. Qual a palavra mágica")
// }
// console.log("Acertou")
console.log("--------------")
let controlador = 1
let mult = 1 
let num
while (controlador <= 3) {
    num = Number(prompt("Informe o "+ controlador+ "°Numero"))
    mult = mult * num
    console.log(mult)
    controlador++
}
console.log("O resultado é:", mult)