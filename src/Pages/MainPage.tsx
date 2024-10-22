import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import {
    Container,
    Flex,
    
} from "@chakra-ui/react";

function MainPage() {
    return (
       
            <Container /* w={[300, 400, 500] }  */>
             <Flex as="header" w="100%" h="10vh">
                <NavBar />
            </Flex>
            <Flex   alignItems="center" flexDirection={"column"} position={"inherit" } marginTop="2">    
                <Outlet />
            </Flex> 
            </Container>
    )
}

export default MainPage