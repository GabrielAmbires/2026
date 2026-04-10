//1
function mensagemInicial() {
    console.log("Aprendendo funções com JS")
}
mensagemInicial()
console.log("-----------------------------")
//2
function boasVindas() {
    console.log("Desenvolvimento de Sistemas!")
}
boasVindas()
boasVindas()
console.log("-----------------------------")
//3
function contarAteDez() {
    for (let contarAteDez = 1; contarAteDez <= 10; contarAteDez++) {
        console.log(contarAteDez);
    }
}
contarAteDez()
console.log("-----------------------------")
//4
function contagemRegressiva() {
    for (let contagemRegressiva = 10; contagemRegressiva >= 1; contagemRegressiva--) {
        console.log(contagemRegressiva)
    }
}
contagemRegressiva()
console.log("-----------------------------")
//5
function mensagemRepetida() {
    for (let mensagemRepetida = 1; mensagemRepetida <= 5; mensagemRepetida++) {
        console.log("Eu gosto de JavaScript")
    }
}
mensagemRepetida()
console.log("-----------------------------")
//6
function numerosPares() {
    for (let numerosPares = 0; numerosPares <= 20; numerosPares++) {
        resto = numerosPares % 2
        if (resto == 0) {
            console.log(numerosPares)
        }
    }
}
numerosPares()
console.log("-----------------------------")
//7
function tabuadaDoDois() {
    let num18 = 18
        for (let contador = 1; contador <=10; contador++) {
        console.log(num18 + "x" + contador + "=" + (num18 * contador))
    }
}
tabuadaDoDois()
console.log("-----------------------------")
//8
function mostrarSoma() {
    let num1 = Number(prompt("Me Fale o primeiro Número"))
    let num2 = Number(prompt("Me Fale o segundo Número"))
    console.log(num1+num2)
}
mostrarSoma()
console.log("-----------------------------")
//9
function alertaSistema() {
    for(let alertaSistema = 1; alertaSistema <= 3; alertaSistema++) {
        console.log("Atenção! Verifique as informações")
    }
}
alertaSistema()
console.log("-----------------------------")
//10
function mensagem1() {
    console.log("SESI/SENAI")
}
function mensagem2() {
    console.log("GOSTO DE JAVASCRIPT")
}
function mensagem3() {
    console.log("TEXTO FINAL")
}
mensagem1()
mensagem2()
mensagem3()
console.log("-----------------------------")
//11
function somarNumeros() {
    let soma = 0;
    for (let somarNumeros = 1; somarNumeros <= 5; somarNumeros++) {
        let numero = Number(prompt("Digite o " + somarNumeros + " número:"));
        soma += numero;
    }
    console.log("A soma dos números é: " + soma);
}
somarNumeros();
console.log("-----------------------------")
//12
function salario() {
    let sal = Number(prompt("Qual seu salario?"))
    if (sal <= 3500) {
        console.log("Aumento de 500, novo salario =" ,sal+500)
    } else {
        console.log("Não tera aumento")
    }
}
salario()
console.log("-----------------------------")
//13
function escola() {
    let nota1 = Number(prompt("Digite a primeira nota:"));
    let nota2 = Number(prompt("Digite a segunda nota:"));
    let nota3 = Number(prompt("Digite a terceira nota:"));
    let media = (nota1 + nota2 + nota3) / 3;
    if (media > 6) {
        console.log("Aprovado");
    } else if (media >= 5){
        console.log("Recuperação");
    } else {
        console.log("Reprovado")
    }
}
escola()
console.log("-----------------------------")
//14
function atendimento() {
    let atend = Number(prompt("Classifique o atendimento"))
    if (atend == 9 || atend == 10) {
        console.log("Excelente")
    } else if (atend == 8) {
        console.log("Ótimo")
    } else if (atend == 7 || atend == 6) {
        console.log("Bom")
    } else if (atend == 5) {
        console.log("Regular")
    } else if (atend < 5) {
        console.log("Ruim")
    }
}
atendimento()