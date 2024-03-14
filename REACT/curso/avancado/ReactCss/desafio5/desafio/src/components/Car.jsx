import React from 'react'
import "./Car.css"
const Car = ({name, brand, km, N}) => {
  return (
    <div className = 'Capsula'>
        <p>Name: {name}</p>
        <p>Brand: {brand}</p>
        <p>km: {km}</p>
        {N ? 
        (
            <div className = 'promo'>
                <p className = 'ppromo'>Eita carrinho saiu agora da Garagem</p>
            </div>
        ) : null
        }
    </div>
  )
}

export default Car