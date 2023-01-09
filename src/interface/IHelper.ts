export interface UserMenuType{
    title:string,
    icon: any,
    route:string,
    color:null   | string
}

export interface IHelper{
    userMenu:UserMenuType[]
    adminMenu:UserMenuType[]
}