import { useQuery } from "@tanstack/react-query";
import { Select, Spinner } from "@chakra-ui/react";
import { url } from "../App";
import { FoodItem } from "../Types/Types";
import { memo } from "react";
interface Props {
  handleNameSubmit: (foodItem: FoodItem) => void;
}

export function ItemDropDown({ handleNameSubmit }: Props) {
  const { data: fooditems, isLoading } = useQuery<FoodItem[]>({
    queryKey: ["fooditems"],
    queryFn: async () => {
      try {
        const res = await fetch(url + "/FoodItem");
        const data = await res.json();
        console.log(data);
        return data;
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
        <Select placeholder="Select option">
          {fooditems?.map((fooditem) => (
            <option
              onClick={() => handleNameSubmit(fooditem)}
              id={fooditem._id}
              value={fooditem._id}
            >
              {" "}
              {fooditem.itemnr}:{fooditem.itemName}:{fooditem.itemPrice}
            </option>
          ))}
        </Select>
      )}
    </>
  );
}
export default memo(ItemDropDown);
