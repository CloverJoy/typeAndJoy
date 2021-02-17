import React, { useState } from 'react';
import axios from 'axios';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react"

 const DeleteQuestion = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef()
  const handleDelete = () => {
    const id = props.id;
    axios.delete(`/api/${props.which}`,{params: {id}, headers: {token: props.credential.token}})
      .then(res => {
        props.refreshData();
        onClose();
      })
      .catch(err => console.log(err));
  }
  if (props.isNotAdmin) {
    return (
      <>
      </>
    )
  } else {
    return (
    <>
      <Button size="xs" colorScheme="red" onClick={() => setIsOpen(true)}>
        Delete {props.which}
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete {props.which}
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
  }
 };

 export default DeleteQuestion;
