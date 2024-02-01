import { Button, Center, Box, Text } from '@chakra-ui/react'

export const Header = () => {
    return(
        <Box background='orange' width='100%'>
            <Center>
                <Text fontSize='3x1'>Dio Bank</Text>
            </Center>
            <Button>
                Sair
            </Button>
        </Box>
    )
}