class pessoa {
    constructor (nome = "jane doe", idade = 11) {
        this.nome = nome
        this.idade = idade
    }

    GetName () {return this.nome}
    GetIdade () {return this.idade}
    SetName (nome) {this.nome = nome}
    SetIdade (idade) {this.idade = idade}
}

function CriaCaixa({nome, idade}) {
    let caixa = document.createElement("div")
    caixa.setAttribute("class", "caixa")
    caixa.innerHTML = `
            <p class = "dado">${nome}</p>
            <p class = "dado">${idade}</p>
        `
    return caixa
}

function LimparDisplay(component) {
    console.log(component)
    component.value = ""
}

document.addEventListener("DOMContentLoaded", () => {
    let campo = document.getElementById("campo")
    let form = document.getElementById("fom")
    let nome = document.getElementById("nm")
    let idade = document.getElementById("idadevalor")
    let form2 = document.getElementById("fun")
    let nome_apagar = document.getElementById("anm")

    function loadItemsFromLocalStorage() {
        const itemsString = localStorage.getItem("pessoas");
        if(itemsString) {
            const pessoas = JSON.parse(itemsString)
            pessoas.forEach(pessoa => {
                campo.appendChild(CriaCaixa(pessoa))
            });
        }
    }

    loadItemsFromLocalStorage()
    
    function  saveItemToLocalStorage(pessoa) {
        const pessoas = JSON.parse(localStorage.getItem("pessoas")) || []
        pessoas.push(pessoa)
        localStorage.setItem("pessoas", JSON.stringify(pessoas))
    };

    function ReloadoSaveLocalStorage(pessoas) {
        localStorage.clear()
        localStorage.setItem("pessoas", JSON.stringify(pessoas))
    }
    
    function ReloadComponents() {
        let divs = [...document.querySelectorAll(".dado")]
        divs.map((element) => { 
            if(element.innerText == nome_apagar.value) {
                campo.removeChild(element.parentNode)
            }
        })
    }

    function IsPresente(nome) {
        const pessoas = JSON.parse(localStorage.getItem("pessoas"))
        console.log("nome buscado" + nome)
        return pessoas.some((pessoa) => {
            return pessoa.nome == nome
        })
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        if(!IsPresente(nome.value)){
            p1 = new pessoa(nome.value, idade.value)
            campo.appendChild(CriaCaixa(p1))
            saveItemToLocalStorage(p1)
            LimparDisplay(nome)
            LimparDisplay(idade)
        } else {
            alert("pessoa já foi registrada")
            LimparDisplay(nome)
            LimparDisplay(idade)
        }
    })

    form2.addEventListener("submit", (event) => {
        event.preventDefault()
        const itemstring = localStorage.getItem("pessoas");
        if(itemstring) {
            if(IsPresente(nome_apagar.value)){
                let pessoas = [...JSON.parse(itemstring)]
                pessoas = pessoas.filter((pa) => {
                    if (pa.nome != nome_apagar.value) {
                        return true
                    }
                })
                ReloadoSaveLocalStorage(pessoas)
                ReloadComponents()
                LimparDisplay(nome_apagar)
            } else {
                alert("impossivel remover pessoa não está na lista")
                LimparDisplay(nome_apagar)
            }
        } 
    })
})