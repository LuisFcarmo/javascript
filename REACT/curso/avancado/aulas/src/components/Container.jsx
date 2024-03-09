import React from 'react'

function Container({children}) {
  return (
    <div>
        <h3>Este é o titulo do container</h3>
        {children}
    </div>
  )
}

export default Container