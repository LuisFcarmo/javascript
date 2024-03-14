import { useState } from "react";
import { useEffect } from "react";

export const prodFetch = ({url}) => {
    const [data, setData] = useState(null)
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)

    //loading serve apenas para colocar algo na tela enquanto carregamos os dados
    const [loading, setLoading] = useState(false);

    //tratamento de error
    const [error, setError] = useState(null)

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            setMethod(method)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url)

                const json = await res.json()

                setData(json)

            } catch (erro) {
                setError("houve algum erro")
            }

            setLoading(false)
        }
        fetchData()
    }, [url, callFetch])

    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                let fecthOpotion = [url, config]
                const res = await fetch(...fecthOpotion)

                const json = await res.json();

                setCallFetch(json)
            }
        }
        httpRequest();
    }, [config], method, url)


    return {data, httpConfig, loading, error}
};