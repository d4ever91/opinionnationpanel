import { BASE_PATH } from "../config/config";


const SibApiV3Sdk = require('sib-api-v3-sdk');
SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.SENDINBLUE_API_KEY;
var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
export const sendInblue = (input) => {
  const msg = {
    sender: { email:process.env.FROM_EMAIL, name: process.env.FROM_NAME },
    to: [{ name: process.env.FROM_NAME, email:  process.env.FROM_EMAIL }],
    subject: "Opinion Nation",
    htmlContent: `Name : ${input.name} <br/> Email : ${input.email}<br/> Subject : ${input.subject}<br/> Message : ${input.message}`,
};
  apiInstance.sendTransacEmail(msg).then(function(data) {
      return true;
    }, function(error) {
      return false;
    });
}

export const sendVerificationLink = (input) => {
  const msg = {
    sender: { email:process.env.FROM_EMAIL, name: process.env.FROM_NAME },
    to: [{ name: input.name, email:  input.email }],
    subject: "Opinion Nation Verification Link",
    htmlContent: `Hi ${input.name} , <br/> <br/> Here is the verification link for registration . <br/> <br/> ${BASE_PATH}/auth/verification?token=${input.emailToken}`,
};
console.log(msg)
  apiInstance.sendTransacEmail(msg).then(function(data) {
      return true;
    }, function(error) {
      return false;
    });
}