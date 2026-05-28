//script.js
//async e await - usamos quando trabalhamos com coisas ou processos que demoram

async function salvar() {
    let palavra = document.getElementById("palavra").value; // pegando o valor do input


    //await vai esperar a resposta do servidor para continuar a execução do código
    await fetch("/salvar", {
        //Definir o tipo de requisição
        //POST = enviar dados
        method: "POST",
        //Define as informações da requisição
        headers: {
            //Informamos que é do tipo JSON
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            //nome da propriedade
            palavra: palavra
            //valor do input
        })
    })
    alert("Palavra salva com sucesso!")
}
