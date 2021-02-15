import React, { useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import QuestionList from './QuestionList';

const AdminDashboard = (props) => {
  return (
    <Box>
      <Heading>
      Welcome seradotwav!
      </Heading>
      <Text>
      We have 12 questions now!
      </Text>
      <Text>
      Question List:
      </Text>
      <QuestionList />
    </Box>
  )
};

export default AdminDashboard;