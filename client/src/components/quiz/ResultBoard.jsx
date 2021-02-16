import React from 'react';
import moment from 'moment';
import DeleteQuestion from '../AdminCMS/DeleteQuestion';
import { Box, Text, Container, Heading, Center, Divider } from '@chakra-ui/react';

const BoardEntry = (props) => {
  const { name, result, createdAt, _id, refreshData } = props.result;
  return (
  <Box m={3}>
    <Container mb={2}>
    <Heading size="md">{name}</Heading>
    <Text>{`Type: ${result}`}</Text>
    <Text>{moment(createdAt).fromNow()}</Text>
    <DeleteQuestion isNotAdmin={props.isNotAdmin} which={'results'} refreshData={props.refreshData} id={_id} />
    </Container>
    <Divider />
  </Box>
  )
}

const ResultBoard = (props) => {
  return (
    <Box sx={{"overflowX": "hidden", "textAlign":"justify", "height": "80vh"}} borderWidth="1px" borderRadius="lg" p={2} m={2}>
      <Center>
      <Heading
        size="lg"
        m={2}
        bgGradient="linear(to-r, blue.200, green.500)"
        bgClip="text"
        >
        Type Board
      </Heading>
      </Center>
      {
        props.results.map((result, idx) => <BoardEntry refreshData={props.refreshData} isNotAdmin={props.isNotAdmin} key={`result ${result.name}`} result={result}/>)
      }
    </Box>
  )
};

export default ResultBoard;
