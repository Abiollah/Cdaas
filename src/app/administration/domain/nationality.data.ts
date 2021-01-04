<<<<<<< HEAD
import { Time } from '@angular/common';

export interface NationalityData{
    name: string;
    description: string;
    code: string;
    nationality_id:number;
    created_by: number;
    created_date: Date;
    
}
=======
export interface NationalityData{
    nationality_id?: number;
    name?: string;
    code?: string;
    description?: string;
    created_by?: number;
    created_date?: number;
    
}

export interface NationalityDataCreate{
    nationality_id: number;
    name: string;
    code: string;
    description: string;
    created_by: number;
    created_date: number;
    
   
}   
>>>>>>> 265c9420503ddc683af487c8c5c4da58d0401b19
