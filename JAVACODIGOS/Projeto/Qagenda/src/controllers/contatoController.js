const { async } = require('regenerator-runtime')
const Contato = require('../models/ContatoModel')

module.exports = {
    index: (req, res) => {
        res.render('cad', {contato:{}})
    },
    registro: async (req, res) => {
        try {
            const contato = new Contato(req.body)
            await contato.register(req.session.user._id)
            if(contato.erros.length > 0) {
                req.flash('errors', contato.erros);
                req.session.save(() => res.redirect('http://localhost:3000/contato/index'));
                return
            } else {
                req.flash('sucess', 'contato registrado com sucesso');
                req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
                
                return
            }
        } catch (e) {
            console.log(e)
            res.render("404")
        }
    }, 

    editIndex: async (req, res) => {
        if(!req.params.id) return res.render('404')
        const contato = await Contato.buscaPorId(req.params.id)
        if(!contato) {
            return res.render('404')
        }
        //tipo as props do react
        res.render('contato', {contato})
    },

    edit: async (req, res) => {
        try{
            if(!req.params.id) return res.render('404')
            const contato = new Contato(req.body)
            await contato.edit(req.params.id)

            if(contato.erros.length > 0) {
                req.flash('errors', contato.erros);
                req.session.save(() => res.redirect('http://localhost:3000/contato/index'));
                return
            } else {
                req.flash('sucess', 'contato registrado com sucesso');
                req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
                
                return
            }
        } catch (e) {
            console.log(e)
        }
    },
    delete: async (req, res) => {
        if(!req.params.id) return res.render('404')
        const contato = await Contato.Delete(req.params.id)
        if(!contato) {
            return res.render('404')
        }
        req.flash("sucess", "contato apagado com sucesso")
        req.session.save(() => res.redirect('back'))
    }
}