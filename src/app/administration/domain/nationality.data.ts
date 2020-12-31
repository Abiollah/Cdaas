export interface NationalityData{
    nationality_id?: number;
    name?: string;
    code?: string;
    description?: string;
    created_by?: number;
    created_date?: number;
    
}

export interface NationalityDataCreate{
    nationality_id: number;
    name: string;
    code: string;
    description: string;
    created_by: number;
    created_date: number;
    
   
}   