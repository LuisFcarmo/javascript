import React from 'react'
import { useCallback, useState } from 'react'
import List from './List'
/* 
    O hook useCallBack pode ser utilizado para duas situações ele basicamente memoriza uma função fazendo ela não reconstruida
    a cada renderização de um componente
    1- o primeiro caso é quando estamos prezando pela performance então queremos que uma função muito complexa não seja reconstruida toda vez 
    2- já o segundo é quando o próprio react nos indica que uma função deveria estar contida em um useCallBack para evitar problemas de performance 
*/

const HookUseCallBack = () => {
  const [ counter, setCounter ] = useState(0);
  //basicamente um useEffect ele faz essa função complexa ser executada apenas uma vez com array de depência vazio ou quando um componente mudar
  const getItemFromDataBase = useCallback(() => {
    return ["a", "b", "c"];
  }, [])

  return (
    <div>
        <p>  
            O hook useCallBack pode ser utilizado para duas situações ele basicamente memoriza uma função fazendo ela não reconstruida <br/>
            a cada renderização de um componente <br/>
            1- o primeiro caso é quando estamos prezando pela performance então queremos que uma função muito complexa não seja reconstruida toda vez <br/>
            2- já o segundo é quando o próprio react nos indica que uma função deveria estar contida em um useCallBack para evitar problemas de performance <br/>
        </p>
    <h2>UseCallBack</h2>
        <button onClick={() => setCounter(counter + 1)}>alterar!</button>
        <p>{counter}</p>
        <List getItems = {getItemFromDataBase}/>

    </div>
  )
}



export default HookUseCallBack