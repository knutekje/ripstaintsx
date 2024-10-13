import { Spinner, Stack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { url } from "../App";
import { Report } from "../Types/Types";
import ReportItem from "./ReportItem";

const ReportList = () => {
  const { data: reports, isLoading } = useQuery<Report[]>({
    queryKey: ["reports"],
    queryFn: async () => {
      try {
        const res = await fetch(url + "/report");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        return data || [];
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Stack>
          {reports?.map((report) => (
            <ReportItem key={report.id} report={report} />
          ))}
        </Stack>
      )}
    </>
  );
};
export default ReportList;
