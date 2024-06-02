const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const { CadastroModel } = require("./CadastroModel")

class Login  {
    constructor (body) {
        this.body = body;
        this.erros = []
        this.user = null
    }
    async Logar () {
        try {
            const us = await CadastroModel.findOne({usuario: this.body.usuario})
            if (!us) {
                this.erros.push("Usuario invalido")
                return
            }

            let senha_correta = await bcryptjs.compare(this.body.senha, us.senha)

            if(!senha_correta) {
                this.erros.push("Senha ou usuario invalido")
                return
            } 
            this.user = this.body
        } catch(e) {
            console.log(e)
            this.erros("404")
        }
    }   
}

module.exports = Login