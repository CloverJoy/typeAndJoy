import React, { useState } from 'react';
import axios from 'axios';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Box,
} from "@chakra-ui/react";

const ShareResult = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [isSubmit, setSubmit] = useState(false);
  const {result} = props;
  const toast = useToast();

  const handleSubmit = (e) => {
    setSubmit(true);
    const data = {name, email, result};
    console.log(data);
    axios.post('/api/results', data)
      .then((res) => {
         toast({
          position: 'bottom-left',
          title: `Answer succesfully shared!`,
          description: `${name} is ${result} :D` ,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        props.refreshData();
        onClose();
      })
      .catch(err => console.log(err));
      e.preventDefault();
  }

  const initialRef = React.useRef()
  const finalRef = React.useRef()

  return (
    <Box m={5}>
      <Button onClick={onOpen} isDisabled={isSubmit?true:false} colorScheme="teal">Share my answer</Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Share your answer</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Enter your name/alias/nickname</FormLabel>
              <Input
              name="name"
              ref={initialRef}
              placeholder="Seradotwav"
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
          <FormControl isRequired>
          <FormLabel>Your email address</FormLabel>
          <Input
            name="email"
            placeholder="we wont share your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" onClick={handleSubmit} colorScheme="teal" mr={3}>
              Share
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
};

export default ShareResult;