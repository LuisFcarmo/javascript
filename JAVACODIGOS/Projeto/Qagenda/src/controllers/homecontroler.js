const HomeModel = require('../models/HomeModel')
module.exports = { 
    index: (req, res, next) => {
        res.render('index')
    },
}