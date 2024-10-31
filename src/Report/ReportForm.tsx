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
import { UploadFile } from "./UploadFile";
import { useState } from "react";

export const ReportForm = () => {
  const [file, setFile] = useState<File | null>( null);
  const formData:any = new FormData();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };
  const form = useForm({
    defaultValues: {
      id: "",
      ItemName: "",
      Description: "",
      Quantity: 0,
      FileId: "",
      Department: "",
      FoodItem: "",
      ReportedTime: "2024-10-30T18:24:37.789Z",
    },
    

    onSubmit: async ({ value }) => {
      console.log(file);
      formData.append("JsonObject", JSON.stringify(value))
      formData.append("File", file);
      try {
        await fetch(url + "/Report", {
          method: "POST",
      
          body: formData,
        });
        alert(value.FileId)
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
            form.reset();
          }}
          
        >
          
          <Flex p="2">
          <form.Field
            name="ItemName"
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
            name="Description"
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
            name="Department"
            children={(field) => (
              <>
                <InputGroup>
                <InputLeftAddon>Department</InputLeftAddon>
                <Select
                  placeholder="Department"
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
            name="Quantity"
            children={(field) => (
              <>
                
                <InputGroup>
                <InputLeftAddon>Quantity</InputLeftAddon>
                  <Input
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    type="number"
                    onChange={(e) => field.handleChange(Number(e.target.value))}
                  />
                
                  </InputGroup>
              </>
            )}
          />
          </Flex>

          <Flex p="2">
          <form.Field
            name="FileId"
            children={(field) => (
              <>
              {/*   <UploadFile
                  handleChange={handleFileChange}
                   /> */}
                <InputGroup>
                <InputLeftAddon>Picture</InputLeftAddon>
                  <Input
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    type="file"
                    onChange={handleFileChange}
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
