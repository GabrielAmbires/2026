const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

//criar o servidor usando o express
const app = express();
//ativar o cors no projeto
app.use(cors)
//permite que os dados resebam o json
app.use(express.json())

//Procura pelo index.html na pasta public
app.use(express.static("public"))

//conexão com o banco de dados
const conexao = mysql.createConnection({
    host: "localhost", //endereço do banco de dados
    user: "root", //usuário do banco de dados
    password: "senai", //senha do banco de dados
    database: "palavras" //banco de dados
})

//Testar a conexão com o banco de dados
conexao.connect((erro) => {
    if (erro) {
        console.log("Erro na conexão")
    } else {
        console.log("Conectado ao MySQL!")
    }
})

//Cria um POST chamada /salvar, ela vai salvar no banco
app.post("/salvar", (req, res) => {
    //Pega a palavra enviada pelo js(front-end)
    //req.body = dados enviados
    //palavra = nome da propriedade
    const palavra = req.body.palavra;
    //comandos do sql para inserir dados
    const sql = "INSERT INTO palavra (texto) VALUES (?)";
    // (?) = valor que será trocado pela palavra digitada

    //Executa o comando
    conexao.query(sql, [palavra], (erro, resultado) => {
        if (erro) {
            res.send("Erro no insert")
        } else {
            res.send("Palavra salva com sucesso!")
        }
    })
})
app.listen(3000, () => {
    console.log("Servidor Funcionando")
})