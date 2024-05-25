document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formimc")

    const limpar = () => {
        nome.value = ""
        altura.value = ""
        peso.value = ""
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const nome = document.getElementById("nome")
        const altura = document.getElementById("altura")
        const peso = document.getElementById("peso")
        
        if (isNaN(parseFloat(altura.value)) || isNaN(parseFloat(peso.value))) {
            alert("altura ou peso não são numeros")
        } else {
            const imc = parseFloat(peso.value)/Math.pow(parseFloat(altura.value),2)
            let resultado = ""

            switch (true) {
                case imc < 18.5:
                    resultado = `nome ${nome.value} abaixo do peso IMC = ${imc}`;
                    break;
                case imc >= 18.5 && imc < 25:
                    resultado = `nome ${nome.value} Peso normal IMC = ${imc}`;
                    break;
                case imc >= 25 && imc < 30:
                    resultado = `nome ${nome.value} Sobrepeso IMC = ${imc}`;
                    break;
                case imc >= 30 && imc < 35:
                    resultado = `nome ${nome.value} Obesidade grau I IMC = ${imc}`;
                    break;
                case imc >= 35 && imc < 40:
                    resultado = `nome ${nome.value} Obesidade grau II IMC = ${imc}`;
                    break;
                default:
                    resultado = `nome ${nome.value} Obesidade grau III IMC = ${imc}`;
            }

            let paragrafo = document.getElementById("resultado")
            console.log(resultado)
            paragrafo.innerText = resultado
        }
        limpar()
    })
})