import {   Flex } from "@chakra-ui/react";

import { ByDepartment } from "./Components/ByDepartment/ByDepartment";
import TopTenList from "./Components/TopTen/TopTenList";
import { TimeSpanChoose } from "./Components/YearMonth/TimeSpanChoose";
import { useState } from "react";

function StatsPage() {
    const [year, setYear] = useState<number>(2024)
    const [month, setMonth] = useState<number>(1)
    
   
    return (
        <Flex width="200%" gap={2} alignItems={"center"} flexDir={"row"} flexWrap={"wrap"}>
            <TimeSpanChoose setYear={setYear} setMonth={setMonth} />
            <ByDepartment year={year} month={month} />
            <TopTenList year={year} month={month}/>
        
        </Flex>
    )
}

export default StatsPage;