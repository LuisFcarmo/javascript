import React from 'react'
import { useState } from 'react'

const ListRender = () => {
  const [lista, setUsers] = useState([
    {id: 1, name: "matheus", age: 31},
    {id: 2, name: "pedro", age: 31},
    {id: 3, name: "cagao", age: 31},
    {id: 4, name: "cagao", age: 31},

  ]);

  /* 
    privios state alterando a lista original
  */
  const DeleteRandom = () => {
    var numeroAleatorioIntervalo = Math.floor(Math.random() * 4) + 1;
        setUsers((prevUsers) => {
        return prevUsers.filter((user) => numeroAleatorioIntervalo !== user.id);
    });
  };

  return (
    <div>
        <ul>
            {
                lista.map((item) => (
                    <li key = {item.id}>
                        {item.name} - {item.age}
                    </li>
                ))
            }
        </ul>
        <button onClick = {DeleteRandom} >delete random user</button>
    </div>
  )
};

export default ListRender