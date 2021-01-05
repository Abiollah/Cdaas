export interface SeverityData{
    severity_id?: number;
    name?: string;
    code?: string;
    description?: string;
    created_by?: number;
    created_date?: Date;
    
}

export interface SeverityDataCreate{
    severity_id: number;
    name: string;
    code: string;
    description: string;
    created_by: number;
    created_date?: Date;
   
}   