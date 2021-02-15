import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, Text } from '@chakra-ui/react';
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
    <Box>
      <Heading>
      Welcome seradotwav!
      </Heading>
      <Text>
      {`We have ${questions.length} questions now!`}
      </Text>
      <Text>
      Question List:
      </Text>
      <QuestionList questions={questions} refreshData={refreshData} />
      <AddModal refreshData={refreshData} />
    </Box>
  )
};

export default AdminDashboard;