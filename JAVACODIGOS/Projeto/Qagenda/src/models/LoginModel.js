const mongoose = require('mongoose')
const validator = require('validator')

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

    async registerUsu() {
        this.valida()
        if(this.errors.length > 0) return
        try {
            this.user = await LoginModel.create(this.body)
        } catch(e) {
            console.log(e)
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
}

module.exports = Login
