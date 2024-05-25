//está sera a coleção set que é basicamente a mesma coisa dos conjuntos na matematica
document.addEventListener("DOMContentLoaded", () => {
    let caixa = document.getElementById("caixa1")
    let set = new Set(["musica1", "muisca boa", "musica1"])
    //musica1 não vai entrar pois ela se repete

    set.add("blablablabla")
    console.log(set)
    //..resto das operações são exatamente iguais ao do map
    set.forEach((elemento) => {
        caixa.innerHTML += elemento
    })
})