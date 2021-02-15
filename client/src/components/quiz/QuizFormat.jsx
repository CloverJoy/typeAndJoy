import React from 'react';
import { Button, ButtonGroup, Box, Center, Text, Image, Container } from '@chakra-ui/react';

const QuizFormat = (props) => (
   <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} m={5}>
    <Center>
      <Image sizes="320x240" src={props.question.pic}/>
    </Center>
    <Center>
    <Container>
       <Text mt="4" fontSize="lg">{props.question.question}</Text>
     </Container>
    </Center>
    <Center>
      <Button colorScheme="red" variant="outline" m={5} onClick={() => props.addScore(props.question, false)}>False</Button>
      <Button colorScheme="green" variant="outline" onClick={() => props.addScore(props.question, true)}>True</Button>
    </Center>
  </Box>
)

export default QuizFormat;