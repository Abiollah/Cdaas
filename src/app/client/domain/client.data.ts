

export interface ClientData{
  client_code?: string;
  dateRegistration?: Date;
  dateBirth?: Date;
  surname?:string;
  firstname?: string;
  otherNames?: string;
  marital_status_id?: string;
  gender_id?: string;
  email?: string;
  address?: string;
  phone_number?: number;
  alt_phone_number?: number;
  occupation_id?: string;
  qualification_id?: string;
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
  registered_date: Date;
  date_of_birth: Date;
  surname:string;
  firstname: string;
  otherNames: string;
  marital_status_id: string;
  gender_id: string;
  email: string;
  address: string;
  phone_number: number;
  alt_phone_number: number;
  occupation_id: string;
  qualification_id: string;
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
