import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react"

export const StatDash = () => {
    return (
        <Stat>
            <StatLabel>Collected Fees</StatLabel>
            <StatNumber>£0.00</StatNumber>
            <StatHelpText>Feb 12 - Feb 28</StatHelpText>
        </Stat>
    )
}