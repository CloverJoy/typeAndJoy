import React from 'react';
import { Box, Text, Container, Center, Wrap, Divider } from '@chakra-ui/react';
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
      <DeleteQuestion which={'questions'} credential={props.credential} isNotAdmin={props.isNotAdmin} refreshData={props.refreshData} id={_id} />
    </Box>
    </Container>
    <Divider />
    </Wrap>
  )
};

const QuestionList = (props) => {
  return (
    <Center>
    <Box sx={{"overflowX": "hidden", "textAlign":"justify", "height": "80vh"}}>
    {
      props.questions.map((question, idx) => <QuestionListEntry credential={props.credential} refreshData={props.refreshData} key={`questions ${idx}`} q={question} />)
    }
    </Box>
    </Center>
  )
};

export default QuestionList;
