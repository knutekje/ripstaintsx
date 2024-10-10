import { useQuery } from "@tanstack/react-query"


export const FetchReport = () => {
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

    return {reports, isLoading}
}