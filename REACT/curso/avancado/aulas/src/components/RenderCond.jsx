import React from 'react'
import { useState } from 'react'

const RenderCond = () => {
  const [x] = useState(true);
  const [y] = useState("name");
  return (
    <div>
        <h1>Isso será exibido ?</h1>
        {x && <p>se x for verdade sim</p>}
        {!x && <p>se x for verdade sim</p>}
        {(y === "joão") ? 
        (<p>Nome é joão</p>) : 
        (<p>O nome não é joão</p>)}
    </div>
  )
}

export default RenderCond