


import {
    Table,
    Thead,
    Tbody,
   
    Tr,
    Th,
   
   
    TableContainer,
    Spinner,
    Flex,
} from '@chakra-ui/react'

import { useQuery } from '@tanstack/react-query';
  
import { url } from "../App";

import {  Report } from "../Types/Types";


import  ReportItem  from "./ReportItem";




const ReportList = () => {
    const { data: reports, isLoading } = useQuery<Report[]>({
		queryKey: ["reports"],
		queryFn: async () => {
			try {
				const res = await fetch(url + "/report");
				const data = await res.json();

				if (!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}
				return data || [];
			} catch (error) {
				console.log(error);
			}
		},
	});

   
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
                              <ReportItem key={report._id} report={report} /> 
                            ))}

                     </Tbody>

                 </Table>
         </TableContainer>
     </Flex>}
                
       
           
    </>
        

            
   
        
    )
}
export default ReportList