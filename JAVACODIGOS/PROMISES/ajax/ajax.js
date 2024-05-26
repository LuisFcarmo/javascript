//buscar dados na internet
//neste exemplo basicamente simulamos as rotas dinamicas do react
let campo = document.querySelector(".resultado")
document.addEventListener("click", e => {
    const el = e.target
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault()
        carregaPagina2(el)
        FETCH(el)
    }
})

function Resquest (obj) {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true)
    xhr.send()

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText);
        } else {
            obj.error({
                code: xhr.status,
                msg: xhr.statusText
            })
        }
    })
}
//metodo com promisses
function Resquest2 (obj) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                })
            }
        })
    })
}

function carregaPagina(elemento) {
    const href = elemento.getAttribute('href')
    Resquest2({
            method: 'get',
            url: href,
    })
    .then(response => loadResultado(response))
    .catch(e => console.log(e))
}

//usando funcões assincronas
async function carregaPagina2(elemento) {
    try {
        const href = elemento.getAttribute('href')
        let response = await Resquest2({
                method: 'get',
                url: href,
        })
        loadResultado(response) 
    } catch (e) {
        console.log(e)
    } 
}

function loadResultado(response) {
    campo.innerHTML = response
}
/*
    xhr.opne(method, url, assincrono)
    xhr.sendo() se foi um post o dado que eu for mandar
    xhr.status (é o status https se a requisão deu certo ou n)
    xhr.responseText (é o valor da requisição ou seja oque eu busquei no banco)
*/

//fetch api fazendo as requisições

async function FETCH () {
    try{
        const href = el.getAttribute('href')
        const response = await fetch(href)
        const htmp = await response.text()
        carregaPagina(htmp)
    } catch(e) {
        console.log(e)
    }
    /*
    fetch(href)
    .then(response => response.text())
    .then(html => carregaPagina2(html))
    .catch(e => console.log(e))
    */
}

