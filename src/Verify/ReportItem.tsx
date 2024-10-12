import { useMutation, useQueryClient } from "@tanstack/react-query"
import { url } from "../App"
import { Box, Button,  Flex,  Heading,  Spinner } from "@chakra-ui/react";
import { Report } from "../Types/Types";
import ModalVerify from "./ModalVerify";

function ReportItem ({ report }: { report: Report })  {
    const queryClient = useQueryClient();
	const { mutate: deleteReport, isPending: isDeleting } = useMutation({
		
		mutationKey: ["deleteTodo"],
		mutationFn: async () => {
			try {
				const res = await fetch(url + `/report/${report._id}`, {
					method: "DELETE",
				});
				const data = await res.json();
				if (!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}
				return data;
			} catch (error) {
				console.log(error);
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["reports"] });
		},
	});

	return (
		<Flex gap={2} alignItems={"center"}>
			<Flex
				flex={1}
				alignItems={"center"}
				border={"1px"}
				borderColor={"gray.600"}
				p={2}
				borderRadius={"lg"}
				justifyContent={"space-between"}
			>
		<Box>
					<Heading size="md">{report.title} : {report.reportedTime.substring(0, 10)}</Heading>
					<Heading  noOfLines={1} size="sm">{report.description}</Heading>
            
		</Box>    
		<Box>
					{isDeleting ? <Spinner /> : <Button backgroundColor={"red.500"}  onClick={() => deleteReport()}>Delete</Button>}
					<ModalVerify key={report._id } report={report} />
		</Box>           
				
			</Flex>
		</Flex>
        )
}
export default ReportItem