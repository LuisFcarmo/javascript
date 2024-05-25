class carro {
    constructor(nome, portas) {
        this.nome = nome;
        this.portas = portas;
    }
    GetNome = () =>  this.nome;
    GetPortas = () => this.portas;
    SetNome = (nome) => this.nome = nome;
    SetPortas = (portas) => this.portas = portas;
}

class militar extends carro {
    constructor(nome, portas, muni, blindagem) {
        super(nome, portas);
        this.blindagem = blindagem;
        this.muni = muni;
    }
    GetBlindagem = () =>  this.blindagem;
    GetMuni = () => this.muni;
    SetBlindagem = (blindagem) => this.blindagem = blindagem;
    SetMuni = (muni) => this.muni = muni;
}

function Limpar(carro, Gerenciador) {
    Gerenciador.nome.value = "";
    Gerenciador.portas.value = "";
    if(carro instanceof militar) {
        Gerenciador.muni.value = "";
        Gerenciador.blindagem.value = "";
    } 
}

document.addEventListener("DOMContentLoaded", () => {
    let carros = []
    
    const Doom = {
        form: document.getElementById("formcad"),
        portas: document.getElementById("cportas"),
        nome: document.getElementById("cnome"),
        blindagem: document.getElementById("cblin"),
        militar: document.getElementById("carmilitar"),
        normal: document.getElementById("carronormal"),
        btsubmter: document.getElementById("btsubmeter"),
        muni: document.getElementById("mn"),
        campo: document.getElementById("campo")
    }

    let Gerenciador = Doom;
    function CriarCaixa(carro) {
        let caixa = document.createElement("div");
        caixa.setAttribute("class", "caixa");
        caixa.innerHTML = `
            <p>nome: ${carro.nome}</p>
            <p>quantidade de portas: ${carro.portas}</p>
        `;
        if (carro instanceof militar){
            caixa.innerHTML += `
                <p>blindagem: ${carro.blindagem}</p>
                <p>munição: ${carro.muni}</p>
              `;
        } 

        let btn = document.createElement("button")
        btn.setAttribute("class", "remover")
        btn.innerHTML = "remover"
        //apos ver o video eu deveria ter usado o dataset.nome
        btn.addEventListener("click", (evt) => {
            let nome = evt.target.parentNode.children[0].textContent
            carros = carros.filter((element) => {
                let nm = "nome: " + element.nome
                if (nm != nome) {
                    return true;
                }
            })
            console.log(carros)
            evt = evt.target.parentNode;
            evt.remove();
        })
        caixa.appendChild(btn);
        return caixa
    }

    Gerenciador.militar.addEventListener("click", () => {
        Gerenciador.blindagem.disabled = false;
        Gerenciador.muni.disabled =  false;
    })

    Gerenciador.normal.addEventListener("click", () => {
        Gerenciador.blindagem.disabled = true;
        Gerenciador.muni.disabled = true;
    })

    function spreadremover(remover_btns) {
        remover_btns.map((element) => {
            element.addEventListener("click", (event) => {
                const parentElement = event.target.parentElement;
                Gerenciador.campo.removeChild(parentElement);
            })
        })
    }
    Gerenciador.form.addEventListener("submit", (event) => {
        event.preventDefault()
        if (Gerenciador.militar.checked) {
            let carro = new militar(
                Gerenciador.nome.value,
                Gerenciador.portas.value,
                Gerenciador.muni.value,
                Gerenciador.blindagem.value
            )
            Gerenciador.campo.appendChild(CriarCaixa(carro))
            Limpar(carro, Gerenciador)
            carros.push(carro)

        } 
        else if (Gerenciador.normal.checked) {
            let car = new carro(
                Gerenciador.nome.value,
                Gerenciador.portas.value,
            )
            Gerenciador.campo.appendChild(CriarCaixa(car))
            Limpar(car, Gerenciador)
            carros.push(car)
        }
    })
})