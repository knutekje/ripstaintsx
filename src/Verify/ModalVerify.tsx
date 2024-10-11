import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Text,
    Flex
} from "@chakra-ui/react";
import ItemDropDown  from "./ItemDropDown";
import { LuInspect } from "react-icons/lu";
import { Report } from "../Types/Types";
import { useForm } from "@tanstack/react-form";
import { url } from "../App";
import { useState } from "react";
import { FoodItem } from "../Types/Types";

function ModalVerify({ report }: { report: Report }) {
  const [foodItem, setFoodItem] = useState<FoodItem>();
  const { isOpen, onOpen, onClose } = useDisclosure()
  //const [passedFoodItem, setFoodItem] = useState<FoodItem>()
   console.log(report)
  console.log(foodItem)
  
  function handleChange(foodItem: FoodItem) {
    console.log(foodItem)
    setFoodItem(foodItem)
  }
  const form = useForm({
    defaultValues: {
      "report": {
        "id": {},
        "title": "string",
        "description": "string",
        "status": true,
        "quantity": 0,
        "reportedTime": "2024-10-11T11:52:04.725Z"
      },
      "foodItem": {
        "id": {},
        "itemnr": 0,
        "itemName": "string",
        "itemPrice": 0,
        "itemUnit": "string"
      }
    },
    onSubmit: async () => {
        
        
     
      console.log(report, foodItem) 
      await fetch(url + "/VerifiedReport", {
            method: "POST",
            headers: {
                "Content-type": "application/json",

          },
            body: JSON.stringify({report, foodItem})
            

        });
    }
})
  
  
    return (
      <>
         <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                    
                }}
        >
        
        
        <Button leftIcon={<LuInspect/>} onClick={onOpen}>Inspect</Button>
  
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Verify Report</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Text>{report._id}</Text>
              <Text>{report.title}</Text>
              <Text>{report.description}</Text>
              <Text>{report.quantity}</Text>
              <Text>{report.status}</Text>
                <Text>{report.reportedTime}</Text>
                <ItemDropDown handleNameSubmit={handleChange} />
                <Text>Value: {Number(report.quantity) * foodItem?.itemPrice }</Text>

            </ModalBody>
  
              <ModalFooter>
                <Flex justifyContent={"left"} alignItems={"center"}
						gap={2}
						flexWrap={"wrap"}>
                  <Button onClick={form.handleSubmit} type="submit">Submit</Button>
                    <Button onClick={onClose}>Cancel</Button>
                </Flex>
            </ModalFooter>
          </ModalContent>
          </Modal>
          </form>
      </>
    )
}
  
export default ModalVerify;