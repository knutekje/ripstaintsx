import { Button, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react"
import React from "react";


interface YearMonthChoose {
    
    setYear: (year: number) => void;
    setMonth: (month: number) => void;

}
const TimeSpanChoose = ({ setYear, setMonth }: YearMonthChoose) => {
  
   

    return (<>
        
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

        <Button onClick={()=> (console.log("fudg"))}> Update View</Button>

        

  
    </>)

}
export default (TimeSpanChoose)
