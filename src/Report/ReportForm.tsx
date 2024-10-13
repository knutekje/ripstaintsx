import {
  Button,
  Flex,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useForm } from "@tanstack/react-form";
import { FaWind } from "react-icons/fa6";
import { url } from "../App";
//import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query"
//import { useState } from "react"
export const ReportForm = () => {

  const form = useForm({
    defaultValues: {
      id: "",
      itemName: "",
      description: "",
      quantity: "",
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
      >
        <Heading>Post Report</Heading>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <form.Field
            name="itemName"
            children={(field) => (
              <>
                <label htmlFor="title">Title</label>
                <Input
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </>
            )}
          />
          <form.Field
            name="description"
            children={(field) => (
              <>
                <label htmlFor="description">Description</label>
                <Input
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </>
            )}
          />
          <form.Field
            name="quantity"
            children={(field) => (
              <>
                <label htmlFor="quantity">Quantity</label>
                <NumberInput>
                  <NumberInputField
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </>
            )}
          />

          <Button leftIcon={<FaWind />} type="submit">
            Submit
          </Button>
        </form>
      </Flex>
    </>
  );
};
