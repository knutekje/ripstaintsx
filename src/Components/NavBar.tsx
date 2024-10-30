import { Box, Flex, Button,  useColorMode,  Container, Text   } from "@chakra-ui/react";
import {  FaClipboardCheck, FaClipboardQuestion,  } from "react-icons/fa6";
import { IoMoon, IoStatsChartSharp } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { Link } from "react-router-dom";
import { SignOut } from "./SignOut";
import { useAuth } from "./AuthProvider";
import "./NavBar.css"

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { currentUser } = useAuth();
	

	return (

		
			
		<Box   borderRadius={"5"} >
			

				<Flex className="flex-container" alignItems={"flex-start"} justifyContent={"space-between"} flexDirection={"row"}  >
			
					<Flex
						flex={2}
						justifyContent={"left"}
						alignItems={"center"}
						gap={1}
						flexWrap={"wrap"}
					>
						<Flex  className="navbar" gap={2}>
						
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

					<Flex gap={2}>
						<Button onClick={toggleColorMode}>
							{colorMode === "light" ? <IoMoon /> : <LuSun size={14} />}
						</Button>
						<SignOut />
						<Text>{currentUser?.email}</Text>

							</Flex>
						
					</Flex>

					
				
				</Flex>
			</Box>
	);
}