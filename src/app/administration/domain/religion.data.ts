export interface ReligionData{
  religion_id?: number;
  name?: string;
  description?: string;
  code?: string;
  created_date?: number;
  created_by?: number;


}

export interface ReligionDataCreate{
  name: string;
  description: string;
  code: string;
  religion_id: number;
  created_date: number;
  created_by: number;

}
