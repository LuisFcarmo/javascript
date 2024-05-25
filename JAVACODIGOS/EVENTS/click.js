function msg () {
    alert("eita fui cliclado")
}
//evento de click como é autoexplicativo isso indica um click
//click
document.addEventListener("DOMContentLoaded", () => {
    const c2 = document.getElementById('d2')
    const c3 = Array.from(document.querySelectorAll('.papa'))
    console.log(c3)
    c3.map((element) => {
        element.addEventListener('click', (event) => {
            const element = event.target
            element.classList.add("destaque")
            element.innerHTML = 'mudei'
            alert("chames chames esse foi via codigo")
        })
    })

    c2.addEventListener("click", (event) => {
        const element = event.target
        element.classList.add("destaque")
        element.innerHTML = 'mudei'
        alert("chames chames esse foi via codigo")
    })  
})
