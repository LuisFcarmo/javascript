//operador this é examtamente a mesma coisa do java
function aluno (nome, nota) {
    this.nome = nome
    this.nota = nota
    this.dados_anonimo = function() {
        setTimeout(function () {
            console.log(this.nome)
            console.log(this.nota)
        }, 20)
    }

    this.dados_arrow = function() {
        //a arrow function usa o contexto lexico do pai por isso desta maneira funciona
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        }, 20)
    }
}

const alu1 = new aluno('bruno', 12)
alu1.dados_anonimo()
alu1.dados_arrow()