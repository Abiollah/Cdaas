export interface RefferedfromData{
    name?: string;
    code?: string;
    description?: string;
    created_by?: number;
    created_date?: Date;
    
}

export interface RefferedfromCreate{
    name: string;
    code: string;
    description: string;
    created_by: number;
    created_date?: Date;
   
}   