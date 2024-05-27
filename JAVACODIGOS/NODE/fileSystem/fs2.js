const fs = require('fs').promises
/*
    tipos de modo de leitura
    w (abre o arquivo apaga tudo e escreve)
    a (abre o arquivo de um append no final)
*/

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag: 'w', encoding: 'utf-8'})
};
//fs.writeFile(CaminhoArquivo, "frase 1\n", {flag: 'a', encoding: 'utf-8'})