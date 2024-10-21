export type FoodItem = {
    _id: string;
    itemnr: number;
    itemName: string;
    itemPrice: number;
    itemUnit: string;
}

export type ReportDTO = {
    sumValue: number,
    itemName: string
}

export type Report = {
    id: string;
    itemName: string;
    description: string;
    quantity: string;
    department: string;
    reportedTime: string;
}
      

export type VerifiedReport = {
    id: string;
    foodItemId: string,
    foodItemName: string,
    quantity: number,
    value: number,
    department: string,
    reportedTime: string
}

