export type FoodItem = {
    _id: string;
    itemnr: number;
    itemName: string;
    itemPrice: number;
    itemUnit: string;
}

export type Report = {
    id: string;
    itemName: string;
    description: string;
    quantity: string;
    reportedTime: string;
}
      

export type VerifiedReport = {
    _id: number;
    foodItem: object;
    quantity: number;
    value: number;
    reportedTime: string;
  
}

