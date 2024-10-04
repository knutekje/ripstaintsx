import { Button, Flex, Input, Spinner } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const ReportForm = () => {
    const [newReport, setNewReport] = useState("");

    const queryClient = useQueryClient();

    const { mutate: createReport, isPending: isCreating } = useMutation({
        mutationKey: ['createReport'],
        mutationFn: async (e: React.FormEvent) => {
            e.preventDefault();
            try {
                const res = await fetch("http://localhost:5172/Report", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",

                    },
                    body: JSON.stringify({ body: newReport }),
                    

                });
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.error || "Somethings fucked");
                }
                setNewReport("");
                return data;
            } catch (error: any) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['reports'] });
        },
        onError: (error: any) => {
            alert(error.message);
        }

    });

    return (
        <form onSubmit={createReport}>
            <Flex gap={2}>
				<Input
					type='text'
					value={newReport}
					onChange={(e) => setNewReport(e.target.value)}
					ref={(input) => input && input.focus()}
				/>
				<Button
					mx={2}
					type='submit'
					_active={{
						transform: "scale(.97)",
					}}
				>
					{isCreating ? <Spinner size={"xs"} /> : <IoMdAdd size={30} />}
				</Button>
			</Flex>
        </form>
    )
}
export default ReportForm;