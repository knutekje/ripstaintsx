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
  Flex,
  Select,
  Input,
} from "@chakra-ui/react";
import ItemDropDown from "./ItemDropDown";
import { LuInspect } from "react-icons/lu";
import { Report } from "../Types/Types";
import { useForm } from "@tanstack/react-form";
import { url } from "../App";
import { useState } from "react";
import { FoodItem } from "../Types/Types";

function ModalVerify({ report }: { report: Report }) {
  const [foodItem, setFoodItem] = useState<FoodItem>({_id: "",
    itemnr: 1,
    itemName: "string",
    itemPrice: 12,
    itemUnit: "string"});
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleChange(foodItem: FoodItem) {
    setFoodItem(foodItem);
  }
  const form = useForm({
    defaultValues: {
      report: {
        id: {},
        title: "string",
        description: "string",
        status: true,
        quantity: 0,
        reportedTime: "2024-10-11T11:52:04.725Z",
      },
      foodItem: {
        id: {},
        itemnr: 0,
        itemName: "string",
        itemPrice: 12,
        itemUnit: "string",
      },
    },
    onSubmit: async () => {
      console.log(report, foodItem);
      await fetch(url + "/VerifiedReport", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ report, foodItem }),
      });
      await fetch(`${url}/report/${report.id}`,{
        method: "DELETE",
      })
    },
  });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <Button leftIcon={<LuInspect />} onClick={onOpen}>
          Inspect
        </Button>

        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Verify Report</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>

              <label htmlFor="itemname">Item name</label>
              <Input id="itemname" value={report.itemName} disabled />
              
              <label htmlFor="description">Description</label>
              <Input id="description" value={report.description} disabled />

              <label htmlFor="quantity">Quantity</label>
              <Input id="quantity" value={report.quantity} disabled />

              <label htmlFor="reportedTime">Reported time</label>
              <Input id="reportedTime" value={report.reportedTime} disabled />


              <label htmlFor="department">Department</label>
              <Select id="department" placeholder={report.department}>
                <option value="Bar">Bar</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Breakfast">Breakfast</option>
              </Select>
              
              
              <ItemDropDown  handleNameSubmit={handleChange} />
              <Text>
                Value: {Number(report.quantity) * foodItem.itemPrice}
              </Text>
            </ModalBody>

            <ModalFooter>
              <Flex
                justifyContent={"left"}
                alignItems={"center"}
                gap={2}
                flexWrap={"wrap"}
              >
                <Button onClick={form.handleSubmit} type="submit">
                  Submit
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </form>
    </>
  );
}

export default ModalVerify;
