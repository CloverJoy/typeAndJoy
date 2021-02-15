import React from 'react';
import { Flex, Spacer, Box, useColorMode, Button, Heading, Divider } from '@chakra-ui/react';
import { SunIcon, StarIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import theme from '../theme';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex m={4}>
     <Link to={{ pathname: '/' }}>
    <Heading
      bgGradient="linear(to-r, blue.200, green.500)"
      bgClip="text"
      size="2xl"
      sx={{":hover": {cursor: "pointer"}}}
    >
    TYPE & JOY!
    </Heading>
    </Link>
      <Spacer />
      <Box mr="2">
      <Link to={{ pathname: '/admin' }}>
      <Button colorScheme="teal">Login</Button>
      </Link>
      </Box>
      <Box mr="2">
      <Link to={{ pathname: '/signup' }}>
      <Button colorScheme="teal">Register Admin</Button>
      </Link>
      </Box>
      <Box>
      <Button onClick={toggleColorMode} colorScheme="teal">
          { colorMode === 'dark' ? <SunIcon /> : <StarIcon /> }
      </Button>
      </Box>
    </Flex>
  )
};

export default Navbar;
