import { Time } from '@angular/common';

export interface StatusTypeData{
    name: string;
    description: string;
    status_type_id:number;
    code:string;
    created_by: number;
    created_date: Date;
}

export interface StatusTypeDataCreate{
    name: string;
    description: string;
    status_type_id:number;
    code:string;
    created_by: number;
    created_date: Date;
    
    
}
