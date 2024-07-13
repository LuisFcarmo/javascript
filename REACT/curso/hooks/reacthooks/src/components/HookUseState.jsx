import React from 'react'
import { useState } from 'react'

const HookUseState = () => {
  // 1 uso do UseState
  // usamos para alterar um valor e exibir este valor
  let userName = "pedrita"
  let [ contador, setcontador ] = useState(0);
        //get       //set            //constructor 
  const [stateName, SetStateName ] = useState("");
    const changeName = () => {
        //isso aqui não vai funçionar
        //a varivael vai mudar mas o state ele faz com que o componente seja renderizado novamente
        userName = "Fui alterador socorro";
        
        //isso vai funcionar por causa do hoock do react
        setcontador(contador++);
        SetStateName("pedrita" + contador);
        console.log(contador)
    }
  //uma das funcionalidades mais importante dos states

  const [ nome, setNome ] = useState("");
  const [ fruta, setFruta ] = useState("");
  const handleSubmit = (e) => {
        e.preventDefault()
        const div = document.querySelector(".Containerinvi")
        setNome("")
        setFruta("")
        div.innerHTML = "<p>enviei os dados pro backend </p>"
    }

  return (
    <div>
        <h2>Usestate</h2>
        <p>variável: {userName}</p>
        <p>Isso aqui é um state: {stateName}</p>
        <button onClick={() => {changeName()}}>Click me e vejá a magica acontecendo</button>
        <form onSubmit = {handleSubmit}>
            <label>nome</label>
            <input type = 'text' value = {nome} onChange={(e) => setNome(e.target.value)}/>
            <label>fruta preferida</label>
            <input type= 'text' value = {fruta} onChange={(e) => setFruta(e.target.value)}/>
            <button>mandar</button>
        </form>
        <div className='Containerinvi'>
         
        </div>
    </div>
  )
}

export default HookUseState