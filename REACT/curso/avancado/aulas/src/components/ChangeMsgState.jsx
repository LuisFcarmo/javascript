import React from 'react'

const ChangeMsgState = ({changemsg}) => {
    const messages = ["oi", "opa", "chames"]
  return (
    <div>
        <button onClick = {() => changemsg(messages[0])}>1</button>
        <button onClick = {() => changemsg(messages[1])}>2</button>
        <button onClick = {() => changemsg(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMsgState