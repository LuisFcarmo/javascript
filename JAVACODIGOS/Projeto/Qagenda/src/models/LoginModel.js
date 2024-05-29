const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')

const LoginSchema = new mongoose.Schema({
    email: { type: String, required:true },
    password: { type: String, required:true },
})

const LoginModel = mongoose.model('login', LoginSchema)

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    BycryptPassword() {
        const salt = bcryptjs.genSaltSync()
        this.body.password = bcryptjs.hashSync(this.body.password, salt)
    }

    async registerUsu() {
        this.valida()
        if(this.errors.length > 0) return
        await this.UserExist()
        if (this.errors.length > 0) return
        this.BycryptPassword()
        this.user = await LoginModel.create(this.body)
    }
    async UserExist () {
        //retorn o objeto que foi encontrado no banco de dados
        const user = await LoginModel.findOne({email: this.body.email})
        if(user) {
            this.errors.push("Usuario já existe")
        }
    }
    //validations
    valida() {
        this.cleanUp()
        //O email precisa ser valido
        if(!validator.isEmail(this.body.email)) {
            this.errors.push('E-mail inválido')
        }
        //a senha precisa ter entre 3 e 50 caracteres
        console.log(this.body.password.length)
        if(this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push('A senha precisa estar entre 3 e 50 caracteres')
        }
    }


    //garantindo que tudo que foi mandado no body é uma string
    cleanUp() {
        for (const key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.key[key] = '';
            }
        }
        //selecionando apenas os campos que eu preciso
        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }


    async LOGIN() {
        this.valida()
        if(this.errors.length > 0) return
        const us = await LoginModel.findOne({
                email: this.body.email,
            })
        if(us) {
            console.log(this.body.password)
            if (bcryptjs.compareSync(this.body.password, us.password)) {
                this.user = us
           } else {
                this.errors.push("usuario ou senha invalido")
                this.user = null
                return
           };
        } else {
            this.errors.push("Usuario não existe no banco de dados")
            return
        }
    }
}

module.exports = Login
