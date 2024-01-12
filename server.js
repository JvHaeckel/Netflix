
// Criar Servidor local
const express = require('express'); 

// Importar a biblioteca que lida com caminhos de arquivos
const path = require("path");

// Vai pegar a diretório atual (__dirname) e concatenar com o Public 
let initialPath = path.join(__dirname, "public");

//
let app = express();
app.use(express.static(initialPath));

// Acessar o conteúdo precisamos de uma porta de entrada
app.get("/", (req,res) =>{
res.sendFile(path.join(initialPath, "index.html"))
});

// Startar o Servidor na porta 3333
const port = 3333;
app.listen(port, ()=> {
    console.log(`Server Start Up on port: ${port} !`);
})

 /*Digite isso no navegador e vai abrir o site: http://localhost:3333/ */