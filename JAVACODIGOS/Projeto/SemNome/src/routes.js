const express = require('express');
const route = express.Router();
//controllers da pagina
const HomeController = require('./controllers/HomeController');
const LoginController = require('./controllers/LoginControler');
const CadastroController = require('./controllers/CadastroController');
const ProductoController = require('./controllers/ProdutoController')

route.get("/", HomeController.index);

// Rotas de login
route.get('/login/index', LoginController.index);
route.post('/login/efetuar', LoginController.login);

//rotas de cadastro
route.get('/cadastro/index', CadastroController.index)
route.post('/cadastro/efetuar', CadastroController.cadastro)

//rotas do Produto
route.get('/Produto/index', ProductoController.index)

module.exports = route;
