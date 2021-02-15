import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import DeleteQuestion from './DeleteQuestion';

const QuestionListEntry = (props) => {
  const { question, type, answer, _id } = props.q;
  return (
    <Box>
      <Text>{`Question: ${question}`}</Text>
      <Text>{`Type: ${type}`}</Text>
      <Text>{`Answer: ${answer}`}</Text>
      <DeleteQuestion refreshData={props.refreshData} id={_id} />
    </Box>
  )
};

const QuestionList = (props) => {
  return (
    <Box>
    {
      props.questions.map((question, idx) => <QuestionListEntry refreshData={props.refreshData} key={`questions ${idx}`} q={question} />)
    }
    </Box>
  )
};

export default QuestionList;
