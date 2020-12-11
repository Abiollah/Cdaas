export interface GenderData{
    name: string;
    description: string;
    code: number;
    gender_id:number;
    
}

export interface GenderDataCreate{
    name: string;
    description: string;
    code: boolean;
    gender_id: number;
    
}