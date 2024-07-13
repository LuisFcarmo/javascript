import React from 'react'
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

const About = () => {
  const { contextValue } = useContext(SomeContext)

  return (
    <div>
      About
       <hr/>
      <h2>Use context</h2>
      <p>valor do context: {contextValue}</p>
      <hr />
    </div>
    
  )
}

export default About