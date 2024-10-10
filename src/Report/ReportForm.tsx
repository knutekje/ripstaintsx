import { Button, Flex, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, VStack } from "@chakra-ui/react"
import { useForm } from '@tanstack/react-form'
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

const queryClient = new QueryClient()

type ReportIFace = {
    title: string,
    description: string,
    status: boolean,
    quantity: string,
    reportedTime: string,
}

export const ReportForm = () => {
   

    const [newReport, setNewReport] = useState<ReportIFace>({
        title: '',
        description: '',
        status: false,
        quantity: "0",
        reportedTime: "2024-10-09T07:28:57.534Z",
    });
    
    const form = useForm({
        defaultValues: {
            title: '',
            description: '',
            status: false,
            quantity: '21',
            reportedTime: "2024-10-09T07:28:57.534Z",

        },
        onSubmit: async ({ value }) => {
            
            
            console.log(value)
            const res = await fetch("http://localhost:5172/Report", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",

                },
                body: JSON.stringify(value)
                

            });
        }
    })
    return (<Flex  w={[300, 400, 500]} flexWrap={"wrap"} flexShrink={5}>

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
        </Flex>
    )
}