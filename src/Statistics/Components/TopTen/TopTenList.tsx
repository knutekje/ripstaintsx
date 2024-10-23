import { Flex,  Stack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { url } from "../../../App";
import { ReportDTO, YearMonthProp } from "../../../Types/Types";
import { TopTenItem } from "./TopTenItem";


const TopTenList : React.FC<YearMonthProp> = ({ year, month }) =>{
const {  data: toptens, isLoading } = useQuery<[ReportDTO]>({
    queryKey: ['toptens', year, month],
    queryFn: async () => {
      try {
        const res = await fetch(url + `/stats/topten?year=${year}&month=${month}`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        return data || [];
      } catch (error) {
        console.log(error);
        
      }
  },
  enabled: !!year && !!month,
    
});
  

  return (
    
      <Flex
          flex={1}
          alignItems={"center"}	
         /*  border={"1px"}	
          borderColor={"gray.600"}	
          p={2}		
          borderRadius={"lg"} */
          justifyContent={"space-between"} >
          {/*WEIRD Conditonal */}
			{toptens?.length === 1 && (
				<Stack alignItems={"center"} gap='3'>
					<Text fontSize={"xl"} textAlign={"center"} color={"gray.500"}>
                  
					</Text>
         
				</Stack>
			)}
			<Stack gap={3}>
				{toptens?.map((topten) => (
          <TopTenItem key={topten.sumValue} topten={topten}  />
				))}
			</Stack>
				
			
            </Flex>
  );
};
export default TopTenList;