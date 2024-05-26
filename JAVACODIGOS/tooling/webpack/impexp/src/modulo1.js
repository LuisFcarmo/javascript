const nome = "luis"
const sobrenome = 'miranda'
const idade = 30

function soma(x, y) {
        return x + y
}

export { nome, sobrenome, idade, soma }

export class pessoa {
    constructor (nome, pessoa) {
        this.nome =  nome
        this.pessoa = pessoa
    }
}
//apenas uma coisa pode ser exportada como default
let pica = true
export default pica