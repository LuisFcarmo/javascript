import React, { useState,useRef } from 'react'
import "./Game.css"
const Game = (
  { Gameover, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters,
  guesses, points} ) => {
  
  const [letter, setLetter] = useState("")
  const letterInputRef = useRef(null)

  const HandleChange = (event) => {
    setLetter(event.target.value)
  }

  const HandleSubmit = (event) => {
    event.preventDefault();
    Gameover(letter);

    setLetter("");
    letterInputRef.current.focus();
  }

  return (
    <div className = 'game'>
      <p className= 'poinst'>
        pontuação: {points}
      </p>
      <h1>Advinhe a palavra</h1>
      <h3 className = 'tip'>
          dica sobre a palavra: <span>Dica {pickedCategory}</span>
      </h3>
      <p>você ainda tem {guesses} tentativas</p>

      <div className="wordContainer">
        {letters.map((letter, i) => (
          guessedLetters.includes(letter) ? (
            <span key = {i} className = "letter">{letter}</span>
          ): (
            <span key = {i} className = "blankSquare"></span>
          )
        ))}
      </div>

      <p>tente advinhar uma letra da palavra</p>
      <div className="letterContainer">
        <form onSubmit = {HandleSubmit}>
          <input 
            type="text" 
            name = "letter" 
            maxLength = "1"
            required onChange = {HandleChange}
            value = {letter}
            ref = {letterInputRef}
            />
          <button>jogar!</button>
        </form>
      </div>
      <div className = "worngLettersContainer">
        <p>letras já utilizadas</p>
        {
          wrongLetters.map((letter, i) => (
            <span key = {i}>{letter}, </span>
          ))
        }
      </div>
    </div>
  )
}

export default Game