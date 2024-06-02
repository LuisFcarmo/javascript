const Login = require('../models/LoginModel');
const { CadastroModel } = require("../models/CadastroModel")

module.exports = {
    index: (req, res) => {
        res.render('login')
    },
    login: async (req, res) => {
        const lg = new Login(req.body)
        try {
            await lg.Logar()
            if (lg.erros.length > 0) {
                console.log("usuario ou senha incorreta")
            } else {
                req.session.usuario = lg.user
                res.redirect('http://localhost:3000/')
            }
        } catch (e) {
        }
    }
};
