export const api = "http://localhost:5000/api"
export const upload = "http://localhost:5000/uploads"
//aqui é uma configuração geral/generica para as requisições https

export const requestConfig = (method, data, token = null, image = null) => {
    let config
    //aqui é o cadastro que vem imagem por isso eles não vem como json
    if(image) {
    
        config = {
            method,
            body: data,
            headers: {},
        }
    
    } else if (method === "DELETE" || data === null) {
        //eles verificam se o metho for delete ou se for do tipo get já que não vai ter data na req
        config = {
            method,
            headers: {}
        }

    } else {
        //e aqui por ultimo é a requisição que tem um corpo json
        config = {
            method,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }

    }
    //colocando o token de autenticação para podermos acessar
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}