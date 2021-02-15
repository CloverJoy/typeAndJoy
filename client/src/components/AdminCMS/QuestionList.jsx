import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import mbtiQuestions from '../../../offlineData';

const QuestionListEntry = (props) => {
  const { question, type, answer } = props.q;
  return (
    <Box>
      <Text>{`Question: ${question}`}</Text>
      <Text>{`Type: ${type}`}</Text>
      <Text>{`Answer: ${answer}`}</Text>
    </Box>
  )
};

const QuestionList = (props) => {
  const [questions, setQuestions] = useState(mbtiQuestions);
  return (
    <Box>
    {
      questions.map((question, idx) => <QuestionListEntry id={`questions ${idx}`} q={question} />)
    }
    </Box>
  )
};

export default QuestionList;
