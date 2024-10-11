import { Button } from "@chakra-ui/react"
import { FaTrash } from "react-icons/fa6"

export const DeleteButton = () => {

    return (
        <Button leftIcon={<FaTrash/>} backgroundColor="red.600">Delete</Button>
    )
}