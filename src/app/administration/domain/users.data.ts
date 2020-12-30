export interface UserData{
    username?: string;
    password?: string;
    loginstatus?: boolean;
    userid?:number;
    user_type_id?: number;
    created_date?: number;
    
}

/*export interface UserData{
    username: string;
    password: string;
    loginstatus: boolean;
    user_type_id: number;
}*/

export interface UserDataCreate{
    username: string;
    password: string;
    loginstatus: boolean;
    user_type_id: number;
    lastname: string;
    firstname: string;
    othername: string;
    phonenumber: string;
    email: string;
    contactaddress: string;
    operationunitid: number;
}