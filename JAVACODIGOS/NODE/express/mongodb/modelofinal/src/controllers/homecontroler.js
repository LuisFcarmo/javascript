const HomeModel = require('../models/HomeModel')
HomeModel.create({
    titulo: "criei um dado"
})
.then((dados) => {
    console.log(dados)
})
.catch(e => console.log(e))

module.exports = { 
    paginainit: (req, res) => {
        res.render('index')
    },
    
    tratapost: (req, res) => {
        res.send("sou sua nova rota de post")
    }
}
