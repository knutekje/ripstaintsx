import { useMutation, useQueryClient } from "@tanstack/react-query"
import { url } from "../App"
import { Button,  Spinner,  Td, Tr } from "@chakra-ui/react";
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
			queryClient.invalidateQueries({ queryKey: ["deleteTodo"] });
		},
	});

	return (
		
		
							<Tr>
                                 <Td>{report.title }</Td>
                                 <Td>{report.reportedTime.substring(0, 10) }</Td>
                                 <Td>
										{isDeleting ? <Spinner /> : <Button backgroundColor={"red.500"} cursor={"crosshair"} onClick={() => deleteReport()}>Delete</Button>}
										<ModalVerify key={report._id } report={report} />
                                 </Td>
				</Tr>
        )
}
export default ReportItem