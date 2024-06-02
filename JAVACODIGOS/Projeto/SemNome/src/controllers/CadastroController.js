const { Cadastro } = require('../models/CadastroModel')

module.exports = {
    index: (req, res) => {
        res.render('cad')
    },
    cadastro: async (req, res) => {
        let cad = new Cadastro(req.body)
        try {
            await cad.Registro()

            if(cad.erros.length > 0) {
                req.session.save(function () {
                    //redirecionando para pagina que fez a requisição
                    res.locals.sucess = false
                    console.log(cad.erros)
                    return res.redirect("http://localhost:3000/")
                })
                return 
            }

            req.session.save(function () {
                res.locals.sucess = true
                return res.redirect('http://localhost:3000/login/index')
            })
        } catch (e) {
            console.log(e)
            res.render('404')
        }
    }
}