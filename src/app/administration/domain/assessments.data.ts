export interface AssessmentType{
    name: string;
    description: string;
    code: string;
    flag: string;
    assessment_type_id:number;
    created_by: number;
    created_date: number;
}

export interface AssessmentQuestions{
    assessment_type_id: number;
    assessment_question_id: number;
    name:string;
    description:string;
    created_by: number;
    created_date: number;
    default_response: boolean;
    assessmentType: AssessmentType;

}

export interface AssessmentResponses{
    client_code: string;
    assessment_question_id: number;
    value:number;
    created_by: number;
    created_date: number;

}