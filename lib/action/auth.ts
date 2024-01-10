import { Auth } from '@/lib/constants/auth'
import nodepress from '@/lib/services/nodepress'

export const AUTH_API_PATH = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  FORGOT: '/auth/forgot',
  CHECK_TOKEN: '/auth/check',
  RENEWAL_TOKEN: '/auth/renewal',
  ADMIN: '/auth/admin',
}
export interface TokenResult {
  access_token: string
  expires_in: number
}

export  function authLogin( body:Auth) {
   return nodepress.post<Auth>(AUTH_API_PATH.LOGIN, body).then((response) => response.result);
}

export function authRegister(body: Auth) {
  return nodepress.post<Auth>(AUTH_API_PATH.REGISTER,body).then((response) => response.result)
}

export function authForget(body: Auth) {
  return nodepress.post<Auth>(AUTH_API_PATH.FORGOT,body).then((response) => response.result)
}

export function getAdminInfo() {
  return nodepress.get<Auth>(AUTH_API_PATH.ADMIN).then((response) => response.result)
}


export function checkTokenValidity() {
  return nodepress.post<void>(AUTH_API_PATH.CHECK_TOKEN).then((response) => response.result)
}

export function renewalToken() {
  return nodepress.post<TokenResult>(AUTH_API_PATH.RENEWAL_TOKEN).then((response) => response.result)
}
