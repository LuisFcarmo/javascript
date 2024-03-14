import React from 'react'
import "./CaixaDinamica.css"
import Title from "./Title"

const CaixaDinamica = () => {
  const redTitle = false;
  return (
    <div className = {redTitle ? ("Red-title") : ("Title")}>
        CaixaDinamica
        <h1>minha classe é dinamica</h1>
        {/* CSS MODULES */}
        <Title/>
    </div>
  )
}

export default CaixaDinamica