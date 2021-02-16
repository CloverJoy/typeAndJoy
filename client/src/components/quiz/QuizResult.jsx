import React, { useState, useEffect } from 'react';
import { Flex, Spacer, Box, Heading, Image, Container, Text, Center } from '@chakra-ui/react';
import axios from 'axios';
import profile from './profile';
import ShareResult from './ShareResult';
import ResultBoard from './ResultBoard';

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
  const [results, setResults] = useState([{name: 'Fetching data', result: 'Fetching data', createdAt: '2021-02-16T00:38:26.451Z'}]);
  const [refresh, setRefresh] = useState('false');
  const refreshData = () => setRefresh(!refresh);
  const type = generateLetter(props.score);
  useEffect(() => {
    axios.get('/api/results')
      .then(res => {
        setResults(res.data);
      })
      .catch(err => console.log(err));
  }, [refresh]);
  return (
    <Flex >
    <Box>
      <ResultBoard results={results} isNotAdmin={true} refreshData={refreshData} />
    </Box>
    <Spacer />
    <Center>
    <Box sx={{"overflowX": "hidden", "textAlign":"justify", "height": "80vh"}} borderWidth="1px" borderRadius="lg" p={3} m={2}>
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
      <Center>
      <ShareResult refreshData={refreshData}result={type} />
      </Center>
    </Box>
    </Center>
    <Spacer />
    <Box>
    </Box>
    </Flex>
  )
}

export default QuizResult;