import React from 'react';
import { Box, Text, Heading, Button, Center, Container, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Center>
    <Box mt={40}>
      <Container>
      <Center>
      <Box mb={5}>
      <Heading size="xl">
        Welcome to Type & Joy!
      </Heading>
      </Box>
      </Center>
      <Divider />
      <Box mb={5} mt={5}>
      <Heading size="l">
        Dynamic and up-to-date Myers-Briggs personalities test!
        <br />
        Know yourself better! :D
      </Heading>
      </Box>
      <Center>
      <Box>
      <Link to={{ pathname: '/quiz' }}>
      <Button colorScheme="teal">Take 16 personalities quiz now!!</Button>
      </Link>
      </Box>
      </Center>
      </Container>
    </Box>
    </Center>
  )
};

export default Landing;