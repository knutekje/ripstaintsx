
import { useQuery } from "@tanstack/react-query"
import { Select, Spinner } from "@chakra-ui/react"
import { url } from "../App"

type FoodItem = {
    itemnr: string,
    itemName: string,
    itemPrice: number,
    itemUnit: string,
}


export const ItemDropDown = () => {
    const { data: fooditems, isLoading } = useQuery<FoodItem[]>({
        queryKey: ["fooditems"],
        queryFn: async () => {
            try {
                const res = await fetch(url + "/FoodItem")
                const data = await res.json()
                console.log(data)
                return data
            } catch (error) {
                console.log(error)
            }
        }
    })

    return (
          
           
       
          
        <>
           
            {isLoading ? <Spinner/> :    <Select placeholder='Select option'>
            {fooditems?.map((fooditem) => (

                <option id={fooditem.itemnr} value = { fooditem.itemnr } > { fooditem.itemName }</option>
            ))}
            </Select>}
      
               
            </> 
        
           
)

}