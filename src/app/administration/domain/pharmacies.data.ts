export interface PharmaciesData{
    pharmacy_id: number;
    name: string;
    code: string;
    description: string;
    contact_phone_number: string;
    created_by: number;
    created_date: Date;
   
}

export interface PharmaciesDataCreate{
    pharmacy_id: number;
    name: string;
    code: string;
    description: string;
    contact_phone_number: string;
    created_by: number;
    created_date: Date;
}