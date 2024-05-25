import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import './Product.css'

const Product = () => {
  const { id } = useParams();

  // carregamento dado individual
  const url = 'http://localhost:3000/products/' + id;
  const { data: items, loading, error } = useFetch(url);
  
  if (loading) {
    return <p>loading...</p>
  }

  if(error) {
    return <p>ocoreu um: {error}</p>
  }

  if (!items) {
    return <p>Nenhum dado encontrado</p>
  }
  return (
    <div className = 'infCard'>
      <p>Id do produto: {items.id}</p>
      <p>Nome: {items.name}</p>
      <p>Preço: {items.price}</p>
      <p>desc: {items.desc}</p>
      {/*nested routed*/}
      <Link to = {`/products/${items.id}/info`}>Mais informações</Link>
    </div>
  )
}

export default Product