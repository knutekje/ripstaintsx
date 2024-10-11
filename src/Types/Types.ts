export type FoodItem = {
    _id: number;
    itemnr: number;
    itemName: string;
    itemPrice: number;
    itemUnit: string;
}

export type Report = {
    _id: number;
    title: string;
    description: string;
    status: boolean;
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

