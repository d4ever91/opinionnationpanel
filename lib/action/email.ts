import nodepress from '@/lib/services/nodepress'
import { Contact } from '@/pages/contact';
import { User } from '../constants/user';

export const COUNTRY_API_PATH = {
  SEND: '/app/email',
  VERIFICATION: '/app/email/code',
}
export  function sendEmail( body:Contact) {
    return nodepress.post<Contact>(COUNTRY_API_PATH.SEND, body).then((response) => response.result);
  }

  export  function sendEmailVerification( body:any) {
    return nodepress.post<User>(COUNTRY_API_PATH.VERIFICATION, body).then((response) => response.result);
  }

