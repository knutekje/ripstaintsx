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

export type YearMonthProp = {
    year: number | string,
    month: string
}

export type Report = {
    id: string;
    ItemName: string;
    Description: string;
    Quantity: number;
    FileId: string;
    Department: string;
    ReportedTime: string;
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

