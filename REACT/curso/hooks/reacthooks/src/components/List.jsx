import React from 'react'
import { useState, useEffect } from 'react'
const List = ({getItems}) => {
  const [ myItems, setMyItem ] = useState([])
  //isso é feito pois getmyitems veio do banco de maneira assincrona então precisamos garantir que essa função só sera executada quando
  //os dados chegarem
  useEffect(() => {
    console.log("buscando items do DB...")
    setMyItem(getItems);
  }, [getItems])

  return (
    <div>
        <ul>
            {myItems && myItems.map((item) => (
                <li key = {item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default List