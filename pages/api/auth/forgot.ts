import { ValidationError } from '@/lib/middlewares/errors/errors';
import handleErrors from '@/lib/middlewares/errors/handleErrorsApi';
import {  findUserByEmail, insertUser, updateUserById } from '@/lib/middlewares/mongo-service';
import { connect } from '@/lib/middlewares/db/mongodb';
import { ncOpts } from '@/lib/middlewares/server';
import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import sendResponse from '@/lib/utils/response';
import statusCode from '@/lib/utils/statusCodes';
import { validateForgot } from '@/lib/middlewares/validation/userValidation';
import { messages } from '@/lib/utils/messages';
import { sendForgetLink } from '@/lib/services/emailService';

const handler = nc(ncOpts);
handler.use(validateForgot);
handler.post( async (req, res) => {
  try {
   await connect();
   var user = await findUserByEmail(req.body.email);
   if(!user)  throw new ValidationError(messages.USER_NOT_EXISTS); 
   if(user && user.emailVerified){
      var forgetToken = await bcrypt.hash(req.body.firstName, 10);
      req.body.forgetToken= forgetToken;
      var userData=await updateUserById(user._id,{ forgetToken });
      await sendForgetLink({ forgetToken:userData.forgotToken,name:userData.firstName+' '+userData.lastName,email:userData.email})
      return sendResponse( req, res , statusCode.SUCCESS,'',messages.USER_EMAIL_INVITE_SEND_SUCCESSFULLY,data)
   }
   var uuid= await uuidv4();
   req.body.uuid=uuid;
   var data = await insertUser(req.body);
   if(user) await sendForgetLink({ forgetToken:data.forgotToken,name:data.firstName+' '+data.lastName,email:data.email });
   return sendResponse( req, res , statusCode.SUCCESS,'',messages.USER_EMAIL_INVITE_SEND_SUCCESSFULLY,data)
  }
  catch (err) {
    handleErrors(err, res);
  }
});
export default handler