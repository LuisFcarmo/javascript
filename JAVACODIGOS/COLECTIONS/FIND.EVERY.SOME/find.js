/*
    função find funciona parecido com o filter
    array[]
    array.find((element, index, array) => {
        if (condição para ter sido encontrado) {
            return true;
        }
    })
    basicamente a mesma coisa do filter mas ela não retorna o elemento que foi encontado
*/
document.addEventListener("DOMContentLoaded", () => {
    let array = document.getElementById("array")
    let txt_pesquisar = document.getElementById("txt_pesquisar")
    let pesquisar = document.getElementById("pesquisar")
    let resultado = document.getElementById("Resultado")
    let bt_verificar = document.getElementById("verificar")
    let sm = document.getElementById("some")
    let rd = document.getElementById("reduce")
    const elemento_array = [10, 5, 8, 2, 9, 15, 20]

    array.innerHTML = "[" + elemento_array + "]"

    pesquisar.addEventListener("click", () => {
        console.log(txt_pesquisar.value)
        elemento_array.find((element, index) => {
            if (element == txt_pesquisar.value) {
                resultado.innerHTML =
                `
                    valor pesquisado ${txt_pesquisar.value} valor encontrado ${element} index ${index+1}
                `
                return true
            } else {
                resultado.innerHTML = "não encontrado"
            }
        })
    })
    //metodo every todos os elementos do array devem seguir uma regra
    bt_verificar.addEventListener("click", () => {
        const verify = elemento_array.every((elemento, index) => {
            if (elemento < 18) {
                resultado.innerHTML = "não conforme no index" + index
            }
            return elemento >= 18
        })
        if(verify) {
            resultado.innerHTML = "conformidade"
        } 
    })
    
    //metodo some basta que tenha um elemento que respeite a regra que ela vai dar true
    sm.addEventListener("click", () => {
        const vr = elemento_array.some((elemento, index) => {
            return elemento>= 18
        })
        if(vr) {
            resultado.innerHTML = "conformidade"
        } 
    })

    //reduce vai reduzir o array de acordo com oque eu especificar
    rd.addEventListener("click", () => {
        const rs = elemento_array.reduce((anterior, atual, position) => {
            return anterior + atual
        })
        resultado.innerHTML = rs
    })
})