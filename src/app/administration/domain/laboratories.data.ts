export interface LaboratoriesData{
    facility_id: number;
    name: string;
    code: string;
    description: string;
    contact_phone_number: string;
    created_by: number;
}

export interface LaboratoriesDataCreate{
    facility_id: number;
    name: string;
    code: string;
    description: string;
    contact_phone_number: string;
    created_by: number;
}