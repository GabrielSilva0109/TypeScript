//import { Layout } from './components/Layout';
//import styled from 'styled-components';
import { 
  Box,
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
          <Input placeholder='eEmail'/>
          <Input placeholder='Password'/>
        </Box>
        
      </Box>
    </ChakraProvider>
  );
}

export default App;
