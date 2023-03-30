import React from 'react';

const Letter = ({letter,letterClass,selectLetter}) => {
    const changeLetterStatus = () =>{ 
        selectLetter(letter)
    }
    return (
       <span onClick={changeLetterStatus} className={letterClass}>{letter} </span>
    )   
}

export default Letter