import React from 'react';

const Score = ({score}) => {
    const HIGH_SCORE = 80
    const LOW_SCORE = 50
    let scoreStatus = ""
    if (score >= HIGH_SCORE) {
        scoreStatus = "high-score"
    }else if (score <= LOW_SCORE) {
        scoreStatus = "low-score"
    }
    else {
        scoreStatus = "medium-score"
    }
    return (
       <div className={scoreStatus}>{score}</div>
    )   
}

export default Score