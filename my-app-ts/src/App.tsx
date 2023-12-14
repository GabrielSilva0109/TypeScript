import { Layout } from './components/Layout';
import styled from 'styled-components';
import { 
  ChakraProvider,
  Input  
} from '@chakra-ui/react'

const Box = styled.div`
  background-color: orange;
  border-radius: 25px;
  padding-left: 15px;
`

function App() {
  return (
    <ChakraProvider>
        <Layout>
        <Box>
          <h1>Faça o Login</h1>
        </Box>
        <Input placeholder='email'/>
        <Input placeholder='password'/>
        
        <button>
          Entrar
        </button>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
