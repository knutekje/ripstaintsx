import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box,  Flex, Heading, Spacer, Spinner, useColorModeValue } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import {  FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

export type Report = {
    id: {
        timestamp: 1726725017,
        machine: 2915263,
        pid: 32544,
        increment: 4580559,
        creationTime: "2024-09-19T05:50:17Z"
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
            {isLoading ? <Spinner/> : <Box/>}
            <Heading>Report</Heading>
            <Accordion allowToggle={true} bg={useColorModeValue("gray.400", "gray.700")} px={4} my={4} borderRadius={"5"}   w={[300, 400, 500]} overflowY={"auto"} >
               
                {reports?.map((report) => (
                    
                    <AccordionItem  key={report.id.pid}>
                        <h2>
                            <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
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
                </>
            
   
        
    )
}
export default ReportList