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
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState<string>('');
    const [fileId, setFileId] = useState<string | null>(null);
    const [uploading, setUploading] = useState<boolean>(false);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
          setFile(e.target.files[0]);
        }
        console.log(file)
        handleFileUpload()
      };
    async function handleFileUpload () {
        //e.preventDefault();
        //console.log(file)
        if (!file) {
            setMessage('Please select a file first.');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
    
        try {
          setUploading(true);
          setMessage('');
    
          // Make a POST request to upload the file
          const response = await fetch(url +'/api/Upload/upload', {
            method: 'POST',
            body: formData,
          });
    
          if (!response.ok) {
            throw new Error('Failed to upload file.');
          }
    
          const data: UploadResponse = await response.json();
          setFileId(data.fileId);
          setMessage('File uploaded successfully!');
        } catch (error: any) {
          setMessage(`Error uploading file: ${error.message}`);
        } finally {
          setUploading(true);
        }
        
       /*  console.log(fileId)
        console.log(formData)
        console.log(message) */
        handleChange(fileId)
    }
    

    return (<>
        {uploading ?
            <>
                <InputGroup>
                <InputLeftAddon>Picture</InputLeftAddon>
                <Input
                        disabled
                        defaultValue={"File Upload"}
                />
                
                </InputGroup>
            </> :
            <InputGroup>
                <InputLeftAddon>Picture</InputLeftAddon>
                <Input
                    type="file"
                    onChange={handleFileChange}
                />
                
            </InputGroup>}
    </>)
}