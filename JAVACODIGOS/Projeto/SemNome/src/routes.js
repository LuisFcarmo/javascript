const express = require('express');
const route = express.Router();
//controllers da pagina
const HomeController = require('./controllers/HomeController');
const LoginController = require('./controllers/LoginControler');
const CadastroController = require('./controllers/CadastroController');
const ProductoController = require('./controllers/ProdutoController')
//middlewares
const { ConfirmLogin } = require('./middlewares/middleware');
const ProdutoController = require('./controllers/ProdutoController');

route.get("/", HomeController.index);

// Rotas de login
route.get('/login/index', LoginController.index);
route.post('/login/efetuar', LoginController.login);

//rotas de cadastro
route.get('/cadastro/index', CadastroController.index)
route.post('/cadastro/efetuar', CadastroController.cadastro)

//rotas do Produto
route.get('/Produto/index', ConfirmLogin, ProductoController.index)
route.post('/Produto/efetuar', ConfirmLogin, ProductoController.cadastro)
route.get('/produto/indexEdit',  ProductoController.IndexEdit)
route.post('/produto/edit/efetuar', ProdutoController.edit)

//rotas com a function deslogar prefire deixar local por não precisar de um controler
//apenas para deslogar
route.get('/logout', (req, res) => {
    req.session.destroy((erro) => {
        if(erro) {
            console.log("houve um erro enquanto deslogava a sessão")
        } else {
            res.redirect('/')
        }
    })
})

module.exports = route;
