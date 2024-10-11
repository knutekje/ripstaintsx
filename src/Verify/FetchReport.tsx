import { useQuery } from "@tanstack/react-query"
import { url } from "../App"


export const FetchReport = () => {
    const {data:reports, isLoading } = useQuery<Report[]>({
        queryKey: ["reports"],
        queryFn: async () => {
            try {
                const res = await fetch(url + "/Report")
                const data = await res.json()
                return data
            } catch (error) {
                console.log(error)
            }
        }
    })

    return {reports, isLoading}
}