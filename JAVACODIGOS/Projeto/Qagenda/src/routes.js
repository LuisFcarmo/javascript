//carregando o express
const express = require('express');
const route  = express.Router();
const homeController = require('./controllers/homecontroler')
const LoginControler = require('./controllers/LoginControler')

//todas as rotas da pagina
route.get('/', homeController.index)
//rostas de login
route.get('/login/index', LoginControler.index)
route.post('/login/register', LoginControler.register)

module.exports = route