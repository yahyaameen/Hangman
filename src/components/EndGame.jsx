import React from 'react';

const EndGame = ({endGame,message}) => {
    return (
       <div>
        {
          endGame ? message: null
        }
       </div>
    )   
}

export default EndGame