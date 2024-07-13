import React from 'react'
import { usePreview } from '../hooks/usePreview'
import { useState } from 'react'
/*
    os custom hooks são os hooks que nós criamos muita vezes para abstrair funções complexas do componente ou simplismente reaproveitar codigo
    basicamente os custom hooks são funções que separamos para reaproveitar codigo
*/
const HooksCustom = () => {
  const [name, setName ] = useState("luis");
  const previousValue = usePreview(name);

  return (
    <div>
        <hr />
        <h1>Custom Hook</h1>
        <p>atual: {name}</p>
        <p>anterior: {previousValue}</p>
        <button onClick={() => setName("juca" + Math.random())}>mudar nome</button>
        <hr />
    </div>
  )
}

export default HooksCustom