module.exports = { 
    paginainit: (req, res, next) => {
        res.render('index')
        next()
        console.log(`chames ${req.session.nome}`)
    },
    
    tratapost: (req, res) => {
        res.send("sou sua nova rota de post")
    }
}
