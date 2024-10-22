import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react"


interface YearMonthChoose {
    
    setYear: (year: number) => void;
    setMonth: (month: number) => void;

}
export const TimeSpanChoose = ({ setYear, setMonth }: YearMonthChoose) => {
  
   

    return (<>
        
        <InputGroup>
            <InputLeftAddon>Year</InputLeftAddon>
            <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setYear(Number(e.target.value))} id="year" type="number" name="year"  />
        </InputGroup>
        <InputGroup>
            <InputLeftAddon>Month</InputLeftAddon>
            <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMonth(Number(e.target.value))} id="month" type="number" name="month"  />
        </InputGroup>

  
    </>)

}
