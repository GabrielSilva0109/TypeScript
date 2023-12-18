import { 
  Box,
  Button,
  Center,
  Input  
} from '@chakra-ui/react'
import { login } from '../service/login'
interface ICard {
    id: number,
    paragraph: string,
    details: string
}

export const Card = () => {
    return (
      <Box minHeight="100vh" background="#351547" padding="25px">
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
      
    );
  }

