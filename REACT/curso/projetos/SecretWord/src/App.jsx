//CSS
import './App.css'

//React
import { useCallback, useEffect, useState } from 'react'

//data
import { WordList } from './data/words'

//components
import StartScreen from "./components/StartScreen"
import Game from "./components/Game"
import GameOver from "./components/GameOver"

const stages = [
  {id: 1, name: "Start"},
  {id: 2, name: "Game"},
  {id: 3, name: "End"}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(WordList);

  const [pickedWord, setPickdWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState(["aa"])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [points, setPoints] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    //pick a random category
    const categories = Object.keys(words)
    let indice = Math.floor(Math.random() * Object.keys(categories).length)
    const category = categories[indice]

    //pick a random word

    indice = Math.floor(Math.random() * words[category].length)
    const word = words[category][indice]

    return {word, category};
  }, [words])

  const StartGame = useCallback(() => {
    //pick wonrd and pick category
    restart();

    const { word, category } = pickWordAndCategory();

    let wordLetters = word.toLowerCase().split("")

    //fill states
    setPickdWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }, [pickWordAndCategory]);

  const Gameover = (letter) => {
    const normalizedletter = letter.toLowerCase();
    
    if (guessedLetters.includes(normalizedletter) || wrongLetters.includes(normalizedletter)) return;
    if (letters.includes(normalizedletter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedletter
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedletter
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  const RestartGame = () => {
    setGameStage(stages[0].name);
    retry();
  }

  const restart = () => {
    setGuessedLetters([]);
    setWrongLetters([]);    
  }

  const retry = () => {
    setPoints(0);
    setGuesses(3);
  }

  useEffect(() => {
    const uniqueLetters = [... new Set(letters)];
    if (guessedLetters.length === uniqueLetters.length) {
      setPoints((actualScore) => actualScore += 100);
      setGuesses(3);
      StartGame();
    }

  }, [guessedLetters, letters, StartGame])

  //check if guesses ended
  useEffect(() => {
    if (guesses <= 0) {
      restart();
      
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  return (
    <div className = 'App'>
      {gameStage == 'Start' && <StartScreen StartGame = {StartGame}/>}

      {gameStage == 'Game' && <Game 
        Gameover = {Gameover}
        pickedWord = {pickedWord}
        pickedCategory = {pickedCategory}
        letters = {letters}
        guessedLetters = {guessedLetters}
        wrongLetters = {wrongLetters}
        guesses = {guesses}
        points = {points}
      />}
        
      {gameStage == 'End' && <GameOver RestartGame = {RestartGame} points = {points}/>}
    </div>
  )
}

export default App
