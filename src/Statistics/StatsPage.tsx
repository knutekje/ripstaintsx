import {   Flex,  Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

import { ByDepartment } from "./Components/ByDepartment/ByDepartment";
import TopTenList from "./Components/TopTen/TopTenList";
import {  useEffect, useState } from "react";

function StatsPage() {
    const [year, setYear] = useState<number>(2024)
    const [month, setMonth] = useState<number>(10)
   
    
   
    return (
        <Flex width="200%" gap={2} alignItems={"center"} flexDir={"row"} flexWrap={"wrap"}>
            <InputGroup inlineSize={"auto"}>
            
                <InputLeftAddon>Year</InputLeftAddon>
            
                <Input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setYear(Number(e.target.value))}
                id="year"
                type="number"
                name="year"
                defaultValue={2024} />
            </InputGroup>

            <InputGroup inlineSize={"auto"}>
                <InputLeftAddon>Month</InputLeftAddon>
                <Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMonth(Number(e.target.value))}
                    id="month"
                    type="number"
                    name="month"
                    defaultValue={10} />
            </InputGroup>
            <ByDepartment year={year} month={month} /> 
            <TopTenList year={year} month={month}/>
             
        
        </Flex>
    )
}

export default StatsPage;