import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, Text, Flex, Center } from '@chakra-ui/react';
import QuestionList from './QuestionList';
import AddModal from './AddModal';
import ResultBoard from '../quiz/ResultBoard';
import mbtiQuestions from '../../../offlineData';

const AdminDashboard = (props) => {
  const [questions, setQuestions] = useState(mbtiQuestions);
  const [results, setResults] = useState([{name: 'Fetching data', result: 'Fetching data', createdAt: '2021-02-16T00:38:26.451Z'}]);
  const [refresh, setRefresh] = useState(false);
  const refreshData = () => {
    setRefresh(!refresh);
  }
  useEffect(() => {
    axios.get('/api/questions')
      .then(res => setQuestions(res.data))
      .catch(err => console.log(err));
    axios.get('/api/results')
      .then(res => setResults(res.data))
      .catch(err => console.log(err));
  }, [refresh]);
  return (
    <Flex justifyContent='center'>
      <Box m={3}>
      <Center>
      <Heading m={1}>
      {`welcome ${props.credential.userName || 'LOGIN DEMO'}`}
      </Heading>
      </Center>
      <Center>
      <Text m={1}>
      {`We have ${questions.length} questions now!`}
      </Text>
      </Center>
      <Center>
      <AddModal credential={props.credential} refreshData={refreshData} />
      </Center>
      <ResultBoard credential={props.credential} refreshData={refreshData} results={results}/>
      </Box>
      <Box>
      <QuestionList credential={props.credential} questions={questions} refreshData={refreshData} />
      </Box>
    </Flex>
  )
};

export default AdminDashboard;