import { Box, Flex, Button,  useColorMode,  Container,   Heading } from "@chakra-ui/react";
import {  FaClipboardCheck, FaClipboardQuestion, FaFrog } from "react-icons/fa6";
import { IoMoon, IoStatsChartSharp } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (

		
		<Container w={[300, 400, 500]} >
			
			<Box  px={4} my={4} borderRadius={"5"} >
			

				<Flex alignItems={"flex-start"} justifyContent={"space-between"} flexDirection={"column"}  >
					<Flex alignItems={"flex-start"} gap={2} background={"grey.600"}>
						<Heading fontSize={"lg"} fontWeight={700}>
							Rip Stain						</Heading>
							<FaFrog transform={""} color={"green"} size="large" />
						{/* Toggle Color Mode */}
						<Button onClick={toggleColorMode}>
							{colorMode === "light" ? <IoMoon /> : <LuSun size={14} />}
						</Button>
					</Flex>
					{/* LEFT SIDE */}
					<Flex
						justifyContent={"left"}
						alignItems={"center"}
						gap={2}
						flexWrap={"wrap"}
					>
						
						<Button leftIcon={<FaClipboardCheck />}>
							<Link to="VerifyPage">Verify Reports</Link>
						</Button>

						<Button leftIcon={<FaClipboardQuestion />}>
							<Link to="ReportPage">Post Report</Link>
						</Button>

						<Button leftIcon={<IoStatsChartSharp />}>
							<Link to="StatsPage">Statistics</Link>
						</Button>
						
						
					</Flex>

					
				
				</Flex>
			</Box>
		</Container>
	);
}