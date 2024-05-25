document.addEventListener("DOMContentLoaded", () => {
    controle = true
    let contador = 0;
    let nome_curso = document.getElementById("nomecurso")
    let form_Add = document.getElementById("formadd")
    let bt_remover = document.getElementById("remover")
    let selecionados = document.getElementById("selecionado")
    let Ul_Cursos = document.getElementById("ulcursos")
    let curso_atual = document.getElementById("cursoatual")
    let antes = document.getElementById("antes")
    let depois = document.getElementById("depois")


    const CreateCard = (value, id) => {
        let card = document.createElement('li')
        card.setAttribute("class", "listacursor")
        card.innerHTML = `
            <label for = ${value} class = "laop">${value}</label>
            <input 
                type = "radio" 
                id = "${id}" 
                name = "cursos" 
                value = "${value}" 
                class = "aop">
        `
        card.addEventListener("click", (evt) => {
            if (controle) {
                evt.target.classList.toggle("selecionado")
                curso_atual.innerHTML = "curso atual: " + evt.target.innerText
                controle = false
            } else {
                if (evt.target.classList.contains("selecionado")) {
                    evt.target.classList.toggle("selecionado")
                    controle = true
                } 
            }
        })
        return card
    }

    form_Add.addEventListener("submit", (event) => {
        event.preventDefault()
        let card = CreateCard(nome_curso.value, contador++)
        Ul_Cursos.appendChild(card)
    })

    let check = () => {
        let sl = [...document.getElementsByClassName("aop")]
        let cursos_selecionado = sl.filter((element) => {
            if (element.checked) {
                return true
            }
        })
        return cursos_selecionado[0]
    }

    bt_remover.addEventListener("click", () => {
        let cursos_selecionado = check()
        if (cursos_selecionado == undefined || cursos_selecionado === "") {
            alert("nenhum curso selecionado ou o campo curso está vazio")
            return;
        }
        Ul_Cursos.removeChild(cursos_selecionado.parentNode)
    })

    selecionados.addEventListener("click", () => {
        let cursos_selecionado = check()
        if (cursos_selecionado == undefined || cursos_selecionado === "") {
            alert("nenhum curso selecionado ou o campo curso está vazio")
            return;
        }
        curso_atual.innerHTML = "curso atual: " + cursos_selecionado.value
    })

    antes.addEventListener("click", () => {
        let cursos_selecionado = check()
        if (cursos_selecionado == undefined || cursos_selecionado === "") {
            alert("nenhum curso selecionado ou o campo curso está vazio")
            return;
        }
        let card = CreateCard(nome_curso.value, contador++)
        Ul_Cursos.insertBefore(card, cursos_selecionado.parentNode)
    })

    depois.addEventListener("click", () => {
        let cursos_selecionado = check()
        if (cursos_selecionado == undefined || cursos_selecionado.value === "") {
            alert("nenhum curso selecionado ou o campo curso está vazio")
            return;
        }
        let card = CreateCard(nome_curso.value, contador++)
        Ul_Cursos.insertBefore(card, cursos_selecionado.parentNode.nextSibling)
    })
})

