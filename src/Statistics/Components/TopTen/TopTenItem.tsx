
import { ReportDTO } from "../../../Types/Types";
import {  Flex,  Text } from "@chakra-ui/react";

export const TopTenItem = ({ topten }: { topten: ReportDTO }, toptenIndex: Number) => {

 
    return (
    
    <Flex gap={1} alignItems={"center"} w="15vw" h="11.4vh">
      <Flex
				flex={2}
				alignItems={"center"}
				border={"1px"}
				borderColor={"gray.600"}
        p={1}          
        width={"100vw"}
          
				borderRadius={"lg"}
        justifyContent={"space-between"}
          
			>
            
               
          <>
                <Text>{}</Text>
                <Text>{topten.itemName}</Text>
                <Text>{topten.sumValue.toPrecision(4)}</Text>
              </>
                        
       
      </Flex> 
      
    </Flex>       
            
            )
}