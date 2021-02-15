import React, { useState } from 'react';
import { Box, Input, Heading, Stack, Text, Button, Center, Wrap, InputGroup, InputRightElement } from '@chakra-ui/react';

const Login = (props) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const handleSubmit = (e) => {
    console.log({user: user, password: password});
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
      </Center>
    </Box>
  )
};

export default Login;
