export interface AllergiesData{
    allergies_id: number;
    name: string;
    code: string;
    description: string;
    created_by: number;
    created_date: number;
    
}

export interface AllergensData{
    allergens_id?: number;
    name?: string;
    code?: string;
    description?: string;
    created_by?: number;
    created_date?: Date;
    
}

export interface SeverityData{
    severity_id: number;
    name: string;
    code: string;
    description: string;
    created_by: number;
    created_date: Date;
    
}

