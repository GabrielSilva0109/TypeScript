import { Box, ChakraProvider } from "@chakra-ui/react"
import { Layout } from "../components/Layout"
import { Card } from "../components/Card"
const Home = () =>{
    return ( 
        <ChakraProvider>
            <Layout>
              <Box>
                <Card />
              </Box>
            </Layout>
          </ChakraProvider>
    )
}

export default Home