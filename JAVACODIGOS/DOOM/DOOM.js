document.addEventListener('DOMContentLoaded', () => {
    //funções para manipular elementos do dom
    //pegando o elemento de div 1
    /*getElementById retorna apenas um elemento porque cada elemento apresenta id unico*/

    const c1 = document.getElementById('d3')
    console.log(c1)
    console.log(c1.id)
    console.log(c1.innerHTML)
    console.log(c1.innerHTML = 'mudei')

    //getElementsByTagName retorna um array de elementos
    //isso retorna um HTML Coletion que é uma coleção de elementos html
    const c2 = Array.from(document.getElementsByTagName('div'))

    c2.map((Element, positon) => {
        console.log(Element)
        console.log(positon)
    })

    //getElementsByClassName pega todos elementos de uma classe especifica
    const c3 = Array.from(document.getElementsByClassName("papa"))
    const c4 = Array.from(document.getElementsByClassName("c2"))
    const c5 = Array.from(document.getElementsByClassName("c3"))

    console.log(c3)
    console.log(c4)
    console.log(c5)
    //modificando uma classe especifica
    c3.map((elemento, indice) => {
        //apenas o idnice par vai receber o destaque especifico
        if(indice % 2 != 0) {
            elemento.classList.add("destaque")
        }
    })

    //Querry Selector é mais generico então ele pega todos elementos
    //retorna o primeiro elemento que ele encontrar
    const QuerryDiv = document.querySelector('div')
    console.log(QuerryDiv)

    //já o all ele pega todos elementos que encontrar
    const QuerryDiv2 = Array.from(document.querySelectorAll('.c2'))
    console.log(QuerryDiv2)
})

