import { Time } from '@angular/common';

export interface MaritalStatusData{
    name: string;
    description: string;
    code: string;
    maritalStatus_id:number;
    created_by: number;
   // created_date: Date;
    
}

export interface MaritalStatusDataCreate{
    name: string;
    description: string;
    code: string;
    maritalStatus_id: number;
    created_by: number;
   // created_date: Date;
    
}