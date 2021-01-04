export interface EnrollmentSettingData{
    name?: string;
    code?: string;
    description?: string;
    created_by?: number;
    created_date?: Date;
    
}

export interface EnrollmentSettingDataCreate{
    name: string;
    code: string;
    description: string;
    created_by: number;
    created_date?: Date;
   
}   