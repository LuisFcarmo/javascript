const mongoose = require('mongoose')
const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required:true }
})

const HomeModel = mongoose.model('home', HomeSchema)
module.exports = HomeModel