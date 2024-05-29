//carregando o express
const express = require('express');
const route  = express.Router();
const homeController = require('./controllers/homecontroler')
const LoginControler = require('./controllers/LoginControler')
const contatoController = require('./controllers/contatoController')
//middlewaere que verifica se esta logado

const { loginRequired } = require('./middlewares/middleware')

//todas as rotas da pagina
route.get('/', homeController.index)
//rostas de login
route.get('/login/index', LoginControler.index)
route.post('/login/register', LoginControler.register)
route.post('/login/login', LoginControler.login)
route.get('/login/logout', LoginControler.logout)

//rotas de cadastro
//basicamente eu coloco um middle no meio da requisição entre o usuario e o cadastro de tarefas
//este midleware so permite a passagem se estiver logado
route.get('/contato/index', loginRequired, contatoController.index);
route.post('/contato/register', loginRequired, contatoController.registro);
route.get('/contato/index/:id', loginRequired, contatoController.editIndex)
route.post('/contato/edit/:id', loginRequired, contatoController.edit)
route.get('/contato/delete/:id', loginRequired, contatoController.delete)

module.exports = route