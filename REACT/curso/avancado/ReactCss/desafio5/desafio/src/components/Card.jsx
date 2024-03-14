import React, { useState } from 'react'
import Car from './Car'
import "./Card.css"
const Card = () => {
    let [Cars] = useState([
          {name: 'Corola', brand: 'toyota', km: 1291, N: false},
          {name: 'gol', brand: 'toyota', km: 0, N: true},
          {name: 'parati', brand: 'toyota', km: 1291, N: false},
          {name: 'currier', brand: 'toyota', km: 0, N: true},
          {name: 'caminhão', brand: 'toyota', km: 0, N: false},
          {name: 'hilux', brand: 'toyota', km: 0, N: true},
          {name: 'gol', brand: 'toyota', km: 0, N: false},
        ]
    )
    
    return (
    <div className = 'box'>
        {
            Cars.map(element => (
              <Car
                name = {element.name}
                brand = {element.brand}
                km = {element.km}
                N = {element.N}
              />  
            ))
        }
    </div>
  )
}

export default Card