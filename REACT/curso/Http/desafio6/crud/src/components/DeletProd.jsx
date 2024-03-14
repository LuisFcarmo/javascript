import React from 'react'
import { useState} from 'react';
import "./DeletProd.css"
const DeletProd = ({url}) => {
  const [id, setId] = useState("")
 

  const handleSubmit =  async (e) => {
    e.preventDefault()
    const deleteUrl = `${url}/${id}`

    await fetch(deleteUrl, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      },
    });
}

  return (
    <div onSubmit = {handleSubmit} className = 'BOXDELETE'>
        <h1>Deletar Produtos</h1>
        <form>
            <label>
                <p>Id:</p>
                <input type="text" onChange = {(e) => setId(e.target.value)} className = "dados"/>
            </label>
            <input type = 'submit' className = 'enviar' value = "Deletar"/>
        </form>
    </div>
  )
}

export default DeletProd