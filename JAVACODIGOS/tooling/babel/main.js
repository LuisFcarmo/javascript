let pessoas = [
    {
        nome:"luis",
        casado: "sim"
    },
    {
        nome: "luis",
        casado: () => {
            console.log("chames")
        }
    }
]

let vetor = [...pessoas]