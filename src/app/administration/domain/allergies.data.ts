export interface AllergiesData{
    allergies_id?: number;
    name?: string;
    code?: string;
    description?: string;
    created_by?: number;
    created_date?: number;
    
}

export interface AllergiesDataCreate{
    allergies_id: number;
    name: string;
    code: string;
    description: string;
    created_by: number;
    created_date?: number;
   
}   