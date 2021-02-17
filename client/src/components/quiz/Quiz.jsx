import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text, Center, Box } from '@chakra-ui/react'
import QuizFormat from './QuizFormat';
import QuizResult from './QuizResult';
import mbtiQuestions from '../../../offlineData.js';

const Quiz = (props) => {
  const [quizes, setQuizes] = useState(mbtiQuestions);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  });
  const addStep = () => {
    setStep(step + 1);
  };
  const addScore = (question, isTrue) => {
  const {type, answer} = question;
  let letter;
  if (isTrue) {
    letter = answer;
  } else letter = type.replace('/', '').replace(answer, '');
    const current = score[letter];
    setScore({...score, [letter]: current + 1});
    addStep();
  }
  useEffect(() => {
    axios.get('/api/questions')
      .then(res => setQuizes(res.data))
      .catch(err => console.log(err));
  }, [])
  if (step < quizes.length) {
    return (
        <Box m={4}>
        <Center>
        <Text
          bgGradient="linear(to-r, blue.200, green.500)"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold"
        >
        {`Question ${step+1}/${quizes.length}`}
        </Text>
        </Center>
        <Center>
        <QuizFormat question={quizes[step]} addScore ={addScore} />
        </Center>
        </Box>
    )
  } else {
    return (
        <QuizResult score={score} />
    )
  }
};

export default Quiz;