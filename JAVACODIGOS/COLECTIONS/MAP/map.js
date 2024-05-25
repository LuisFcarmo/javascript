//estrutura de dados map é deferente da função map
//no map os dados são guardados no estilo chave valor
document.addEventListener("DOMContentLoaded", () => {
    let caixa = document.getElementById("caixa1")
    let map = new Map()

    map.set("curso", "javascript")
    map.set(10, "cfbcursos")
    map.set(1, 100)
    
    //.get pegar um valor no mapa
    caixa.innerHTML = map.get("curso")
    
    //.has verifica se um elemento está na coleção
    console.log(map.has(1))

    //.size -> retorna o tamanho do map

    //.delete()
    map.delete("curso")

    //for each itera pelo elementos
    map.forEach((key, value) => {
        console.log(`value = ${value} key = ${key}`)
    })
})