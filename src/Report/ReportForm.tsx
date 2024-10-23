import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Spacer,
} from "@chakra-ui/react";
import { useForm } from "@tanstack/react-form";
import { Fa42Group } from "react-icons/fa6";
import { url } from "../App";
import './ReportForm.css';

export const ReportForm = () => {

  const form = useForm({
    defaultValues: {
      id: "",
      itemName: "",
      description: "",
      quantity: "",
      file: "",
      department: "",
      foodItem: "",
      reportedTime: "0001-01-01T00:00:00+00:00",
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      try {
        await fetch(url + "/Report", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(value),
        });
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <Flex
        w={[300, 400, 500]}
        flexWrap={"wrap"}
        flexShrink={5}
        borderColor={"gray.500"}
        border="1px"
        gap={"2"}
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
        alignContent={"space-around"}
      >
        <Heading marginTop={"-7%"} textAlign={"right"}>Post Report</Heading>
        
      

        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          
        >
          
          <Flex p="2">
          <form.Field
            name="itemName"
            children={(field) => (
              <>
                <InputGroup>
                  <InputLeftAddon>Item Name</InputLeftAddon>
                  <Input
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                </InputGroup>
                
              </>
            )}
            />
            </Flex>
          <Flex p={2}>
          <form.Field
            name="description"
            children={(field) => (
              <>
                
                <InputGroup>
                  <InputLeftAddon>Description</InputLeftAddon>
                  <Input
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                </InputGroup>
              
               
              </>
            )}
            />
          </Flex>
          <Flex p="2">
          <form.Field
            name="department"
            children={(field) => (
              <>
                <InputGroup>
                <InputLeftAddon>Description</InputLeftAddon>
                <Select
                  placeholder="Choose department"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}>
                  <option value="Bar">Bar</option>
                  <option value="Lunch&Dinner">Lunch&Dinner</option>
                  <option value="Breakfast">Breakfast</option>
                  
                  </Select>
                  </InputGroup>
              </>
            )}
            />
          </Flex>
          <Flex p="2">
          <form.Field
            name="quantity"
            children={(field) => (
              <>
                
                <InputGroup>
                <InputLeftAddon>Quantity</InputLeftAddon>
                  <Input
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    type="number"
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                
                  </InputGroup>
              </>
            )}
          />
          </Flex>
          <Flex p="2">
          <form.Field
            name="file"
            children={(field) => (
              <>
                
                <InputGroup>
                <InputLeftAddon>Picture</InputLeftAddon>
                  <Input
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    type="file"
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                
                  </InputGroup>
              </>
            )}
          />
          </Flex>
          <Flex p="2" flex={2}>
            <Flex
              justifyContent={"left"}
              alignItems={"center"}
              gap={2}>
              <Button backgroundColor="green.400" leftIcon={<Fa42Group />} type="submit">
                Submit
              </Button>
            </Flex>
            <Spacer/>
            <Flex justifyContent={"right"}>
              <Button onClick={() => form.reset()}>Reset</Button>
            </Flex>
            
          </Flex>
        </form>
      </Flex>
    </>
  );
};
