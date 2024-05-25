/*document.addEventListener("DOMContentLoaded", () => {
    const box1 = document.querySelector("#box1")
    const curso = Array.from(document.getElementsByClassName("curso"))

    box1.addEventListener("click", (event) => {
        console.log("clicou")
    })

    curso.map((element) => {
        element.addEventListener("click", (event) => {
            event.stopPropagation()
        })
    })
})
//relação de elementos no DOOM

    elementos são basicamente arvores com childs (filhos) father (pais) e siblings (irmãos)

document.addEventListener("DOMContentLoaded", () => {
    const box1 = document.querySelector("#box1")
    const c2 = document.querySelector("#c2")

    console.log(box1.children)
    console.log(box1.childNodes[box1.childNodes.length-1])
    console.log(document.getRootNode())
    console.log(box1.getRootNode())
    console.log(box1.ownerDocument)

    //documente é sempre o no raiz
    //hasChildNodes verifica se um elemente tem filhos true ou false
    console.log(box1.hasChildNodes())
    
    if (box1.children.length > 0) {
        console.log("possui filhos")
    } else {
        console.log("não possio filhos")
    }

    console.log((box1.children.length > 0) ? "possui filhos": "não possui filhos");

    box1.children[2].innerHTML = "mudei";
    //parentNode nos permite negar pelas estruturas cada elemento tem pai avo e vai indo ate o pai de todos o document
    console.log(c2.parentNode.parentNode.parentNode.children[2].innerHTML)
})
*/
//adicionando e removendo elementos no doom
document.addEventListener("DOMContentLoaded", () => {
    const box1 = document.querySelector("#box1")
    const cursos = ["banana", "mysql", "maça", "baneira", "videira"] 
    let elemento;

    cursos.map((element, indice) => {
        elemento = document.createElement("div")
        elemento.setAttribute("id", indice)
        elemento.setAttribute("class", "curso")
        elemento.innerHTML = 
        `
        <p> ${element}</p>
        <img src="./lixeira-de-reciclagem.png" alt="" class = "apagar">
        `
        box1.appendChild(elemento)       
    })

    let apagar = Array.from(document.getElementsByClassName("apagar"))
    
    apagar.map((el) => {
        el.addEventListener("click", (event) => {
            console.log(event.target)
            box1.removeChild(event.target.parentNode)
        })
    })

})