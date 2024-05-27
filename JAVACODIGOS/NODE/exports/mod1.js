const nome = 'luiz'
const sobrenome = 'miranda'

const falaNome = () => {
    console.log("oii")
}

module.exports.nome = nome
module.exports.sobrenome = sobrenome

exports.falaoi = falaNome 
//exports.sobrenome = sobrenome

this.qualquer = 'oque eu quero exportar'


class pessoas {
    constructor(nome) {
        this.nome = nome
    }
}

//exports.pessoa = pessoas

module.exports = {
    nome, sobrenome, pessoas
};