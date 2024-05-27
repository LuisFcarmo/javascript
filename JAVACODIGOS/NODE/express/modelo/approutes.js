//carregando o express
const path = require('path')
const express = require('express')
const routes = require('./src/routes')
//iniciando o express
const app = express()
//para ser passado o body para os tipos de requisição post
//para poder tratar oque foi enviado no body
//configurando a view
app.use(express.urlencoded({extended: true})) // <=
app.set('views', path.resolve(__dirname, "src", "views"))
app.set('view engine', 'ejs')

app.use(routes)




app.listen(3000, () => {
    console.log("acessar http://localhost:3000")
    console.log("servidor executando na porta 3000")
})