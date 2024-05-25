import { useState } from "react";
import { useEffect } from "react";

//custom hook to request date from api
export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setcallFetch] = useState(null)

    //loading serve apenas para colocar algo na tela enquanto carregamos os dados
    const [loading, setLoading] = useState(false);

    //tratamento de error
    const [error, setError] = useState(null)

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                Headers: {
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
            
            //aqui está o try catch normal 
            //se acontecer um erro na requisição
            //vc joga o erro pro front end
            //exatamente a mesma coisa que tratamento de erro no java
            try {   
                const res = await fetch(url);

                const json = await res.json();
    
                setData(json);
    
            } catch(error) {
                setError("ouve algum erro ao carregar a mensagem")
            }

            setLoading(false)
        };

        fetchData();
    }, [url, callFetch]);

    //refatorando o post
    useEffect(() => {
        const httpRequest = async () => {
            if(method === "POST") {
                let fecthOptions = [url, config]
                const res = await fetch(...fecthOptions);

                const json = await res.json();

                setcallFetch(json)
            }
        }

        httpRequest();
    }, [config], method, url)

    return {data, httpConfig, loading, error};
};