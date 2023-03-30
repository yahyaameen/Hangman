import { useState } from 'react'
import Score from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';
import './App.css';

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
  let [solution, setSolution] = useState({word:'REACT',hint:'javascript library'})
  let [score, setScore] = useState(100)

  const updateScore = (letter) =>{
    if (solution.word.includes(letter)) {
      setScore(score + 5)
    }else{
      setScore(score - 20)
    }
  }

  const selectLetter = (letter) => {
    let newLetters = {...letters}
    newLetters[letter] = true
    setLetters(newLetters);
    updateScore(letter)
  }

  return (
    <div>
        <Score score={score} />
        <Solution letterStatus={letters} solution={solution}  />
        <Letters letterStatus={letters} selectLetter={selectLetter} />
    </div>
  );
}

export default App;
