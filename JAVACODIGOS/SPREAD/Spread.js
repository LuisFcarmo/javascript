let n1 = [10, 20, 40]
let n2 = [11, 121, 111, 11]
let n3 = []
const jogador1 = {none: "bruno", energia:100, vidas:2, magia:14}
const jogador2 = {none: "bruno1", energia:11100, vidas:2, velocida:33}
let jogador3 = {}

console.log(n1)
console.log(n2)
console.log(n3)

//espalhando o array n1 no n3
n3 = [...n1]
console.log(n3)

//espalhando o array n1 e n2 no n3
n3 = [...n1,...n2]
console.log(n3)

//usando o spreed para para espalhar dois objetos em um objeto
jogador3 = {...jogador1, ...jogador2}
console.log(jogador3)

//outras maneiras de usar, usando o spreed para espalhar valores do vetor para função
const soma = (v1, v2, v3) => {
    return v1+v2+v3
}

let valores = [1,3,4]

console.log(soma(...valores))

//manipulando dom
//html colection
const obj = document.getElementsByTagName("div")

document.addEventListener("DOMContentLoaded", () => {
    const obj2 = [...document.getElementsByTagName("div")];
    console.log(obj2);  // Deve exibir um array com os elementos <div>

    obj2.forEach(Element => {
        Element.innerHTML = "cursera"
        console.log(Element)
    })
});

console.log(obj)
