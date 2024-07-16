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

const FotoService = {
    register,
}

export default FotoService