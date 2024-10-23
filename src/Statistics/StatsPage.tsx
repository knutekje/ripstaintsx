import { useState } from "react";
import YearMonthPicker from "./Components/YearMonth/YearMonthPicker";
import {  Box, Flex, Grid, Text } from "@chakra-ui/react";
import TopTenList from "./Components/TopTen/TopTenList";
import { ByDepartment } from "./Components/ByDepartment/ByDepartment";


const StatsPage: React.FC = () => {
  const [year, setYear] = useState<number | string>(new Date().getFullYear());
  const [month, setMonth] = useState<string>('1'); 
  const handleYearChange = (newYear: string) => {
    setYear(newYear);
  };

  const handleMonthChange = (newMonth: string) => {
    setMonth(newMonth);
  };

    return (
      
        <Flex direction="column" p={5} minHeight="100vh">
            <Box  p={5} mb={5} width="100%">
          <Text color="white" fontSize="xl">
          <YearMonthPicker 
                year={year} 
                month={month} 
                onYearChange={handleYearChange} 
                onMonthChange={handleMonthChange} 
            />
          </Text>
            </Box>
            <Grid templateColumns="repeat(2, 1fr)" gap={3} width="100%">
                <Box
                p={4}
                 border={"1px"}	
                 borderColor={"gray.600"}
                 borderRadius={"lg"}>
           
            <TopTenList year={year} month={month} />
            
          </Box>
                <Box
                    border={"1px"}	
                    borderColor={"gray.600"}
                    borderRadius={"lg"}
                    p={4}>
           
            <ByDepartment year={year} month={month} />
           
          </Box>
        </Grid>
            
             

          
          
          

    </Flex>
  );
};

export default StatsPage;