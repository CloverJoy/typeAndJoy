import React from 'react';
import { Button, ButtonGroup, Box, Center, Text, Image, Container } from '@chakra-ui/react';

const QuizFormat = (props) => (
  <Box>
    <Container>
      <Text fontSize="xl">{props.question.question}</Text>
    </Container>
    <Center>
      <Image src={props.question.pic}/>
    </Center>
    <Center>
      <Button colorScheme="red" variant="outline" m={5} onClick={() => props.addScore(props.question, false)}>False</Button>
      <Button colorScheme="green" variant="outline" onClick={() => props.addScore(props.question, true)}>True</Button>
    </Center>
  </Box>
)

export default QuizFormat;