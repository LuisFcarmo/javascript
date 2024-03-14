import { useState } from 'react'
import './App.css'
import Caixa from './componentes/Caixa'
import CaixaDinamica from './componentes/CaixaDinamica'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1>react com css</h1>
       <Caixa/>
       <CaixaDinamica/>

      </div>
    </>
  )
}

export default App
