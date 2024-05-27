//carregando o express
const path = require('path')
const express = require('express')
const routes = require('./src/routes')
//iniciando o express
const app = express()
//para ser passado o body para os tipos de requisição post
//para poder tratar oque foi enviado no body
app.use(express.urlencoded({extended: true})) // <=

//carregando o conteudo estatico
app.use(express.static(path.resolve(__dirname, 'public')))

//configurando a view
//caminho da pasta de view
app.set('views', path.resolve(__dirname, "src", "views"))
//a engine que vamos usar para renderizar as coisas
app.set('view engine', 'ejs')

app.use(routes)




app.listen(3000, () => {
    console.log("acessar http://localhost:3000")
    console.log("servidor executando na porta 3000")
})