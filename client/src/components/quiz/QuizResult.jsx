import React from 'react';

const QuizResult = (props) => {
  const generateLetter = (result) => {
    let finalLetter = '';
    if (result.E > result.I) {
      finalLetter += 'E'
    } else {
      finalLetter += 'I'
    }
    if (result.S > result.N) {
      finalLetter += 'S'
    } else {
      finalLetter += 'N'
    }
    if (result.T > result.F) {
      finalLetter += 'T'
    } else {
      finalLetter += 'F'
    }
    if (result.J > result.P) {
      finalLetter += 'J'
    } else {
      finalLetter += 'P'
    }
    return finalLetter
  }
  return (
    <h1>{`You are ${generateLetter(props.score)}`}</h1>
  )
}

export default QuizResult;