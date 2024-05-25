//3 - alterando o contexto
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

import React from 'react'

const ChangeCounter = () => {
    const { counter, setCounter } = useContext(CounterContext)
  return (
    <div>
        <button onClick = {() => setCounter(counter + 1)}>Adicionar valor ao contator</button>
    </div>
  )
}

export default ChangeCounter