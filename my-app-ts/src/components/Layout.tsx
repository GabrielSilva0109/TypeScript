import { Box } from "@chakra-ui/react"
import { Header } from "./Header/Header"

export const Layout = ({children} : any) =>{

    return(
        <Box minHeight='100vh' background='#9413'>
            <Header/>
            {children}
        </Box>
    )
}