import React from 'react';
import Letter from "./Letter";

const Solution = ({solution,letterStatus}) => {
    let wordArray = solution.word.split("")
    return (
       <div>
        { wordArray.map(l => {
           return letterStatus[l] === true ? <Letter  key={l}  letter={l} /> : <Letter key={l}  letter="_" />
          }) 
        }
        <br /> {solution.hint} 
       </div>
    )   
}

export default Solution