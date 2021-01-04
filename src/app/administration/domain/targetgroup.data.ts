export interface TargetGroupData{
    target_group_id?: number;
    name?: string;
    code?: string;
    description?: string;
    created_by?: number;
    created_date?: Date;
    
    
}

export interface TargetGroupDataCreate{
    target_group_id: number;
    name: string;
    code: string;
    description: string;
    created_by: number;
    created_date: Date;
    
   
}   