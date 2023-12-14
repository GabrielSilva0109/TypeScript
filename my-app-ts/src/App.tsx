import { Layout } from './components/Layout';
import styled from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react'
const Box = styled.div`
  background-color: orange;
  border-radius: 25px;
  padding-left: 15px;
`

function App() {
  return (
    <Layout>
      <Box>
        <h1>Faça o Login</h1>
      </Box>
      <label htmlFor='emailInput'>
        Email
      </label>
      <input id='emailInput' type='emailW'/>
      <label htmlFor='passwordInput'>
        Senha
      </label>
      <input id='passwordInput'type='password'/>
      <button>
        Entrar
      </button>
    </Layout>
  );
}

export default App;
