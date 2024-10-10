import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box,  Flex, Heading, Spacer, Spinner, useColorModeValue } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import {  FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

export type Report = {
    id: {
        timestamp: 0,
        machine: 0,
        pid: 0,
        increment: 0,
        creationTime: ""
      },
      title: string,
      description: string,
      status: true,
      quantity: 0,
      reportedTime: string
}


const ReportList = () => {
    const {data:reports, isLoading } = useQuery<Report[]>({
        queryKey: ["reports"],
        queryFn: async () => {
            try {
                const res = await fetch("http://localhost:5172/Report")
                const data = await res.json()
                return data
            } catch (error) {
                console.log(error)
            }
        }
    })
    return (
        
      
        <> 
            <Flex>
            {isLoading ? <Spinner/> : <Box/>}
                <Heading>Report</Heading>
            </Flex>
            <Flex>
                <Accordion
                    allowToggle={true}
                    bg={useColorModeValue("gray.400", "gray.700")}
                    position={"relative"} borderRadius={"1rem"}
                    maxH={"60vh"} w={[300, 400, 500]}
                    overflowY={"auto"} >
               
                {reports?.map((report) => (
                    
                    <AccordionItem  key={report.id.pid}>
                        <h2>
                            <AccordionButton
                                _expanded={{ bg: 'tomato', color: 'white' }}>
                                <Box as='span' flex='1' textAlign='left'>
                                    {report.title}  
                                </Box>
                                <Box as='span' flex='1' textAlign='right'>
                                    
                                    {report.reportedTime.substring(0, 10)}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <p>{report.description}</p>
                            
                            <p>{report.quantity}</p>
                            <Flex>
                                <Box >
                                    
                                    {report.status ? <FaCheckCircle color={"grey"} /> : <FaCheckCircle color={"green"} />}
                                </Box>
                                <Spacer />
                                <Box>
                                    <FaCircleXmark color={"red"} />
                                </Box>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>))}
                </Accordion>
                </Flex>
                </>
            
   
        
    )
}
export default ReportList