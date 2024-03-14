import './App.css'
import { useState, useEffect } from 'react'
const url = "http://localhost:3000/products";
import { useFetch } from './hooks/useFetch';

function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  //custom hook
  const {data: items, httpConfig, loading, error} = useFetch(url)



  // //resgatando datos
  // useEffect(() => {
  //   async function fetchdata() {
  //     const res = await fetch(url)
  //     const data = await res.json()
  //     setProducts(data)
  //   }
  //   fetchdata();
  // }, []);
  //adicionando produtos 
   const handleSubmit = async (e) => {
      e.preventDefault()
    const product = {
        name,
        price,
    }
  //   const res = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(product)
  //   });
  //   //carregamento dinamico
  //   const addedProduct = await res.json()
  //   setProducts((prevProducts) => [...prevProducts, addedProduct])
    httpConfig(product, "POST");
    setName("");
    setPrice("");
  }



{/*array de dependecias como está função não esta relacionada com outras ela não tem este array*/}

  return (
    <>
     {/*Resgatar dados de uma api   */}
     <h1>Lista de produtos</h1>
     {/*loading*/}
     {error && <p>{error}</p>}
     {loading && <p>carregando.....</p>}
      <ul >
        {
          items && items.map((product) => (
            <li key = {product.id}>{product.name} - {product.price}</li>
          ))
        }
      </ul>
     
      <div className = 'addproduct'>
        <form onSubmit = {handleSubmit}>
          <label>
            <p>Nome</p>
            <input className = "texto" type="text" value = {name} name = "name" onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            <p>Price</p>
            <input className = "texto" type = "number" value = {price} name = "price" onChange={(e) => setPrice(e.target.value)}/>
          </label>
          <div className = 'btnbox'>
          {loading && <input type="submit" disabled value = "aguarde" className='enviar'/>}
          {!loading && <input type="submit" value = "criar" className='enviar'/>}
          
          </div>
        </form>
      </div>
    </>
  )
}

export default App
