class pessoa {
    constructor (nome = "") {
        //declarei a variavel nome e atribui a pessoa
        this.nome = nome
    }
}

let p1 = new pessoa("bruninho")
console.log(p1.nome)

class Carro {
    constructor (marca = "chv", tipo = 1) {
        this.nome = marca
        switch (tipo) {
            case tipo:
                this.tipo = "esportivo"
                this.velocidade =  190
                break
            case tipo:
                this.tipo = "luxo"
                this.velocidade = 200
                break
            case tipo:
                this.tipo = "velho"
                this.velocidade = 111
                break
            default:
                this.tipo = "indefinido"
                this.velocidade = 1000
                break
        }
    }

    info() {
        console.log(`nome: ${this.nome}`)
        console.log(`velocidade: ${this.velocidade}`)
        console.log(`tipo: ${this.tipo}`)
    }

    getNome() {
        return this.nome
    }

    getInfo() {
        return[this.nome, this.velocidade, this.tipo]
    }
}

//outra maneira de criar um objeto

function Pessoa(nome, idade) {
    this.nome = nome,
    this.idade = idade,

    getnome = () => {
        return this.nome
    },

    getidade = () => {
        return this.idade
    }
}

//objetos literais todos os objetos da mesma classe vai apontar para o mesmo endereço de memoria
const carro = {
    nome: "bruno",
    idade: 10,
    getNome: function () {
        return this.nome
    },
    getIdade: () => {
        return this.idade
    }
}

const p4 = carro
const p2 = carro

p4.nome = "roberta"
p4["nome"] = "robertinha"

//static funciona exatamente da mesma maneira que as outras linguagens
class npc {
    static alerta = false

    static alertar_f = function () {
        alerta = true;
    }
}

//prototype aprofundar no curso da udemy

class Nave {
    constructor(energia) {
        this.energia = energia
    }
}
Nave.prototype.vida = 3
Nave.prototype.disparos = 2
Nave.prototype.disparar = function () {
    if(this.disparos > 0) {
        console.log("disparei")
        this.disparos--
    }
}

const n1 = new Nave(100)

//polimorfismo mesma coisa dasd outras linguagens

class carro2 {
    constructor(tipo, estagioturbo) {
        this.turbo = new turbo(estagioturbo)
        if(tipo == 1) {
            this.velmax = 100 + this.turbo.pot
        } else {
            this.velmax = 100 + this.turbo.pot
        }
    }
    inf () {
        console.log(`velocidade maxima ${this.velmax} turbo ${this.turbo.pot}`)
    }
}

class CarroEspecial extends carro {
    constructor(estagioturbo) {
        super(4, estagioturbo)
        this.velmax = 300
        this.nome = "carro especial"
    }
}

class turbo {
    constructor (e) {
        if (e == 1) {this.pot = 50}
        else {this.pot = 100}
    }
    //overwrite do java
    info () {
        console.log(`velocidade maxima:mudado ${this.velmax} turbo ${this.turbo.pot}`)
    }
}