import { Box, Flex, Button,  useColorMode,  Container,   Heading } from "@chakra-ui/react";
import {  FaFrog } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (

		
		<Container w={[300, 400, 500]} position={"relative"}>
			
			<Box  px={4} my={4} borderRadius={"5"} >
			

				<Flex  alignItems={"center"} justifyContent={"space-between"}  >
					{/* LEFT SIDE */}
					<Flex
						justifyContent={"center"}
						alignItems={"center"}
						gap={2}
					>
						<Link to="VerifyPage">Verify Reports</Link>
			
						<Link to="ReportPage">Post Report</Link>
						<Link to="StatsPage">Statistics</Link>


						
						
					</Flex>

					
					<Flex alignItems={"center"} gap={1}>
						<Heading fontSize={"lg"} fontWeight={700}>
							Rip Stain						</Heading>
							<FaFrog transform={""} color={"green"} size="large" />
						{/* Toggle Color Mode */}
						<Button onClick={toggleColorMode}>
							{colorMode === "light" ? <IoMoon /> : <LuSun size={14} />}
						</Button>
					</Flex>
				</Flex>
			</Box>
		</Container>
	);
}