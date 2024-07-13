import React from 'react'
import { useRef, useState, useEffect } from 'react'
/*
    o useref pode ser utilizado como useState para gerenciar valores, a diferença é que ele é um objeto, seu valor está na propriedade current
    outra particularidade do useRef é que ele não re-renderiza o componente ao ser alterado, sendo interessante em alguns casos
*/
const HookUseRef = () => {
    //1 -useref
    const numref = useRef(0)
    const [ counter, setcounter ] = useState(0)
    const [ COUNTER, SETCOUNTER ] = useState(0)

    useEffect(() => {
        numref.current = numref.current+1;
    }, [counter, COUNTER]);

    //2 useRef e o DOM basicamente como fazemos com o query
    //pegando a referência pro input

    const inputRef = useRef()
    const [ text, setText ] = useState("");
    const HandleSub = (e) => {
        e.preventDefault()
        setText("")
        inputRef.current.focus()
    }

    return (
        <div>
            <hr />
            <p>O componente renderizou {numref.current} vezes.</p>
            <p>counter 1: {counter}</p>
            <button onClick={() => setcounter(counter + 1)}>Contador a</button>
            <p>counte 2: {COUNTER}</p>
            <button onClick={() => SETCOUNTER(COUNTER + 1)}>caunter b</button>
            <hr />

            <div>
                <hr />
                <form onSubmit={HandleSub}>
                    <label>Seu nome:</label>
                    <input type="text" ref = {inputRef} value = {text} onChange={(e) => setText(e.target.value)}/>
                    <input type="submit" value="enviar"/>
                </form>
                <hr />
            </div>
        </div>
  )
}

export default HookUseRef