import { Box, Flex, Button,  useColorMode,  Container,    } from "@chakra-ui/react";
import {  FaClipboardCheck, FaClipboardQuestion,  } from "react-icons/fa6";
import { IoMoon, IoStatsChartSharp } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (

		
		<Container w={[300, 400, 500]} >
			
			<Box  borderRadius={"5"} >
			

				<Flex alignItems={"flex-start"} justifyContent={"space-between"} flexDirection={"row"}  >
			
					<Flex
						justifyContent={"left"}
						alignItems={"center"}
						gap={2}
						flexWrap={"wrap"}
					>
						<Button onClick={toggleColorMode}>
							{colorMode === "light" ? <IoMoon /> : <LuSun size={14} />}
						</Button>
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