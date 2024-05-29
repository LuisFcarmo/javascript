// Usando dotenv para esconder variáveis de ambiente
require('dotenv').config()
// Carregando o path para usar o resolve
const path = require('path')
// Carregando o express
const express = require('express')
// Usando o express
const app = express()
// Carregando todas as rotas do app
const routes = require('./src/routes')
// Carregando o mongoose que vai fazer o schema do nosso app
const mongoose = require('mongoose')
// Carregando os middleware dos projetos, essas duas são essenciais para a segurança do app
const { checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware')

// Faz a conexão com o MongoDB
mongoose.connect(process.env.CONECTIONSTRING)
    .then(() => {
        console.log('Conectei ao MongoDB')
        app.emit('pronto')
    })
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err))

// Iniciando os pacotes necessários para utilizar sessões
const session = require('express-session')
// Carrega o MongoStore responsável por guardar as informações da sessão
const MongoStore = require('connect-mongo')
// Carrega o flash que será usado em conjunto com as sessões
const flash = require('connect-flash')
// Helmet usado por segurança
const helmet = require('helmet')
// Carrega o csrf para evitar os ataques de formulários de terceiros
const csrf = require('csurf')

// Configurações da session no mongo
const sessionOptions = session({
    // Senha
    secret: "testequedevesersecreto",
    // Onde vai ser salvo, no caso é o MongoDB que estou utilizando
    store: new MongoStore({
        mongoUrl: process.env.CONECTIONSTRING,
        collectionName: 'sessions'
    }),
    // Ler melhor na documentação
    resave: false,
    saveUninitialized: false,
    // Quanto tempo vai durar a sessão em milissegundos
    cookie: {
        maxAge: 1000 * 60 * 60 * 7,
        httpOnly: true
    }
})

// Usando as opções da session
app.use(sessionOptions)
// Ativando as flash messages que são mensagens auto destrutivas
app.use(flash())
// Ativando o JSON
app.use(express.json())
// Ativando o helmet
app.use(helmet())
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "https://cdn.jsdelivr.net", "https://ajax.googleapis.com"],
            styleSrc: ["'self'", "https://cdn.jsdelivr.net"],
            // Adicione outras diretivas conforme necessário
        },
    })
  );

// Esta linha é uma configuração do Express para lidar com dados enviados através de formulários HTML usando o método POST
app.use(express.urlencoded({ extended: true }))
// Carregando o conteúdo estático
app.use(express.static(path.resolve(__dirname, 'public')))
// Configurando a view
// Caminho da pasta de view
app.set('views', path.resolve(__dirname, "src", "views"))
// A engine que vamos usar para renderizar as coisas
app.set('view engine', 'ejs')
// Usando o csrf para que ele gere tokens para formulários da nossa app
app.use(csrf())
// Adicionando o middleware csrf
app.use(csrfMiddleware)
// Verifica se o csrf deu erro
app.use(checkCsrfError)
// Usa nossas rotas
app.use(routes)
// Verificando se o banco de dados foi conectado para então ligar o servidor
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log("Acessar http://localhost:3000")
        console.log("Servidor executando na porta 3000")
    })
})
