const pessoa = {
    nome: "bruno",
    canal: "cfb-crusos",
    cursos: "javascript",
    aulas: {
        aula01: "bata",
        aula02: "beta",
        aula03: "buta"
    }
}

const s_json_pessoa = JSON.stringify(pessoa)
pessoa = JSON.parse(s_json_pessoa)

console.log(s_json_pessoa)
console.log(pessoa)