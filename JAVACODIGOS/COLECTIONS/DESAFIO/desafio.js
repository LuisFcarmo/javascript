document.addEventListener("DOMContentLoaded", () => {
    let number1 = document.getElementById("n1")
    let number2 = document.getElementById("n2")
    let mais = document.getElementById("op1")
    let menos = document.getElementById("op2")
    let mult = document.getElementById("op3")
    let div = document.getElementById("op4")
    let resultado = document.getElementById("resultado")

    let opera = [
        (val1, val2) => {
            return val1 + val2
        },
        (val1, val2) => {
            return val1 - val2

        },
        (val1, val2) => {
            return val1 * val2

        },
        (val1, val2) => {
            return val1 / val2
        }
    ]
    function number () {
        return (isNaN(Number(number1.value), Number(number2.value) ? true: false))
    }
    function limpar() {
        number1.value = ""
        number2.value = ""
    }

    mais.addEventListener("click", () => {
        if(number()) {
            resultado.innerHTML = ""
        } else {
            resultado.innerHTML = opera[0](Number(number1.value), Number(number2.value))
        }
        limpar()
    })
    menos.addEventListener("click", () => {
        if(number()) {
            resultado.innerHTML = ""
        } else {
            resultado.innerHTML = opera[1](Number(number1.value), Number(number2.value))
        }    
        limpar()
    })
    mult.addEventListener("click", () => {
        if(number()) {
            resultado.innerHTML = ""
        } else {
            resultado.innerHTML = opera[2](Number(number1.value), Number(number2.value))
        }  
        limpar()  
    })
    div.addEventListener("click", () => {
        if(number()) {
            resultado.innerHTML = ""
        } else {
            resultado.innerHTML = opera[3](Number(number1.value), Number(number2.value))
        }
        limpar()
    })
})
    