import React from 'react';

const Score = props => {
  return (
    <p className="text">
      Your Score: {props.correctAnswers}/{props.numQuestions}
    </p>
  )
}

export default Score;