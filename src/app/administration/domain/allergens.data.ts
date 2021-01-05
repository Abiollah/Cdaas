export interface AllergensData{
    allergens_id?: number;
    name?: string;
    code?: string;
    description?: string;
    created_by?: number;
    created_date?: Date;
    
}

export interface AllergensDataCreate{
    allergens_id: number;
    name: string;
    code: string;
    description: string;
    created_by: number;
    created_date?: Date;
   
}   