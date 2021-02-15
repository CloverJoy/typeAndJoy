import React from 'react';
import { Box, Text, Container, Center, Wrap } from '@chakra-ui/react';
import DeleteQuestion from './DeleteQuestion';

const QuestionListEntry = (props) => {
  const { question, type, answer, _id } = props.q;
  return (
    <Wrap>
    <Container>
    <Box m={10}>
      <Text>{`Question: ${question}`}</Text>
      <Text>{`Type: ${type}`}</Text>
      <Text>{`Answer: ${answer}`}</Text>
      <Center>
      <DeleteQuestion refreshData={props.refreshData} id={_id} />
      </Center>
    </Box>
    </Container>
    </Wrap>
  )
};

const QuestionList = (props) => {
  return (
    <Center>
    <Box>
    {
      props.questions.map((question, idx) => <QuestionListEntry refreshData={props.refreshData} key={`questions ${idx}`} q={question} />)
    }
    </Box>
    </Center>
  )
};

export default QuestionList;
