import React from 'react'

const CarDetails = ({brand, color, km, novo}) => {
  return (
    <div>
        <h1>Detalhes do carro</h1>
        <h3>marca = {brand}</h3>
        <h3>cor = {color}</h3>
        <h3>kilometragem = {km}</h3>   
        {
            (novo && <h3>este caro é novo</h3>)
        }
    </div>
  )
}

export default CarDetails