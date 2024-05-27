const path = require('path')
const CaminhoArquivo = path.resolve(__dirname, "teste.json")
const escreve = require("../fs2")
const ler = require('../ler')

//escrevendo e lendo nos arquivos

const pessoas = [
    {nome: "joão"},
    {nome: "maria"},
    {nome: "luiza"},
    {nome: "pedrita"}
]

const json = JSON.stringify(pessoas, '', 2)
escreve(CaminhoArquivo, json)

async function LerAquivo(cmd) {
    const dados = await ler(cmd)
    return dados
}

LerAquivo(CaminhoArquivo)
.then((dados) => {
    dados = JSON.parse(dados)

    dados.forEach(element => {
        console.log(element.nome)
    });
})
