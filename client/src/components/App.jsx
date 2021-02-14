import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import Quiz from './quiz/Quiz';

const App = () => {
  return (
    <ChakraProvider>
    <Quiz />
    </ChakraProvider>
  )
};

export default App;