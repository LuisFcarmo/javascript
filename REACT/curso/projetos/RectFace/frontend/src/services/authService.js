import { api, requestConfig } from "../utils/config"
/*
    basicamente como funciona esse service ele vai buscar e fazer as requisições para api neste casso estou usando a fecth
    api para configurar e buscar os dados o config.js ele como já diz é uma configuração generica para cada methodo
    register and user
*/
const register = async (data) => {
    const config = requestConfig("POST", data)

    try {
        const res = await fetch(api + "/users/register", config)
        .then((res) => res.json())
        .catch((err) => err)

        if(res) {
            localStorage.setItem("user", JSON.stringify(res))
        }

        return res
    } catch (error) {
        console.log(error)
    }
}
//logout and user
const logout = () => {
    localStorage.removeItem("user")
}

//sign in an user
const login = async (data) => {
    const config = requestConfig("POST", data)

    try {
        const res = await fetch(api + "/users/login", config)
        .then((res) => res.json())
        .catch((err) => err)

        if (res._id) {
           localStorage.setItem("user", JSON.stringify(res))
        }

        return res
    } catch(error) {
        console.log(error)
    }
}

const authService = {
    register,
    logout,
    login
}

export default authService