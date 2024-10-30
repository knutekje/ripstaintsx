import React from 'react';
import { Flex, Radio, RadioGroup, Select } from '@chakra-ui/react';

interface YearMonthPickerProps {
  year: number | string;
  month: string;
  onYearChange: (year: string) => void;
  onMonthChange: (month: string) => void;
}

const YearMonthPicker: React.FC<YearMonthPickerProps> = ({ year, month, onYearChange, onMonthChange }) => {
  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - 5; i <= currentYear + 2; i++) {
      years.push(i);
    }
    return years;
  };

  return (
    <Flex   flex={1}
    alignItems={"center"}	
    border={"1px"}	
    borderColor={"gray.600"}	
    p={2}		
    borderRadius={"lg"}
    justifyContent={"space-between"} 
    >
      {/* Year Select */}
      <Select 
        placeholder="Select Year" 
        value={year} 
        onChange={(e) => onYearChange(e.target.value)}
      >
        {generateYears().map((yr) => (
          <option key={yr} value={yr}>
            {yr}
          </option>
        ))}
      </Select>

      {/* Month Select */}
      <RadioGroup>
        <Radio>By Year</Radio>
        <Radio>By month and year</Radio>
      </RadioGroup>
      
      <Select 
        placeholder="Select Month" 
        value={month} 
        onChange={(e) => onMonthChange(e.target.value)}
      >
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </Select>
    </Flex>
  );
};

export default YearMonthPicker;
