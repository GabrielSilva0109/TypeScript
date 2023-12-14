//import { Layout } from './components/Layout';
//import styled from 'styled-components';
import { 
  Box,
  Button,
  Center,
  ChakraProvider,
  Input  
} from '@chakra-ui/react'



function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" background="#9413dc" padding="25px">
        <Box background="#fff" borderRadius="25px" padding="15px">
          <Center>
            <h1>Faça o Login</h1>
          </Center>
          <Input placeholder='Email' marginBottom={'5px'}/>
          <Input placeholder='Password'/>
          <Center>
            <Button colorScheme='teal' size='lg' marginTop='5px'>Logar</Button>
          </Center>
        </Box>
        
      </Box>
    </ChakraProvider>
  );
}

export default App;
