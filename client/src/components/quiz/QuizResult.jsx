import React from 'react';
import { Box, Heading, Image, Container, Text, Center } from '@chakra-ui/react';
import profile from './profile';

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
  const type = generateLetter(props.score);
  return (
    <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} m={5}>
      <Center>
      <Heading
      m={5}
      bgGradient="linear(to-r, blue.200, green.500)"
      bgClip="text"
      size="lg"
      >
      {`You are ${type}`}</Heading>
      </Center>
      <Center>
      <Image m={3} alt={type} src={profile[type].pic} boxSize="320px"/>
      </Center>
      <Center>
      <Heading m={3} size="md" >
      {profile[type].aka}
      </Heading>
      </Center>
      <Center>
      <Container>
      <Text>{profile[type].description}</Text>
      </Container>
      </Center>
    </Box>
  )
}

export default QuizResult;