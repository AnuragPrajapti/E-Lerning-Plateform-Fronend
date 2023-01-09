// Reister Page And Api Start

export interface IRegister {
    image :  any;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    cPassword: string;
    phone:  string;
    gender: string;
    age:  string;
    address: string;
    city: string;
    state: string;
    zip:  string;
}

export interface ILoginUser {
    email: string;
    password: string | number;
}

export interface IinitialState {
    registerUser: null | any;
    loginUser: null | any;
    loading: boolean;
    error: boolean;
    message : string;
    updateMessage : string;
    userData : any | [];
    errorMessage : string;
    getUserMessage : string;
    AllUserData : any | [];
    getUserDeleteMessage : string;
    getDeleteErrorMsg : string;
    falseState : boolean;
    loginErrorMessage : null |  any;
}

export interface IAdminData{ 
    address : string | number 
    age : number,
    email : string,
    firstName : string
    gender : string,
    lastName : string,
    phone : number
    data : string;
    }
// Reister Page And Api Start

// Login Page Start

export interface ILoginForm {
    email: string;
    password: string;
    message: string;
    errors: string;
}

// Login Page End

// Admin Auth 
export interface IAuthState{
 adminLogin :  null |any ;
 adminData : any;
 getAdminProfileData : any;
 updateProfileData : any;
 loading : boolean;
 error :  boolean;
 message : string;
 getAdminMessage : string;
 getErrorAdminMessage : string;
}

// type IGetUserData = IAuthState[];

// Users Details Crud Start
  
  export interface IUserForm{
    image :  any;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    cPassword: string;
    phone:  string;
    gender: string;
    age:  string;
    address: string;
    city: string;
    state: string;
    zip:  string;
    errros : string;
  }

// Users Details Crud End