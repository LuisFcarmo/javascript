// = > /\D+/g expressão regular que tira tudo que n for um numero
export default class CPF {
    constructor(numero) {
        this.numero_cpf = numero
    }
    #limparCpf() {
        this.numero_cpf = this.numero_cpf.replace(/\D+/g, '')
    }
    #Total(qtd_digitos) {
        let acumulador = 0
        if(qtd_digitos == 9) {
            let aux = 10
            for (let i = 0; i <= 8; i++) {
                acumulador += Number(this.numero_cpf[i])*aux
                aux--
            }

            acumulador = 11 - (acumulador%11)
            acumulador = acumulador > 9 ? (0): (acumulador)
        }
        else if (qtd_digitos == 10) {
            let aux = 11
            for (let i = 0; i <= 9; i++) {
                acumulador += Number(this.numero_cpf[i])*aux
                aux--
            }

            acumulador = 11 - (acumulador%11)
            acumulador = acumulador > 9 ? (0): (acumulador)
        }
        return acumulador
    }
    #conferir_string (ultimo, penultimo) {
        let copia = [...this.numero_cpf]
        let string = copia.splice(0, 9).join("")
        string += penultimo
        string += ultimo
        if(string === this.numero_cpf.join(""))return true
        else false
    }
    #todosiguais() {
        let verify = false
        for(let i = 0; i < this.numero_cpf.length-1; i++) {
            if (this.numero_cpf[i] == this.numero_cpf[0]) {
                verify = true
            } else {
                return false
            }
        }
        return verify
    }
    validation = () => {
        this.#limparCpf()
        if (this.numero_cpf.length > 11 || this.#todosiguais()) {
            this.valido = false;
            
        }else{
            this.numero_cpf = Array.from(this.numero_cpf)
            this.valido = this.#conferir_string(this.#Total(10), this.#Total(9))    
        }
    }

    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos) {
        total += reverso * Number(stringNumerica);
        reverso--;
        }

        const digito = 11 - (total % 11);
            return digito <= 9 ? String(digito) : '0';
    }

}
