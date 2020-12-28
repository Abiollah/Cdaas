export interface PregnancyData{
    name?: string;
    code?: string;
    description?: string;
    created_by?: number;
    created_date?: Date;
    
}

export interface PregnancyCreate{
    name: string;
    code: string;
    description: string;
    created_by: number;
    created_date?: Date;
   
}   