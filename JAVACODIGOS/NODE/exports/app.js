const path = require('path')
/*
const mod1 = require("./mod1")
console.log(mod1.falaoi())

const {nome, sobrenome, falaNome, pessoa} = require('./mod1')
console.log(nome, sobrenome)

console.log(pessoa)

const axios = require('axios');

axios('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
*/

const soma = require('./mode2')
console.log(soma(1,2))

//path.resolve basicamente é uma função para facilitar a navegação entre pastas
// ".." volta tar "nome_pasta" entra pasta
console.log(path.resolve(__dirname, '..', '..'))

console.log(__filename)
console.log(__dirname)