//usando o dotenv para esconder variaveis de ambiente
require('dotenv').config()
//carregando o path para usar o resolve
const path = require('path')
//carregando o express
const express = require('express')
//usando o express
const app = express()
//carregando todas as rotas do app
const routes = require('./src/routes')
//carregando o mongoose que vai fazer o scheama da nosso app
const mongoose = require('mongoose')
//carregando os middleware dos projetos essas duas são essências para segurança do app
const {checkCsrfError, csrfMiddleaware} = require('./src/middlewares/middleware')
//faz a conexão com o mongo db
mongoose.connect(process.env.CONECTIONSTRING)
.then(() => {
    console.log('conectei')
    app.emit('pronto')
})

//iniciando os pacotes necessarios para itilizar sessões
const session = require('express-session')
//carrega o mongostore responsável por guardar as informações da sessão
const MongoStore = require('connect-mongo')
//carrega os flash que serão usados em conjunto com as sessões
const flash = require('connect-flash')
//helmet usado por segurança
const helmet = require('helmet')
//carrega o csrf para evitar os ataques de formalarios de terceiro
const csrf = require('csurf')

//configurações da session no mongo
const sessionOptions = session({
        //senha
        secret: "testequedevesersecreto",
        //onde vai ser salvada no caso é o mongodb que estou utilizando
        store: new MongoStore({
                mongoUrl: process.env.CONECTIONSTRING,
                collectionName: 'sessions'
            }
        ),
        //ler melhor na documentação
        resave: false,
        saveUninitialized: false,
        //quanto tempo vai durar a session em milessimos de segundo
        cookie: {
            maxAge: 1000 * 60 * 60 * 7,
            httpOnly: true
        }
    }
);

//usando as options da sessions
app.use(sessionOptions)
//ativando as flash message que são mensagens auto destrutivas
app.use(flash())
//ativando o helmet
app.use(helmet)
//Esta linha é uma configuração do Express para lidar com dados enviados através de formulários HTML usando o método POST. Vamos entender o que isso faz:
app.use(express.urlencoded({extended: true})) // <=
//carregando o conteudo estatico
app.use(express.static(path.resolve(__dirname, 'public')))
//configurando a view
//caminho da pasta de view
app.set('views', path.resolve(__dirname, "src", "views"))
//a engine que vamos usar para renderizar as coisas
app.set('view engine', 'ejs')
//usando os csrf para que ele gere tolks para formularios da nossa app
app.use(csrf())
//este checka se o csrf deu erro 
app.use(checkCsrfError)
//usa nossas rotas
app.use(routes)
//verificando se o banco de dados foi conectado para ai sim ligar o server
app.on('pronto', () => {
        app.listen(3000, () => {
            console.log("acessar http://localhost:3000")
            console.log("servidor executando na porta 3000")
        })
    }
)
