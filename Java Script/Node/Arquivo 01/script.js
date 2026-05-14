const fs = require('fs')
fs.writeFileSync(
    "mensagem.txt",
    "Criei um bloco de notas com node.js"
)
console.log("Arquivo criado com sucesso!")

/*Crie um bloco de bloco de notas com seu nome, turma, curso e filme favoritos*/
//JSON
const pessoa = {
    nome: "Gabriel",
    idade: 17,
    cidade: "Suzano"
}
fs.writeFileSync(
    "pessoa.json",
    JSON.stringify(pessoa)
)
console.log("Json criado com sucesso!")


const informacoes = {
    nome: "Gabriel",
    idade: 17,
    telefone: "11-9900-3222",
    email: "gabriel@gmail.com"
}
fs.writeFileSync(
    "informacoes.json",
    JSON.stringify(informacoes)
)   
console.log("Json criado com sucesso!")

const {
    Document, //Criar documento do word
    Packer, //Transformar o documento em um word
    Paragraph, //Criar parágrafo
    TextRun  //Adicionar texto
} = require("docx")
const doc = new Document({
    // pagina -> secão -> parágrafo -> texto
    sections: [
        { // configurar a seção do documento (margens, orientação, etc)
            properties: {},
            //filhos da secão - funciona como body
            //textos, imagens, tabelas, etc
            children: [
                new Paragraph({
                    children: [
                        new TextRun("Arquivo Word")
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun("Textos importantes")
                    ]
                })
            ]
        }
    ]
})

Packer.toBuffer(doc)
.then((buffer) => { 
    fs.writeFileSync (
        "relatorio.docx",
        buffer
    )
    console.log("Arquivo Word criado com sucesso!")
})