//push adiciona no fim
//unshift adiciona no começo
//shif remove no inicio
let valores = [1, 2]
const op = [
    (val) => {
        return val.reduce((anterior, atual) => {
            return anterior+atual            
        })
    },
    (val) => {
        const iterator = val[Symbol.iterator]()
        let total = 1;
        while(iterator.next().value != undefined) {
            total *= iterator.next().value
        }
        return total
    },
    (val) => {
        val.map((elemento, index) => {
            console.log("elemento: " + elemento + " index: " + index)
        })
    }
]

console.log(op[1](valores))
op[2](valores)