export interface QualificationData{
    qualification_id: number;
    name: string;
    code: string;
    description: string;
    created_by: number;
    created_date: Date;
    
}

export interface QualificationDataCreate{
    qualification_id: number;
    name: string;
    code: string;
    description: string;
    created_by: Date;
   
}   