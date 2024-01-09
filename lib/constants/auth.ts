export interface Auth {
  firstName?:string,
  lastName?:string,
  company?:string,
  email: string,
  password?: string,
  provider?:string,
  terms?:boolean,
  news?:boolean,
}

export interface Verification {
  password: string,
  cpassword: string,
}

export interface AuthPayload {
  user?:Auth,
  token?:string,
}

