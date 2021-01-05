export interface TestgroupData{
    testgroup_id?: number;
    name?: string;
    code?: string;
    description?: string;
    created_by?: number;
    created_date?: Date;
    
}

export interface TestgroupDataCreate{
    testgroup_id: number;
    name: string;
    code: string;
    description: string;
    created_by: number;
    created_date?: Date;
   
}   