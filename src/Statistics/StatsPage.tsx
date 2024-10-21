import {   Flex } from "@chakra-ui/react";

import { ByDepartment } from "./Components/ByDepartment/ByDepartment";
import TopTenList from "./Components/TopTen/TopTenList";
import { ByYearOorMonth } from "./Components/YearMonth/ByYearOrMonth";

function StatsPage() {
    return (
        <Flex width="200%" gap={2} alignItems={"center"} flexDir={"row"} flexWrap={"wrap"}>
                <ByYearOorMonth/>
                <ByDepartment/>
                <TopTenList />

        </Flex>
    )
}

export default StatsPage