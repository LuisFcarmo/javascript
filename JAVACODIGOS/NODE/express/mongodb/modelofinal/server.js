//carregando o express
//usando o dotenv para 
require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const routes = require('./src/routes')
const mongoose = require('mongoose')

mongoose.connect(process.env.CONECTIONSTRING)
.then(() => {
    console.log('conectei')
    app.emit('pronto')
})







app.use(express.urlencoded({extended: true})) // <=

//carregando o conteudo estatico
app.use(express.static(path.resolve(__dirname, 'public')))

//configurando a view
//caminho da pasta de view
app.set('views', path.resolve(__dirname, "src", "views"))
//a engine que vamos usar para renderizar as coisas
app.set('view engine', 'ejs')

app.use(routes)



app.on('pronto', () => {
        app.listen(3000, () => {
            console.log("acessar http://localhost:3000")
            console.log("servidor executando na porta 3000")
        })
    }
)
