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
    if(erro){
        console.log("Erro na conexão")
    } else {
        console.log("Conectado ao MySQL!")
    }
})