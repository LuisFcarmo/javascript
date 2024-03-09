import './App.css'
import Img from './assets/hqdefault.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import RenderCond from './components/RenderCond'
import Roleta from './components/Roleta'
import ShowUserName from './components/ShowUserName' 
import DestructProps from './components/DestructProps'
import { useState } from 'react'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
import MyFunction from './components/MyFunction'
import Message from './components/Message'
import ChangeMsgState from './components/ChangeMsgState'
import UserDetais from './desafio4/UserDetais'

function App() {
  const [x] = useState("luis");
  const [y] = useState(12)

  const [pessoas] = useState([
    {id: 1, nome: "ana maria", idade: 18, profissao:"pedreira" },
    {id: 2, nome: "ana maria", idade: 19, profissao:"caixa" },
    {id: 3, nome: "ana maria", idade: 1, profissao:"bebê" },
  ])

  const cars = [
    {id: 1, brad: "fiat", color: "amarela", novo:true, km:0},
    {id: 2, brad: "gol", color: "amarela", novo:true, km:0},
    {id: 3, brad: "corola", color: "amarela", novo:false, km:0},
    {id: 4, brad: "ferrari", color: "amarela", novo:false, km:0},
  ];

  const [message, setMessage] = useState("");

  const changemsg = (msg) => {
    setMessage(msg);
  };

  function showMessage() {
    console.log("eita maria fui executada");
  }

  return (
    <>
        <h1>Avançando em react parte 2 do curso</h1>
        <img src= {Img} alt="" />
        <ShowUserName name = "matheus"/>
        <DestructProps name = {x} age = {y}/>
      {/* reaproveitamento */}
        <CarDetails key = {1} brand = "ford" color = "red" km = {121} novo = {true}/>

      {/*reatilizando com loops*/}
        {cars.map((car) => (
          <CarDetails 
          key = {car.id}
          brand = {car.brad} 
          color = {car.color} 
          km = {car.km} 
          novo = {car.novo}/>
        ))}

      {/* fragments */}
        <Fragment/>
      {/*Children prop*/}
     
      <Container>
          {/*passando jsx como props isso vai ser muito util lá na frente*/}
          <p>Este é o meu conteudo</p>
      </Container>

      <Container>
          {/*passando jsx como props isso vai ser muito util lá na frente*/}
          <h5>conteudo diferente</h5>
      </Container>

      {/*função via props*/}
      <MyFunction fc = {showMessage}/>

      {/*State lift*/}
      <Message msg = {message}/>
      <ChangeMsgState changemsg = {changemsg}/>

      {
        pessoas.map((pessoa) => (
          <UserDetais
            key = {pessoa.id}
            nome = {pessoa.nome}
            idade = {pessoa.idade}
            profissao = {pessoa.profissao}
          />
        ))
      }
    </>
  )
}

export default App
