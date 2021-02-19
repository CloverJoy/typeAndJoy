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
  Textarea,
  Select,
  useToast,
  Box,
} from "@chakra-ui/react";

const AddModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    let type, pic;
    if (answer === 'E' || answer === 'I') {
      type = 'E/I';
      pic = 'https://picture-service.s3.us-east-2.amazonaws.com/images498/image101.jpg';
    } else if (answer === 'S' || answer === 'N') {
      type = 'S/N'
      pic = 'https://picture-service.s3.us-east-2.amazonaws.com/images498/image102.jpg';
    } else if (answer === 'T' || answer === 'F') {
      type = 'T/F';
      pic = 'https://picture-service.s3.us-east-2.amazonaws.com/images498/image103.jpg';
    } else {
      type = 'J/P';
      pic = 'https://picture-service.s3.us-east-2.amazonaws.com/images498/image104.jpg';
    }
    const data = { question, answer, type, pic };
    axios.post('/api/questions', data, { headers: {token: props.credential.token}})
      .then(res => {
        toast({
          position: 'bottom-left',
          title: `Question succesfully created!`,
          description: question,
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        props.refreshData();
        onClose();
      })
      .catch(err => console.log(err.data));
      e.preventDefault();
  };

  const initialRef = React.useRef()

  return (
    <Box m={3}>
      <Button onClick={onOpen} colorScheme="teal">Create a new question</Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New question</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Insert question</FormLabel>
              <Textarea
              name="question"
              ref={initialRef}
              placeholder="Rules are meant to be broken"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Answer</FormLabel>
              <Select
              placeholder="Answer for that question"
              name="answer"
              onChange={(e) => setAnswer(e.target.value)}
              >
              <option value="E">Extraverted</option>
              <option value="I">Introverted</option>
              <option value="S">Sensing</option>
              <option value="N">Intuition</option>
              <option value="T">Thinking</option>
              <option value="F">Feeling</option>
              <option value="J">Judging</option>
              <option value="P">Perceiving</option>
            </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" onClick={handleSubmit} colorScheme="teal" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
};

export default AddModal;