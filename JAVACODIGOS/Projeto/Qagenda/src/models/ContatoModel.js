const session = require('express-session')
const mongoose = require('mongoose')
const validator = require('validator')

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required:false, default: ''},
    telefone: { type: String, required:false, default: ''},
    email: { type: String, required:false, default: ''},
    CriadoData: {type: Date, default: Date.now()},
    idDono: {type: String}
})

const ContatoModel = mongoose.model('Contato', ContatoSchema)

function Contato(body) {
    this.body = body
    this.erros = []
    this.contato = null
} 

Contato.prototype.register = async function(id) {
    this.valida()
    if(this.erros.length > 0) {
        console.log(this.erros.length)
        return
    }
    this.body.idDono = id
    this.contato = ContatoModel.create(this.body)
    this.contato = await ContatoModel.findOne({nome: this.body.nome})
}


Contato.prototype.valida = function () {
    if(this.body.email && !validator.isEmail(this.body.email)) this.erros.push("email invalido")
    if(!this.body.nome) this.erros.push("nome é um campo obrigatorio")
    if(!this.body.email && !this.body.telefone) {
        this.erros.push("pelo menos um campo além do nome deve ser preenchido")
    }
    this.CleanUp()
}

Contato.prototype.CleanUp = function () {
    for (const key in this.body) {
        if(typeof this.body[key] !== 'string') {
            this.key[key] = '';
        }
    }
    //selecionando apenas os campos que eu preciso
    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        telefone: this.body.telefone,
        email: this.body.email
    }
}

Contato.prototype.edit = async function(id) {
    if(typeof id !== 'string') return
    this.valida()
    if(this.erros.length > 0) return
    //                          id de onde vai sofrer o update o novo corpo e devolver os dados atualizados
    //ContatoModel.findByIdAndUpdate(id, this.body, {new: true})

   this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, {new: true})
}

//metodos estaticos

Contato.buscaPorId = async function (id) {
    if (!mongoose.Types.ObjectId.isValid(id)) return null
    if(typeof id !== 'string') return
    const user = await ContatoModel.findById(id)
    return user
}

Contato.BuscarContatos = async function (id) {
    if (!mongoose.Types.ObjectId.isValid(id)) return null
    if(typeof id !== 'string') return
    const contatos = await ContatoModel.find({idDono: id})
    .sort({CriadoData: -1})
    return contatos
}

Contato.Delete = async function (id) {
    if (!mongoose.Types.ObjectId.isValid(id)) return null
    if(typeof id !== 'string') return
    const contatos = await ContatoModel.findOneAndDelete({_id: id})
    return contatos
}

module.exports = Contato