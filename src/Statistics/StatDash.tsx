import { Button, Text, Flex, HStack, Stat, StatHelpText, StatLabel, StatNumber, VStack } from "@chakra-ui/react"
import { CalendarViewType, useCalendar } from "@h6s/calendar";
import { format } from "date-fns";
export const StatDash = () => {
    const {  month, year, navigation } = useCalendar({
        defaultViewType: CalendarViewType.Week
      });

    return (
        <VStack>
            <Flex>
            <HStack justify="space-between">
                <HStack>
                    <Button onClick={navigation.toPrev}>&lt;</Button>
                    <Text>{format(new Date(year, month), "MMMMMMM yyyy")}</Text>
                    <Button onClick={navigation.toNext}>&gt;</Button>
                </HStack>
                
            </HStack>
            </Flex>
            <Flex>
                <Stat>
                    <StatLabel>{month}</StatLabel>
                    <StatNumber>{year}</StatNumber>
                    <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                </Stat>
            </Flex>
       
        </VStack>
    )
}