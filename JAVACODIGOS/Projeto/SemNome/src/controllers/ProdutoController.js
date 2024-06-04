const  Produto  = require("../models/ProdutoModel")

module.exports = {
    index: (req, res) => {
        res.render('produto')
    },
    IndexEdit: (req, res) => {
        res.render('cadEdit')
    },
    
    edit: (req, res) => {
        Produto.EditProd(req.body)
        res.send("oi")
    },

    cadastro: async (req, res) => {
        const NovoProduto = new Produto(req.body)
        try {
            await NovoProduto.Cadastrar()
            if(NovoProduto.erros.length > 0) {
                res.send("erro")
            } else {
                res.redirect('http://localhost:3000/Produto/index')
            }
        } catch (e) {
            console.log(e)
            res.render('404')
        }
    }

} 