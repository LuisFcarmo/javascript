const mongoose = require('mongoose')

//criar o esquema no banco
const ProdutoSchema = new mongoose.Schema({
    NomeProduto: { type: String, required:true},
    preco: { type: String, required:true },
    Quantidadeproduto: { type: String, required: true}
})

const ProdutoModel = mongoose.model('OrganizeiProdutos', ProdutoSchema)

class Produto {
    constructor(body) {
        this.body = body
        this.erros = []
    }

    static EditProd(body, id) {
        console.log(body, id)
    }

    async Cadastrar() {
        this.CleanUp()
        console.log(this.body)
        if(this.body.NomeProduto.lenght < 0 || this.body.preco.lenght < 0 || this.body.Quantidadeproduto.lenght < 0) {
            this.erros.push("Algum campo vazio")
            return
        }
       await ProdutoModel.create(this.body)
    }

    static async BuscarProdutos () {
        const produtos = await ProdutoModel.find({})
        return produtos
    }

    CleanUp() {
        for(const key in this.body) {   
            if(typeof this.body[key] !== 'string') {
                this.body[key] = ''
            }
        }
        this.body = {
            NomeProduto: this.body.NomeProduto,
            preco: this.body.preco,
            Quantidadeproduto: this.body.Quantidadeproduto
        }
    }
}

module.exports = Produto