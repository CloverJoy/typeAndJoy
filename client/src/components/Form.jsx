import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Text,
  Input,
  Button,
  Stack,
  Wrap,
  Center,
  InputRightElement,
  InputGroup,
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  useToast,
  Box,
  Heading,
  useColorModeValue as mode,
} from "@chakra-ui/react";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();

  const onSubmit = (data) => {
    axios.post('/api/admin', data)
      .then(res => {
        console.log(res.data);
        toast({
          position: 'bottom-left',
          title: `Welcome ${data.userName}!`,
          description: 'Your account is created :D',
          status: 'success',
          duration: 2222,
          isClosable: true,
        });
        setIsRegistered(true);
      })
      .catch(err => console.log(err));
  }

  if (!isRegistered) {
    return (
    <Box m={"1em"} bg={mode('gray.50', 'inherit')}>
    <Center>
        <Heading size="xl" m={4}>
          Register
        </Heading>
    </Center>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Center>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={3} m={3}>
        <Wrap>
          <Stack spacing={4} m={5}>
            <FormControl id="fullName" isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input name="fullName" ref={register({ required: true, minLength: 3 })} placeholder="Seraphine Songstress" />
            </FormControl>
            <FormControl id="userName" isRequired>
            <FormLabel>User Name</FormLabel>
            <Input name="userName" ref={register({ required: true, minLength: 3 })} placeholder="seradotwav" />
            </FormControl>
            <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input name="email" ref={register({required: true, })} placeholder="youremail@gmail.com" />
            <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl name="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
             <Input
              type={show ? "text" : "password"}
              placeholder="Enter password"
              name="password"
              ref={register}
              />
            <InputRightElement width="4.5rem">
            <Button size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
            </Button>
            </InputRightElement>
            </InputGroup>
            </FormControl>
            <Text>Your previous MBTI type (If have any)</Text>
             <Select placeholder="Your MBTI type" name="mbtiType" ref={register}>
              <option value="none">I don't have one</option>
              <option value="INTJ">INTJ</option>
              <option value="INTP">INTP</option>
              <option value="ENTJ">ENTJ</option>
              <option value="ENTP">ENTP</option>
              <option value="INFJ">INFJ</option>
              <option value="INFP">INFP</option>
              <option value="ENFJ">ENFJ</option>
              <option value="ENFP">ENFP</option>
              <option value="ISTJ">ISTJ</option>
              <option value="ISFJ">ISFJ</option>
              <option value="ESTJ">ESTJ</option>
              <option value="ESFJ">ESFJ</option>
              <option value="ISTP">ISTP</option>
              <option value="ISFP">ISFP</option>
              <option value="ESTP">ESTP</option>
              <option value="ESFP">ESFP</option>
            </Select>
            <Button type="submit" colorScheme="teal"> Submit </Button>
          </Stack>
        </Wrap>
        </Box>
      </Center>
    </form>
    </Box>
  )
  } else {
    return (
      <Box>
      <Center>
        <Heading m={10}>
          Registration Success!
        </Heading>
      </Center>
      <Center>
        <Link to={{ pathname: '/' }}>
        <Button colorScheme="teal">BACK TO HOME!</Button>
        </Link>
        </Center>
      </Box>
    )
  }

}

export default Form;