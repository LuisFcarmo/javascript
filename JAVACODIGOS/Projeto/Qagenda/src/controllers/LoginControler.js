const Login = require('../models/LoginModel')

module.exports = {
    index: (req, res) => {
        res.render('login')
    },
    register: async (req, res) => {
        const login = new Login(req.body)
        try {
            await login.registerUsu()

            if(login.errors.length > 0) {
                req.flash('errors', login.errors);
                //salvando a sessão
                req.session.save(function () {
                    //redirecionando para pagina que fez a requisição
                    return res.redirect("http://localhost:3000/login/index")
                })
                return 
            }

            req.flash('sucess', 'usuario logado com sucesso');
            //salvando a sessão
            req.session.save(function () {
                //redirecionando para pagina que fez a requisição
                return res.redirect("http://localhost:3000/login/index")
            })
        } catch (e) {
            res.render('404')
            console.log('404')
        }
    }
}