//loops foreach for while não estão aqui pos estas funções eu conheço
document.addEventListener("DOMContentLoaded", () => {
    const obj = document.getElementsByTagName("div")
    console.log(obj)
    //for of itera sobre os elementos da coleção
    for (n of obj) {
        console.log(n.innerHTML = "aa")
    }
})


let num = [10, 30, 40]

//este n vai receber a posição de cada um elemento
for (n in num) {
    console.log(num[n])
}

//for of itera sobre os elementos da coleção
for (n of num) {
    console.log(n)
}



