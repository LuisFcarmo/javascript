import React from 'react'

const UserDetais = ({idade, nome, profissao}) => {
  return (  
    <div>
        <h1>Informações pessoas</h1>
        <p>idade = {idade}</p>
        <p>nome = {nome}</p>
        <p>profissão = {profissao}</p>
        {
            (idade >= 18) ? 
            (<p>O senhor {nome} pode tirar a carteira</p>) : 
            (<p>O senhor {nome} não pode tirar a carteira</p>)
        }
    </div>
  )
}

export default UserDetais