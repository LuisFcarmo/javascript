import React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import './Home.css';

const Home = () => {
  const url = 'http://localhost:3000/products';
  const { data: items, loading, error } = useFetch(url);
  
  if (loading) {
    return <p>dados estão sendo carregado...</p>
  }

  if (error) {
    return <p>ocorreu um {error}</p>
  }

  if (!items) {
    return <p>nenhum elemento encontrado</p>
  }
  
  return (
    <div>
      <div className = 'displayproducts'>
        <h1>Produtos</h1>
        {error && <p>{error}</p>}
        <ul className="products">
          {items && items.map(item => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              {/*rotas dinamicas*/}
              <Link className = 'links' to = {`/products/${item.id}`}>detalhes</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>   
  );
};

export default Home; 
