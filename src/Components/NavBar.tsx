import { Box, Flex, Button, useColorModeValue, useColorMode, Text, Container, Spacer, border, Heading } from "@chakra-ui/react";
import { FaBiohazard, FaFrog } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (

		
		<Container w={[300, 400, 500]} position={"relative"}>
			
			<Box bg={useColorModeValue("gray.400", "gray.700")} px={4} my={4} borderRadius={"5"} flexWrap={"wrap"}>
			

				<Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"}>
					{/* LEFT SIDE */}
					<Flex
						justifyContent={"center"}
						alignItems={"center"}
						gap={3}
						display={{ base: "none", sm: "flex" }}
					>
						<Link to="VerifyPage">Verify Reports</Link>
			
						<Link to="ReportPage">Post Report</Link>

						
						
					</Flex>

					{/* RIGHT SIDE */}
					<Flex alignItems={"center"} gap={3}>
						<Heading fontSize={"lg"} fontWeight={700}>
							Rip Stain						</Heading>
							<FaFrog transform={""} color={"green"} size="large" />
						{/* Toggle Color Mode */}
						<Button onClick={toggleColorMode}>
							{colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
						</Button>
					</Flex>
				</Flex>
			</Box>
		</Container>
	);
}