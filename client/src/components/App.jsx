import React, { useState } from 'react';
import { Button, Divider } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Quiz from './quiz/Quiz';
import Navbar from './Navbar';
import Landing from './Landing';
import theme from '../theme';
import Form from './Form';
import Admin from './AdminCMS/Admin';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Divider />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/signup" component={Form} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/admin" component={Admin} />
      </Switch>
  </Router>
  )
};

export default App;