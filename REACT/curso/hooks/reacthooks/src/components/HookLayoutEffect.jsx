import React from 'react'
import { useLayoutEffect, useEffect, useState } from 'react'
/*
    Muito parecido com o UseEffect
    a grande diferença é que este hook roda antes de renderizar o componente ou seja o hook é síncrono (bloqueando) o carregamento da página para 
    o sucesso da sua funcionalidade
    a ideia é executar algo antes que o usuário veja a página 
*/
const HookLayoutEffect = () => {
  const [ name, setName ] = useState("Algum nome");
  
  useEffect(() => {
    console.log(2)
    setName("mudou de nome")
  }, [])

  //basicamente o useLayoutEffect vai sempre ser executado premeiro que o effect 
  useLayoutEffect(() => {
    console.log(1)
    setName("outro nome")
  }, [])

  console.log(name)
  return (
    <div>
        <p>{name}</p>
    </div>
  )
}

export default HookLayoutEffect