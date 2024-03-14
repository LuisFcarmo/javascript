import React, { useState } from 'react'

const Texto = () => {
  const [bio, setBio] = useState("")
  const [role, setRole] = useState("")


  const HandleSubmit = (event) => {
    console.log(bio)
    console.log(role)
    event.preventDefault()
    setBio("");
  }

  return (
    <>
        <form onSubmit = {HandleSubmit}>
            <label>
                <textarea 
                      name = "bio" 
                      placeholder = "descrição do usuario"
                      onChange = {(e) => setBio(e.target.value)}
                      value = {bio}
                    > 
                    <span>Bio</span>
                </textarea>
            </label>
          {/* select */}
          <label>
            <span>Função do sistema</span>
            <select name = "role"
              onChange = {(e) => setRole(e.target.value)}
            >
              <option value="user">Usuario</option>
              <option value="edition">Editor</option>
              <option value="Administrador">Administrador</option>
            </select>
          </label>
            <input type= "submit" value = "enviar"/>
        </form>
    </>
  )
}

export default Texto