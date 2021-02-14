import React from 'react';
import { Button, ButtonGroup, Box, Center, Text, Image } from '@chakra-ui/react';

const QuizFormat = (props) => (
  <Box>
    <Text fontSize="4xl">{props.question.question}</Text>
    <Center>
    <Image src={props.question.pic}/>
    </Center>
    <Center>
    <Button colorScheme="red" variant="outline" onClick={() => props.addScore(props.question, false)}>False</Button>
    <Button colorScheme="green" variant="outline" onClick={() => props.addScore(props.question, true)}>True</Button>
    </Center>
  </Box>
)

export default QuizFormat;