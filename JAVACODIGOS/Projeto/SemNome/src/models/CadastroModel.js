const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const session = require('express-session')

//criar o esquema no banco
const CadastroSchema = new mongoose.Schema({
    usuario: { type: String, required:true},
    senha: { type: String, required:true }
})

const CadastroModel = mongoose.model('OrganizeiUser', CadastroSchema)

class Cadastro  {
    constructor (body) {
        this.body = body;
        this.erros = []
        this.user = null
    }

    async Registro () {
        this.validar()
        if(this.erros.length > 0) return
        await this.userExists()
        if(this.erros.length > 0) return
        this.BycryptPassword()

        this.user = await CadastroModel.create(this.body)
    }

    async userExists () {
        let user = await CadastroModel.findOne({usuario: this.body.usuario})
        if(user) {
            this.erros.push("Usuario já existe")
        }
    }
   
    BycryptPassword () {
        const salt = bcryptjs.genSaltSync()
        this.body.senha = bcryptjs.hashSync(this.body.senha, salt)
    }

    validar () {
        this.CleanUp()

        if (validator.isEmpty(this.body.usuario) || validator.isEmpty(this.body.senha)) {
            this.erros.push('Algum campo vazio')
        }
        if(this.body.senha.length < 3 || this.body.length > 50) {
            this.erros.push('A senha deve ter entre 3 e 50 caracteres')
        }        
    }

    CleanUp() {

        for(const key in this.body) {   
            if(typeof this.body[key] !== 'string') {
                this.body[key] = ''
            }
            this.body = {
                usuario: this.body.usuario,
                senha: this.body.senha
            }
     
        }

    }
}

module.exports = {Cadastro, CadastroModel}