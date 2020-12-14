export interface GenderData{
    gender_id?:number;
    name?: string;
    description?: string;
    code?: number;
    created_by?:number;
}

export interface GenderDataCreate{
    gender_id: number;
    name: string;
    description: string;
    code: boolean;
    created_by:number;
}