const HomeModel = require('../models/HomeModel')
module.exports = { 
    paginainit: (req, res, next) => {
        console.log(req.session.usuario)
        console.log(req.flash('error'), req.flash('sucess'))

        res.render('index', {
            //titulo:,
            numeros: [0,1,2,3,4,5,6,7,8,9]
        })

        next()
        console.log(`chames ${req.session.nome}`)
    },
}