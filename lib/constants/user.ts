export interface User {
  _id?:string,
  firstName?:string,
  lastName?:string,
  company?:string,
  email?: string,
  role?:number;
  module?:string[];
  password?: string,
  isActive?:boolean,
  isDeleted?:boolean,
}

export interface ModulePayload {
  user?:User,
}


