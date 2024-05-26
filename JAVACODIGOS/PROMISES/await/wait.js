function aleatorio(min = 0, max = 3) {
    min*1000
    max*1000
    return Math.floor(Math.random() * (max-min) + min)
}

function esperaai (frase, tempo) {
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
//encadeando promisses mas, ainda sim lembra o callback hell
//esperaai("espera ai 1", rand())
//.then((valor) => {
//    console.log(valor)
//    return esperaai("esper ai 2", rand())
//})
//.then((valor) => {
//    console.log(valor)
//    return esperaai("espera ai 3", rand())/
//})
//.catch(e => console.log(e))
//await é bem descritivo basicamente ela espera a função
//maneira de usar funções assincronas para utilizar promisses
async function executa() {
    try {
        const fase1 = await esperaai("fase 1", aleatorio())
        console.log(fase1)
        //ele executa ate achar o erro nada pra baixo ela vai executar
        const fase2 = await esperaai(1, aleatorio())
        console.log(fase2)
        const fase3 = await esperaai("fase 3", aleatorio())
        console.log(fase3)
    } catch(e) {
        console.log(e)
    }
}

executa()
//estados das promisses
//(pending) pendente (foi ser executada como fazendo um get no bancoe não retornou ainda)
//(fullfiled) resolvida
//(rejected) rejeitada