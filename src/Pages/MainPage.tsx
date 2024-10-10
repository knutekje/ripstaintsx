import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { Flex, Stack } from "@chakra-ui/react";

function MainPage() {
    return (
        <>
             <Flex as="header" position="fixed"  w="100%">
                <NavBar />
            </Flex>
            <Stack h="100vh" justifyContent="center" alignItems="center"    >    
                <Outlet />
            </Stack> 
            </>
    )
}

export default MainPage