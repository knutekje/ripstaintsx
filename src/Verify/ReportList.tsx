import {Box,  Flex, Heading, Spacer, Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";


import {
    Table,
    Thead,
    Tbody,
   
    Tr,
    Th,
    Td,
   
    TableContainer,
} from '@chakra-ui/react'
  
import { url } from "../App";
import ModalVerify from "./ModalVerify";
import { DeleteButton } from "./DeleteButton";

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
                const res = await fetch(url + "/Report")
                const data = await res.json()
                return data
            } catch (error) {
                console.log(error)
            }
        }
    })
    return (
        
      
        <> 
           
            {isLoading ? <Spinner/> : <Flex>
             

             <TableContainer>
                 <Table size='sm'>
                     <Thead>
                     <Tr>
                         <Th>To convert</Th>
                         <Th>into</Th>
                         <Th isNumeric>multiply by</Th>
                     </Tr>
                     </Thead>
 

                     <Tbody>

                         {reports?.map((report) => (
                             <Tr>
                                 <Td>{report.title }</Td>
                                 <Td>{report.reportedTime.substring(0, 10) }</Td>
                                 <Td isNumeric><ModalVerify/><DeleteButton/></Td>
                             </Tr>))}

                     </Tbody>

                 </Table>
         </TableContainer>
     </Flex>}
                
       
           
    </>
        

            
   
        
    )
}
export default ReportList