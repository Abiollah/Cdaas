export interface TestData{
    test_id?: number;
    name?: string;
    code?: string;
    description?: string;
    created_by?: number;
    created_date?: Date;
    
}

export interface TestDataCreate{
    test_id: number;
    name: string;
    code: string;
    description: string;
    created_by: number;
    created_date?: Date;
   
}   