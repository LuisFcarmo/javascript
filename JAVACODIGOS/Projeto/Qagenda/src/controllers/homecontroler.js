const Contato = require('../models/ContatoModel')

module.exports = { 
    index: async (req, res, next) => {
        let contatos;
        if(req.session.user) {
            contatos = await Contato.BuscarContatos(req.session.user._id)
        } else {
           contatos = [{}]
        }
        res.render('index', {contatos})
    },
}