//parametros rest basicamente é uma função que recebe inumeros parametros
function soma(...valores) {
    let res = 0;
    for (num of valores) {
        res += num;
    }
    return res;
}

console.log(soma(1, 2, 3, 3, 4))


//funções anonimas basicamente funçẽos que não recebem nomes associadas ao seu corpo
//isso aqui é extremamente parecido com as funções lambda do java
const f = function(v1, v2) {
    return v1+v2
}

console.log(f(1,2))

const dizola = function(...nomes) {
    for (n of nomes) {
        console.log("oi " + n + "\n")
    }
}

dizola("bruno", "maria", "pedro")

//basicamente criar funções em tempo de execução
const construtora = new Function ("v1", "v2", "return v1+v2")

console.log(construtora(1,2))

//funções geradoras
//function* <- significa que é uma função geradora
function* cores() {
    yield 'vermelho' //primeira parada apos uma execução
    yield 'azul' //segunda parada apos duas execuções
    yield 'azul' //terceira parada apos três execuções
}

//a itc que recebeu uma função geradora
const itc = cores()

console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

//console.log(itc.next().value) <- isso é indefinide porque ela já percorreu todas os yiled

function* perguntas() {
    const nome = yield "qual seu nome ?"
    const esporte = yield "qual seu esporte"
    return 'seu nome é' + nome + "seu esporte favorito é " + esporte
}


const interator = perguntas()
console.log(interator.next())
console.log(interator.next("bruno").value)
console.log(interator.next("natação").value)


function *contador() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const itc2 = contador();
console.log(itc.next().value())
console.log(itc.next().value())