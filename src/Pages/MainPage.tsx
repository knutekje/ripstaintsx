import { Outlet } from "react-router-dom";
import "./MainPage.css"
import NavBar from "../Components/NavBar";
import {
    Container,
    Flex,
    
} from "@chakra-ui/react";

function MainPage() {
    return (
     <>
             
                <NavBar />
            
            <Flex   alignItems="center" flexDirection={"column"} position={"inherit" } marginTop="2">    
                <Outlet />
            </Flex> 
            </>      
    )
}

export default MainPage