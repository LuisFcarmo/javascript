import React from 'react'
import "./FormExemple.css"
const FormExemple = () => {
  return (
    <>  
        <form>
            <div>
                <label htmlFor = "name">name:</label>
                <input type="text" name="name" placeholder = 'Digite seu nome'/>
            </div>
            <input type="submit" value = 'enviar'/>
        </form>
    </>
  )
}

export default FormExemple