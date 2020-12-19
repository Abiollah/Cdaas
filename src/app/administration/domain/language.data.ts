export interface LanguageData{
    language_id?: number;
    name?: string;
    code?: string;
    description?: string;
    created_by?: number;
    created_date?: number;
    
}

export interface LanguageDataCreate{
    language_id: number;
    name: string;
    code: string;
    description: string;
    created_by: number;
    created_date: number;
    
   
}   