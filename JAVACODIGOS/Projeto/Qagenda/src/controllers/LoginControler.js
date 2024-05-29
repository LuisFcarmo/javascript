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
                    res.locals.sucess = false
                    return res.redirect("http://localhost:3000/login/index?sucess=false")
                })
                return 
            }

            req.flash('sucess', 'usuario registrado');
            //salvando a sessão
            req.session.save(function () {
                //redirecionando para pagina que fez a requisição
                res.locals.sucess = true
                return res.redirect("http://localhost:3000/login/index?sucess=true")
            })
        } catch (e) {
            res.render('404')
            console.log('404')
        }
    },

    login: async (req, res) => {
        try {
            console.log("entrei no login")
            const login = new Login(req.body)
            await login.LOGIN()

            if(login.errors.length > 0) {
                req.flash('errors', login.errors)
                req.session.save( function() {
                        return res.redirect("http://localhost:3000/login/index?sucess=false");
                    })
                return
            }

            req.flash('sucess',  'você fez login com sucesso')
            req.session.user = login.user;

            req.session.save(function () {
                res.locals.sucess = true
                return res.redirect("/")
            })
        } catch (e) {
            console.log(e)
            return res.render('404')
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        res.redirect('/')
    }
}