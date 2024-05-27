//carregando o express
const express = require('express');
const route  = express.Router();
const homeController = require('./src/controllers/homecontroler')

function meuMiddleware(req, res, next) {
    req.session = {nome: 'luiz', sobrenome: 'miranda'}
    console.log()
    console.log("passei no seu midware")
    console.log()
    next()
}


//todas as rotas da pagina
//aqui utilizamos um pouco de middleware aqui
route.get('/', meuMiddleware, homeController.paginainit, function (req, res, next) {
    console.log("ainda estou aqui")
})
route.post('/', homeController.tratapost)


module.exports = route