import React, { useState } from 'react';
import { Box, Input, Heading, Stack, Text, Button, Center, Wrap, InputGroup, InputRightElement, useToast } from '@chakra-ui/react';
import axios from 'axios';

const Login = (props) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const handleSubmit = (e) => {
    const data = {userName: user, password: password};
    axios.post('/api/login', data)
      .then(res => {
        if (res.data.userName) {
          props.getLoginInfo(res.data);
          toast({
            position: 'bottom-left',
            title: `Welcome ${res.data.userName}!`,
            description: 'Succesfully login to admin dashboard',
            status: 'success',
            duration: 2222,
            isClosable: true,
          })
          props.login();
        }
      })
      .catch(err => {
        console.log(err.data);
      })
    e.preventDefault();
  };
  return (
    <Box>
      <Center>
        <Heading m={10}>
          Administrator Login
        </Heading>
      </Center>
      <Center>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={7} m={3}>
      <Wrap>
        <Stack spacing={4}>
          <Text>Username: </Text>
          <Input name="username" value={user} onChange={(e) => setUser(e.target.value)} />
          <Text>Password: </Text>
          <InputGroup>
             <Input
              type={show ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            <InputRightElement width="4.5rem">
            <Button size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
            </Button>
            </InputRightElement>
            </InputGroup>
          <Button onClick={handleSubmit}colorScheme="teal">Login</Button>
          <Button colorScheme="teal" onClick={props.login}>Demo Login</Button>
        </Stack>
      </Wrap>
      </Box>
      </Center>
    </Box>
  )
};

export default Login;
