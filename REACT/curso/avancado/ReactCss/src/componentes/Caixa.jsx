import React from 'react'
import './caixa.css'

const Caixa = () => {
  const numero = 10;
  return (
    <div className = 'box'>
        <p>Estou dentro da caixa</p>
        <div style ={{backgroundColor: 'white'}}>
          {/* isso aqui não é muito utilizado pois deixa de dificil manutênção */}
          <p style ={{color: 'purple', padding: "40px"}}
          >Meu estilo é inline</p>
        </div>
        <div
          style = {
            numero >= 15 ? ({backgroundColor: 'blue', padding: '50px'}) : ({backgroundColor: 'purple', padding: '90px'})
          }
        >
          <h2 style = {
            numero > 10 ? ({color: 'purple'}) : ({color: 'yellow'}) 
          }>meu estilo é dinamico e inline</h2>
        </div>
    </div>
  )
}

export default Caixa