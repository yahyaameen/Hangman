import { useState } from 'react'
import Score from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';
import './App.css';
import EndGame from './components/EndGame';

function App() {

  const generateLetterStatuses = () => {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  const letterStatus = generateLetterStatuses()
  let [letters, setLetters] = useState(letterStatus)
  let [solution, setSolution] = useState({word:'JAVA',hint:'programing language'})
  let [score, setScore] = useState(100)
  let [endGame, setEndGame] = useState(false)
  let [message, setMessage] = useState("")

  const isGuessedWord = (newLetters) => {
    let wordArray = solution.word.split("")
    for (const letter of wordArray) {
       if (newLetters[letter] === false) {
           return false
       }
     }
     return true
  }

  const updateScore = (letter,newLetters) =>{
    if (solution.word.includes(letter)) {
      setScore(score + 5)
      if (isGuessedWord(newLetters)) {
        setEndGame(true)
        setMessage("Congratulations")
      }
    }else{
      const newScore = score -20
      setScore(newScore)
      if (newScore <= 0 ) {
        setEndGame(true)
        setMessage(`the secret word is ${solution.word}`)
      }
    }
  }

  const selectLetter = (letter) => {
    let newLetters = {...letters}
    newLetters[letter] = true
    setLetters(newLetters);
    updateScore(letter,newLetters)
  }

  return (
    <div>
        <Score score={score} />
        <Solution letterStatus={letters} solution={solution}  />
        <Letters letterStatus={letters} selectLetter={selectLetter} />
        <EndGame message={message} endGame={endGame} />
    </div>
  );
}

export default App;
