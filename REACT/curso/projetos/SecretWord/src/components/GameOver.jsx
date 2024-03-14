import React from 'react'
import "./GameOver.css"

const GameOver = ({RestartGame, points}) => {
  return (
    <div>
      <p>Fim de jogo</p>
      <h2>A sua pontuação foi: <span>{points}</span></h2>
      <button onClick = {RestartGame}>Restart</button>
    </div>
  )
}

export default GameOver