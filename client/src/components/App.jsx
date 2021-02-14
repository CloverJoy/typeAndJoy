import React, { useState } from 'react';
import { ChakraProvider, Button, useColorMode } from '@chakra-ui/react';
import { SunIcon, StarIcon } from '@chakra-ui/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Quiz from './quiz/Quiz';
import theme from '../theme';
import Form from './SignUp/Form';

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Router>
      <Button onClick={toggleColorMode} colorScheme="blue">
          { colorMode === 'dark' ? <SunIcon /> : <StarIcon /> }
        </Button>
      <Switch>
       <Route path="/" >
        <Form />
        </Route>
        <Route path="/quiz" >
        <Quiz />
        </Route>
      </Switch>
    </Router>
  )
};

export default App;