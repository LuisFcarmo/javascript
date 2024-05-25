document.addEventListener("DOMContentLoaded", () => {
    let box1 = document.getElementById("box1")
    let box2 = document.getElementById("box2")
    let bt1 = document.querySelector("#bt1")
    let bt2 = document.querySelector("#bt2")

    //toggle (se a classe existe ele remove) (se não existe ela adciona) 
    let cursos = Array.from(document.querySelectorAll('.curso'))
    cursos.map((element) => {
        element.addEventListener("click", () => {
            //if (!element.classList.contains("selecionado")) {
                element.classList.toggle("selecionado")
                //selecionados.push(element)
            /*} else {
                element.classList.remove("selecionado")
                let index = selecionados.indexOf(element)
                selecionados.splice(index, 1)
            }*/
        })
    })

   
    bt1.addEventListener("click", () => {
        let nselecionado = Array.from(document.querySelectorAll('.curso:not(.selecionado)'))
        let selecionado = Array.from(document.querySelectorAll('.curso.selecionado'))
        console.log(nselecionado)
        console.log(selecionado)

        selecionado.map((element) => {
            box2.appendChild(element)
        })
        nselecionado.map((ele) => {

            box1.appendChild(ele)
        })
    })

    bt2.addEventListener("click", () => {
        selecionados.map((element) => {
            box1.appendChild(element)
        })
    })
})