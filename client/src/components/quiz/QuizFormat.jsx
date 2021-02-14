import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';

const QuizFormat = (props) => (
  <div>
    <h3>{props.question.question}</h3>
    <img src={props.question.pic}/>
    <Button colorScheme="red" variant="outline" onClick={() => props.addScore(props.question, false)}>False</Button>
    <Button colorScheme="green" variant="outline" onClick={() => props.addScore(props.question, true)}>True</Button>
  </div>
)

export default QuizFormat;