function aleatorio(min, max) {
    min*1000
    max*1000
    return Math.floor(Math.random() * (max-min) + min)
}

function conectarbd (frase, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof frase !== 'string') {
            reject("bad value") 
            return
        }
            setTimeout(() => {
            resolve(frase)
        }, tempo)
    })
}

conectarbd("blabla1", aleatorio(1, 3)).then((resposta => {
        console.log(resposta)
        return conectarbd(1, aleatorio(1, 3))
    }
))
.then((resposta) => {
    return (resposta + "passei na promisse")
})
.then( resposta => {
        //console.log(resposta)
    }
)  
.catch(e => {
    //console.log(e)
})

//resumindo vai encadeando as promises e elas acontecem em paralelo ao seu codigo original
//metodos uteis para promisses Promisse.all Promisse.race Promise.reject Promise.resolve

const promises = ['primeiro valor',
    conectarbd("promise 1", 300),
    conectarbd("promise 2", 700),
    conectarbd("promise 3", 200),
];

//resolve todas as promisses mas entrega em ordem que elas ficam prontas 
Promise.race(promises)
.then((valor) => {
    console.log(valor)
})
.catch((valor) => {
    console.log(valor)
})

//resolve todas em promisses em ordem se uma falhar ela retorna o erro
Promise.all(promises)
.then((valor) => {
    console.log(valor)
})
.catch((e) => {
   console.log(e)
})


function baixapagina() {
    const emcache = true;
    if(emcache) {
        //return Promise.resolve("em cache")
        return Promise.reject("n está em cache")
    } else {
        return conectarbd("baixando a pagina", 30)
    }
}

baixapagina()
.then((e) => {
    console.log(e)
})
.catch((e) => {
    console.log(e)
})