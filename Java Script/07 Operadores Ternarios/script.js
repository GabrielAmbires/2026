    let idade = 18 
    let situacao 
    if (idade >= 18) {
    situacao = "Maior de idade"
    }else{
        situacao = "Menor de idade"
    }
    console.log (situacao)
    console.log("----------------------------------")
    let idade2 = 18 
    let situacao2 = idade2 >= 18? "Maior de idade" : "Menor de idade"

    console.log(situacao2)
    console.log("----------------------------------")

    let  nota =  Number(prompt("Qual sua nota?"))
    let  resultado = nota >= 7? "Aprovado" : "reprovado "
    console.log(resultado)

    console.log("--------------------")
    let acesso = prompt("Qual seu acesso")
    let entrada = acesso == "admin" ? "Acesso Total" : acesso == "prof" ? "pode lançar as notas" : "apenas leitura"
    // if (acesso == "admin") {
    // entrada = "acesso total"
    // } else if (acesso == "prof") {
    // entrada = "pode lançar as notas"
    // } else {
    // entrada = "apenas leitura"
    // }

    let temp = Number(prompt("Qual Temperatura?"))
    let situacao1 = temp >= 30? "Está Calor" : "Não Esta Calor"
    console.log(situacao1)

    console.log("--------------------")

    let num = Number(prompt("Me fale um numero?"))
    let res = num == 0? "É zero" : num > 1? "Possitivo" : "Negativo"
    console.log(res)

    console.log("--------------------")

    let media = Number(prompt("Me fale uma média?"))
    let reso = media >= 9? "Bom" : media >= 7? "Regular" : media >= 5? "Regular" : "Reprovado"
    console.log(reso)

