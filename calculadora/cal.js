function criar_calculadora () {
    return {
        display: document.querySelector(".display"),
        
        igual () {
            let comando = eval(this.display.value);
            this.display.value = comando;                
            if (!comando) {
                alert('conta invalida');
                return;
            }
        },

        limpar_display() {
            this.display.value = '';
        },
      
        apagar_um() {
            this.display.value = this.display.value.slice(0, -1);
        },
        

        inicia () {
            alert("oi, inicei");
            this.cliquecbotoes();
            this.pressionaenter();
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        cliquecbotoes (){
            document.addEventListener('click', (e) => {
                const elemento = e.target;
                if (elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.innerText);
                }
                if (elemento.classList.contains('btn-clear')) {
                    this.limpar_display();
                }
                if (elemento.classList.contains('btn-del')) {
                    this.apagar_um();
                }
                if (elemento.classList.contains('btn-eq')) {
                    this.igual();
                }
            });
        },

    }
}
const calculadora = criar_calculadora();
calculadora.inicia();