import React, { useEffect, useState } from 'react'

const HookUseEffect = () => {
  //1 - useEffect sem dependências 
  //basicamente o useEffect vai ser executado todas as vezes que o componente for renderizado
  //esse que não tem arrays de dependência
   useEffect(() => {
    console.log("estou sendo executado")
   })
   
   let [ number, setNumber ] = useState(0);
   function Add() {
    setNumber(number + 1);

   }
   //como executar o useEffect apenas uma vez ?? basta apenas deixar o array de dependência vazio

   useEffect(() => {
    console.log("eu sou um useEffect vazio vou ser executado apenas uma vez durante o meu tempo de vida")
   }, [])

   //useEffect que vai estar dependendo de um array de depência ai o useEffect fica mais poderoso pois ele vai ser executado apenas quando
   //o elemento componente ou qualquer coisa no array de depência ele sera executado

   let [ Saldar, setSaldar ] = useState(" Bom dia");

   function newSaldation() {
    setSaldar(Saldar + "chames chames")
   }    
   //toda vez que saldar for alterado o useEffect sera executado
   useEffect(() => {
    console.log("fui executado")
   }, [Saldar])

   //clean up no useEffect alguns efeitos precisam ter uma tecninca de cleanup (limpeza para garantir) o seu funcionamento
   //basicamente é um vazamento de memoria que deixa vazar eventos para outras páginas

   useEffect(() => {
    const timer = setTimeout(() => {
        newSaldation()
    }, 100);
    
    return () => clearTimeout(timer);
    }, [Saldar])

    return (
        <div>
            <h2>HookUseEffect</h2>
            <p>{number}</p>
            <button onClick = {() => Add()}>Click-me</button>
            <button onClick = {() => newSaldation()}>Click-me 2</button>
            <p>{Saldar}</p>
        </div>  
    )
}

export default HookUseEffect