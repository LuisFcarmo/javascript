const Produtos = require('../models/ProdutoModel')

module.exports = {
    index: async (req, res) => {
        try {
            let produtos
        
            if(req.session.usuario) {
                produtos = await Produtos.BuscarProdutos()
            } else {
                produtos = [{}]
            }
            res.render('index', {produtos})

        } catch (e) {
            console.log(e)
        }
    }
}