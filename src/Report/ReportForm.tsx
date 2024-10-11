import { Button, Flex,  Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react"
import { useForm } from '@tanstack/react-form'
import { ItemDropDown } from "../Verify/ItemDropDown"
//import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query"
//import { useState } from "react"


export const ReportForm = () => {
   


    
    const form = useForm({
        defaultValues: {
            title: '',
            description: '',
            status: false,
            quantity: '',
            foodItem: '',
            reportedTime: "2024-10-09T07:28:57.534Z",

        },
        onSubmit: async ({ value }) => {
            
            
            console.log(value)
            await fetch("http://localhost:5172/Report", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",

                },
                body: JSON.stringify(value)
                

            });
        }
    })
    return (
        <>
        <Flex w={[300, 400, 500]}
            flexWrap={"wrap"}
            flexShrink={5}
            borderColor={"white"}
            border="1px"
            borderRadius="lg" m={{ base: 5, md: 16, lg: 10 }} p={{ base: 5, lg: 16 }}
            >

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                    
                }}
            >
        <form.Field
            name="title"
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
                        onChange={(e) => field.handleChange(e.target.value)} />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                    </NumberInput>
              
             
            </>
            
            )}
                    />
           
                    
                   
                
                    <Button type="submit"> submit</Button>
                   
                </form>
                <ItemDropDown/>
            </Flex>

            </>
    )
}