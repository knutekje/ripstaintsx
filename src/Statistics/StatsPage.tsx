import {  VStack } from "@chakra-ui/react";
import { StatDash } from "./StatDash";
import { ItemDropDown } from "../Report/ItemDropDown";

function StatsPage() {
    return (
        <VStack>
            <StatDash />
            <ItemDropDown/>
      </VStack>
    )
}

export default StatsPage