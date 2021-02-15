import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import QuestionList from './QuestionList';
import AddModal from './AddModal';
import mbtiQuestions from '../../../offlineData';

const AdminDashboard = (props) => {
  const [questions, setQuestions] = useState(mbtiQuestions);
  const [refresh, setRefresh] = useState(false);
  const refreshData = () => {
    setRefresh(!refresh);
  }
  useEffect(() => {
    axios.get('/api/questions')
      .then(res => setQuestions(res.data))
      .catch(err => console.log(err));
  }, [refresh]);
  return (
    <Flex justifyContent='center'>
      <Box m={5}>
      <Heading>
      Welcome seradotwav!
      </Heading>
      <Text>
      {`We have ${questions.length} questions now!`}
      </Text>
      <AddModal refreshData={refreshData} />
      </Box>
      <Box>
      <QuestionList questions={questions} refreshData={refreshData} />
      </Box>
    </Flex>
  )
};

export default AdminDashboard;