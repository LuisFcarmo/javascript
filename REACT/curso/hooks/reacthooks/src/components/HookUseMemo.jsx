import React from 'react'
import { useMemo, useEffect, useState} from 'react'
/*
    O useMemo pode ser utilizado para garantir a referência de um objeto fazendo com que algo possa ser atrelado a uma referência e não
    a um valor com isso conseguimos condicionar   
*/

const HookUseMemo = () => {
    const [ number, setNumber ] = useState(0);

    //basicamente a função de CallBack porém para dados para o react não ter que ficar renderizando tudo a todo momento
    const premiumNumbers = useMemo(() => {
        return ["0", "100", "200"]
    }, []);

    useEffect(() => {
        console.log("premium numbers foram alterados")
    }, [premiumNumbers])

    return (
    <div>
        <h2>Use memo</h2>
        <input type="text" onChange={(e) => setNumber(e.target.value)}/>
        {premiumNumbers.includes(number) ? <p>Acertou</p> : ""}
    </div>
  )
}

export default HookUseMemo