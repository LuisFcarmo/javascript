import React from 'react'
import { useRef } from 'react'
import SomeComponent from './SomeComponent'
/*
    com o hook useImperativeHandle temos como acionar ações em um outro componente de forma imperativa como não podemos passas refs com props
    precisamos usar uma função fowarref
    isso nos permite passar as referências e torna nosso exemplo viavel
    torna viavel executar funções no componente filho atráves do componente pai
*/
const HookUseImperativeHandle = () => {
  const componentref = useRef();

  return (
    <div>
        <hr />
        <h2>HookUseImperativeHandle</h2>
        <SomeComponent ref = {componentref}/>
        <button onClick={() => componentref.current.validate()}>validate</button>
        <hr />
    </div>
  )
}

export default HookUseImperativeHandle