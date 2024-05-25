import React from 'react'
import { useSearchParams, } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'


const Search = () => {
    const [ searchParams ] = useSearchParams()
    const url = 'http://localhost:3000/products?' + searchParams;
    const {data: items, loading, error} = useFetch(url)

    if(loading) {
        return <p>loading...</p>
    }

    if (error) {
        return <p>houve um erro ao carregar a pagina {error}</p>
    }

    if (!items) {
        return <p>não há dados para carregar</p>
    }

    return (
    <div>
        <h1>search</h1>
        <h1>resultados disponiveis</h1>
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
  )
}

export default Search