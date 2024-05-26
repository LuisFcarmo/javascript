import GeraSenha from './modules/GeradorSenha'
/*
<form id = "select">
<label for="qtd_carac">quantidade de caracteres</label>
<input type="text" name="qtd_carac" id="qtd_c">
<label for="numeros">apenas numeros</label>
<input type="checkbox" name="numeros" id="anumeros">
<label for="minusculas">letras minusculas</label>
<input type="checkbox" name="minusculas" id="anumeros">
<label for="maiusculas">letras maiusculas</label>
<input type="checkbox" name="maiusculas" id="anumeros">
<input type="submit" value="gerar" id = "gerar">
</form>
*/
document.addEventListener("DOMContentLoaded", () => {
    const gerenciador = {
        form: document.getElementById("select"),
        qtd: document.getElementById("qtd_c"),
        num: document.getElementById("anumeros"),
        minus: document.getElementById("aminus"),
        mais: document.getElementById("amais"),
        result: document.getElementById("resultado")
    }
    
    gerenciador.form.addEventListener("submit", (event) => {
        event.preventDefault()
        let qtd = Number(gerenciador.qtd.value)
        if (isNaN(qtd) || qtd === 0) {
            alert("campo do numero vazio ou não foi fornecido um numero")
        } else {
            let num = gerenciador.num.checked
            let minus = gerenciador.minus.checked
            let mais = gerenciador.mais.checked
            if (num === false && minus === false && mais === false) {
                alert("o usuario precisa selecionar algum dos campos")
            } else {
                let gera = new GeraSenha(qtd, num, minus, mais).Gerar()
                gerenciador.result.innerHTML = gera
            }
        }
    })
})


import './assets/css/style.css'