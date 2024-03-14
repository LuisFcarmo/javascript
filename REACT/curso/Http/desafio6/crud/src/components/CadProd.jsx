import React from 'react'
import { useState, useEffect} from 'react'
import "./CadProd.css"

const CadProd = ({url}) => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [items, setItems] = useState([])

  
  useEffect(() => {
     async function fetchdata() {
       const res = await fetch(url)
       const data = await res.json()
       setItems(data)
     }
      fetchdata();
  }, []);


  const handleSubmit =  async (e) => {
    e.preventDefault()
    const product = {
      name,
      price,
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(product)

    });

    const addedProduct = await res.json()
    setItems((prevItems) => [...prevItems, addedProduct])

    setName("")
    setPrice("")
  }

  return (
    <div className = "BOXCAD">
        <h1>Cadastrar Produto</h1>
        <form onSubmit = {handleSubmit}>
            <label>
                <p>Name:</p>
                <input 
                    className = "dados" 
                    type = "text" 
                    value = {name}
                    name = "name"
                    onChange = {(e) => setName(e.target.value)}
                    />
            </label>
            <label>
                <p>Price:</p>
                <input 
                    className = "dados" 
                    type = "number" 
                    value = {price} 
                    name = "price" 
                    onChange = {(e) => setPrice(e.target.value)}/>
            </label>
            <input type = "submit" value = "criar" className = "enviar"/>
        </form>
    </div>
  )
}

export default CadProd