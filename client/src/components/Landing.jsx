import React, { useState } from 'react';
import { Box, Text, Heading, Button, Center, Container, Divider, useColorModeValue as mode, ScaleFade } from '@chakra-ui/react';
import { Redirect, Link } from 'react-router-dom';

const Landing = () => {
  const [clicked, setClicked] = useState('false');
  const toggleRedirect = () => {
     setClicked(!clicked);
  };
  return (
    <Box as="section">
      <Box maxW="2xl" mx="auto" px={{ base: '6', lg: '8' }} py={{ base: '16', sm: '20' }} textAlign="center">
        <ScaleFade initialScale={0} in>
        <Heading as="h2" size="3xl" fontWeight="extrabold" letterSpacing="tight">
          Ready to
        </Heading>
        <Heading as="h2" size="3xl" fontWeight="extrabold" letterSpacing="tight" bgGradient="linear(to-r, blue.200, green.500)" bgClip="text">
          know yourself better?
        </Heading>
        </ScaleFade>
        <Text mt="4" fontSize="lg">
          We provide the dynamic and up-to-date MBTI questions, take your personality test now!
        </Text>
      <Button onClick={toggleRedirect} mt="8" as="a" href="#" size="lg" colorScheme="teal" fontWeight="bold">
       Take MBTI test now!
      </Button>
      </Box>
      {
        !clicked && (
          <Redirect to="/quiz" />
        )
      }
    </Box>
  )
};




export default Landing;