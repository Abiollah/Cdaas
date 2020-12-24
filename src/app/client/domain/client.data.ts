export interface ClientData{
  client_code?: string;
  registration_date?: number;
  date_of_birth?: number;
  surname?:string;
  first_name?: string;
  other_name?: string;
  marital_status?: string;
  gender?: string;
  email_address?: string;
  address?: string;
  phone_number?: number;
  alt_phone_number?: number;
  occupation?: string;
  qualification?: string;
  facility_name?: string;
  facility_id?: number;
  referred_from?: string;
  nationality?: string;
  state_of_origin?: string;
  lga?: string;
  created_by?: number;
  next_of_kin_surname?: string;
  next_of_kin_firstname?: string;
  next_of_kin_othername?: string;
  next_of_kin_gender?: string;
  next_of_kin_phone_number?: number;
  next_of_kin_alt_phone_number?: number;
  next_of_kin_address?: string;
  next_of_kin_relationship?: string;
  next_of_kin_occupation?: string;


}

export interface ClientDataCreate{
  client_code: string;
  registration_date: number;
  date_of_birth: number;
  surname:string;
  first_name: string;
  other_name: string;
  marital_status: string;
  gender: string;
  email_address: string;
  address: string;
  phone_number: number;
  alt_phone_number: number;
  occupation: string;
  qualification: string;
  facility_name: string;
  referred_from: string;
  nationality: string;
  state_of_origin: string;
  lga: string;
  created_by: number;
  next_of_kin_surname: string;
  next_of_kin_firstname: string;
  next_of_kin_othername: string;
  next_of_kin_gender: string;
  next_of_kin_phone_number: number;
  next_of_kin_alt_phone_number: number;
  next_of_kin_address: string;
  next_of_kin_relationship: string;
  next_of_kin_occupation: string;

}
