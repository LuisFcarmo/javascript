export default class GeraSenha {
    rand(min = 0, max = 9) {
        return String(Math.floor(Math.random() * (max-min) + min))
    }

    randletter() {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let index  = Math.floor(Math.random() * alphabet.length)
        return alphabet[index]
    }
    constructor (qtd = '3', num = true, min = false, mai = false) {
        this.qtd = Number(qtd);
        this.num = num;
        this.min = min;
        this.mai = mai;
    }
    Gerar() {
        this.senha  = ""
        let contador = 0;
        
        while (contador < this.qtd) {
            if (this.num) {
                this.senha += this.rand();
                contador++;
                if (contador === this.qtd) break;
            }
            if (this.mai) {
                this.senha += this.randletter().toLowerCase();
                contador++;
                if (contador === this.qtd) break;
            }
            if (this.min) {
                this.senha += this.randletter().toUpperCase();
                contador++;
                if (contador === this.qtd) break;
            }
        }
        return this.senha
    }
}