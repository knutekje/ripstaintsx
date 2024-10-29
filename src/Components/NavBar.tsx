import { Box, Flex, Button,  useColorMode,  Container, Text   } from "@chakra-ui/react";
import {  FaClipboardCheck, FaClipboardQuestion,  } from "react-icons/fa6";
import { IoMoon, IoStatsChartSharp } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { Link } from "react-router-dom";
import { SignOut } from "./SignOut";
import { useAuth } from "./AuthProvider";

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { currentUser } = useAuth();
	

	return (

		
		<Container w={[350, 400, 500]} >
			
			<Box borderRadius={"5"} >
			

				<Flex alignItems={"flex-start"} justifyContent={"space-between"} flexDirection={"column"}  >
			
					<Flex
						justifyContent={"left"}
						alignItems={"center"}
						gap={1}
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
						<Text>{currentUser?.email}</Text>
						<SignOut/>
						
					</Flex>

					
				
				</Flex>
			</Box>
		</Container>
	);
}