import { Time } from '@angular/common';

export interface RelationshipData{
    name: string;
    description: string;
    code: string;
    relationship_id:number;
    created_by: number;
   // created_date: Date;
    
}

export interface RelationshipDataCreate{
    name: string;
    description: string;
    code: string;
    relationship_id: number;
    created_by: number;
   // created_date: Date;
    
}