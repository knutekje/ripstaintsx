import { Button, Input, InputGroup, InputLeftAddon, Spinner } from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useState } from "react";
import { url } from "../App";
import { Updater } from "@tanstack/react-query";

interface UploadResponse {
    fileId: string;
}
  
interface Props {
    handleChange: (updater: Updater<string>) => void;
  }

export const UploadFile = ({ handleChange }: Props) => {
   
    

    return (<>
         
          
            <InputGroup>
                <InputLeftAddon>Picture</InputLeftAddon>
                <Input
                    type="file"
                    onChange={handleChange}
                />
                
            </InputGroup>
    </>)
}