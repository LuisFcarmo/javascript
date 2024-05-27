module.exports = { 
    paginainit: (req, res) => {
        res.render('index')
    },
    
    tratapost: (req, res) => {
        res.send("sou sua nova rota de post")
    }
}
