import React from 'react'
import { useParams } from 'react-router-dom'
const MoreInfo = () => {
    const {id} = useParams()

    return (
    <div>
        <h1>Mais informações sobre o produto {id}</h1>
    </div>
  )
}

export default MoreInfo