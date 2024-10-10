import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import {
    Container,
    Flex,
    
} from "@chakra-ui/react";

function MainPage() {
    return (
            <Container w={[300, 400, 500]} >
             <Flex as="header"   w="100%">
                <NavBar />
            </Flex>
            <Flex  h="80vh" w="" alignItems="center" flexDirection={"column"} position={"inherit" }>    
                <Outlet />
            </Flex> 
            </Container>
    )
}

export default MainPage