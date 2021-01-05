export interface TbstatusData{
    Tbstatus_id?: number;
    name?: string;
    code?: string;
    description?: string;
    created_by?: number;
    created_date?: Date;
    
}

export interface TbstatusDataCreate{
    Tbstatus_id: number;
    name: string;
    code: string;
    description: string;
    created_by: number;
    created_date?: Date;
   
}   