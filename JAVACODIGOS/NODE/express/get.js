//carregando o express
const express = require('express')
//iniciando o express
const app = express()

// operações basicas de uma api
// CRUD -> create, read, update, delete
//         POST     GET  PUT     DELETE
// POST GET pode ter operações em mesma rotas 
//http://meusite.com/ <- get -> entrega a página
app.get('/', (req, res) => {
    res.send("estou sendo atualziado");
})

app.get('/contato', (req, res) => {
    res.send("obrigado por entrar em contato")
})

app.listen(3000, () => {
    console.log("acessar http://localhost:3000")
    console.log("servidor executando na porta 3000")
})