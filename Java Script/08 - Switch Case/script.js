//Switch Case
let opcao = 1
switch (opcao) {
    case 1:
        console.log("Cadastrar")
        break;
    case 2:
        console.log("Editar")
        break;
    default:
        console.log("Opção Invalida")
}

let acesso = prompt("Qual seu acesso?")
switch (acesso) {
    case "admin":
        console.log("Acesso Total")
        break;
    case "professor":
        console.log("Pode lançar as notas")
        break;
    case "aluno":
        console.log("Pode visualizar")
        break;
    default:
        console.log("Acesso Negado")
}

console.log("--------------------------------")

let dia = prompt("Que dia é hoje?")
switch (dia) {
    case "quinta":
    case "sexta":
        console.log("DIA DE IR PARA O SENAI")
        break;
    default:
        console.log("NÃO É DIA DE IR PARA O SENAI")
}

console.log("--------------------------------")

let cardapio = Number(prompt("Qual item do cardapio você gostaria? (1 = Pizza | 2 = Salada | 3 = Macarrão | 4 = Bebida)"))
switch (cardapio) {
    case 1:
        console.log("Pizza")
        break
    case 2:
        console.log("Salada")
        break
    case 3:
        console.log("Macarrão")
        break
    case 4:
        console.log("Bebida")
        break
    default:
        console.log("Invalido")
}