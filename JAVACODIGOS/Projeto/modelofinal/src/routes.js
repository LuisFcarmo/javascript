//carregando o express
const express = require('express');
const route  = express.Router();
const homeController = require('./controllers/homecontroler')

//todas as rotas da pagina
route.get('/', homeController.paginainit)


module.exports = route