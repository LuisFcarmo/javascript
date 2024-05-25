const converteInt = (e) => parseInt(e)
let num = ['1', '2', '3']
console.log(num)
num = num.map((Element) => parseInt(Element))
console.log(num)



//usando map para aleterar elementos do dom
document.addEventListener('DOMContentLoaded', () => {
    let el = [...document.getElementsByTagName("div")]

    const val = Array.prototype.map.call(el, ({innerHTML}) => {
        return innerHTML
    })
    console.log(val)

    el.map((Element, indice) => {
        console.log(Element.innerHTML = "chames papai")
    })

    //console.log(el)
})



//map tem a função de percorrer arrays
const cursos = ['HTML', 'CSS', "JAVASCRIPT", 'PHP', "REACT"]

//map percorre a coleção (elemento, indice)
//exeplos de como o map pode formatar coias
let c = cursos.map((Element, indice) => {
    return "<div>" + Element + "</div>"
})

console.log(c)

