const fs = require("fs").promises;
const path = require("path");
/*
    funções readdir (ela vai ler todos os arquivos de um caminho)
    path.resolve(caminho, arquivo presente no diretorio) da o caminho absoluto para um diretorio
    fs.stat(devolve informações de um arquivo desde que vc tenha um caminho)
*/
//lendo os arquivos nesta pasta
async function readdir(roodir) {
    roodir = roodir || path.resolve(__dirname)
    const file = await fs.readdir(path.resolve(roodir))
    walk(file, roodir)
}

async function walk(files, roodir) {
    for(let file of files){
        const fileFullpath = path.resolve(roodir, file)
        const stats = await fs.stat(fileFullpath)
        //ignorando a paste git
        if(/\.git+/g.test(fileFullpath)) continue
        //ignorando a node modules
        if(/\.node_modules+/g.test(fileFullpath)) continue

        if(stats.isDirectory()) {
            readdir(fileFullpath)
            continue
        } 
        if(!/\.css+/g.test(fileFullpath) && !/\.html+/g.test(fileFullpath)) continue 
        console.log(file, stats.isDirectory())
        
    }
}
readdir(path.resolve("/home/luis/Desktop/javascript"))