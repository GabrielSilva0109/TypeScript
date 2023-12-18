//import { Layout } from './components/Layout';
//import styled from 'styled-components';
import { 
  Box,
  ChakraProvider,  
} from '@chakra-ui/react'
import { Layout } from './components/Layout';
import { Card } from './components/Card';
import { useState } from 'react'

function App() {
  const [ value, setValue] = useState(0)
  
  return (
    <ChakraProvider>
      <Layout>
        <Box>
          <Card />
        </Box>
      </Layout>
    </ChakraProvider>
  );
}

export default App;