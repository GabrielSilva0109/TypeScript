import { 
  Box,
  Button,
  Center,
  Input  
} from '@chakra-ui/react'
import { login } from '../service/login'
import { useState, useEffect } from 'react'
import { api } from '../api'

interface ICard {
    id: number,
    paragraph: string,
    details: string
}

interface UserData {
  email: string,
  password: string,
  name: string
}

export const Card = () => {
    const [ email, setEmail] = useState<string>('')
    const [ userData, setUserData] = useState<null | UserData>()
    useEffect(() => {
      const getData = async () =>{
        const data: any | UserData = await api
        setUserData(data)
      }

      getData()
    }, [])

    console.log(userData)

    return (
      <Box minHeight="100vh" background="#351547" padding="25px">
        <Box background="#fff" borderRadius="25px" padding="15px">
          <Center>
            <h1>Faça o Login</h1>
          </Center>
          <Center>
            
          </Center>
          <Input placeholder='Email' marginBottom={'5px'} value={email} onChange={(event) => setEmail(event.target.value)}/>
          <Input placeholder='Password'/>
          <Center>
            <Button colorScheme='teal' size='lg' marginTop='5px' onClick={() => login(email)}>Logar</Button>
          </Center>
        </Box>
      </Box>
      
    );
  }

