import Letter from "./Letter";
import React from 'react';

const Letters = ({letterStatus,selectLetter}) => {
  let letters = "Available Letters"
    return (
        <div>
          {letters}<br/>
          { Object.keys(letterStatus).map(l => {
               return <Letter selectLetter={selectLetter} letter={l} letterClass={letterStatus[l] ?"selected-letter":""}/>
            }) 
          }
        </div>
    )
}

export default Letters
