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