import { Button, Card, CardBody, CardHeader } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

export type Report = {
    id: {
        timestamp: 1726725017,
        machine: 2915263,
        pid: 32544,
        increment: 4580559,
        creationTime: "2024-09-19T05:50:17Z"
      },
      title: string,
      description: string,
      status: true,
      quantity: 0,
      reportedTime: string
}


const ReportList = () => {
    const {data:reports, isLoading } = useQuery<Report[]>({
        queryKey: ["reports"],
        queryFn: async () => {
            try {
                const res = await fetch("http://localhost:5172/Report")
                const data = await res.json()
                return data
            } catch (error) {
                console.log(error)
            }
        }
    })
    return (
        <>
        {reports?.map((report) => (
            
        
        <Card key={report.id.pid}>
            <CardHeader borderRadius={10} border="HighlightText" color="HighlightText">
                {report.title}
            </CardHeader>
            <CardBody>
                <p>{report.description}</p>
                {report.reportedTime}
            </CardBody>
        </Card>
        ))}
        </>
    )
}
export default ReportList