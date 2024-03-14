import React from 'react'
import "./ListProd.css"
import { useState, useEffect } from 'react'

const ListProd = ({url}) => {
  const [item, setItems] = useState([])
  useEffect(() => {
     async function fetchdata() {
       const res = await fetch(url)
       const data = await res.json()
       setItems(data)
     }
      fetchdata();
  }, []);

  return (
    <div className = "BOXLIST">
        <h1 className = "tituloList">Lista de Produtos</h1>
        {console.log(item)}
        <ul>
            { 
              item.map((product) => {
                return (
                <li key = {product.id}> id: <span>{product.id} </span>Name: <span>{product.name}</span> Price: <span>{product.price}</span></li>
                )
              })
            }            
        </ul>
    </div>
  )
}

export default ListProd