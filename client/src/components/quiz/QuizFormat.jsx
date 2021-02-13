import React from 'react';

const QuizFormat = (props) => (
  <div>
    <h3>{props.question.question}</h3>
    <img src={props.question.pic}/>
    <button onClick={() => props.addScore(props.question, false)}>False</button>
    <button onClick={() => props.addScore(props.question, true)}>True</button>
  </div>
)

export default QuizFormat;