import { api, requestConfig } from "../utils/config" 

const register = async (data, token) => {
    const config = requestConfig("POST", data, token, true)
    console.log(data)
    try {
        const res = await fetch(api + "/fotos/register", config)
        .then((fotos) => fotos.json())
        .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const GetAllPost = async ( data, token) => {
    const config = requestConfig("GET", data, token, true)
    
    try {   
        const resp = await fetch(api + "/fotos/getAllFotosCurrentUser", config)
        .then(resp => resp.json())
        .catch(err => err)

        return resp
    } catch (error) {
        console.log(error)
    }
}

export const GetFotoById = async (id) => {
    const config = requestConfig("GET")
    try {
        const resp = await fetch(api + "/fotos/foto/" + id, config)
        .then((resp) => resp.json())
        .catch(err => err)

        return resp
    } catch (error) {
        console.log(error)
    }
}


const FotoService = {
    register,
    GetAllPost,
    GetFotoById,
}

export default FotoService