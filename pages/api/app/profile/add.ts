import mongoose from 'mongoose';
import {  isValidUser } from '@/lib/middlewares/server/auth';
import { ncOpts } from '@/lib/middlewares/server';
import nc from 'next-connect';
import { connect } from '@/lib/middlewares/db/mongodb';
import sendResponse from '@/lib/utils/response';
import statusCode from '@/lib/utils/statusCodes';
import handleErrors from '@/lib/middlewares/errors/handleErrorsApi';
import { findUserByEmail, insertUser } from '@/lib/middlewares/mongo-service';
import { ValidationError } from '@/lib/middlewares/errors/errors';
import { messages } from '@/lib/utils/messages';

const handler = nc(ncOpts);
handler.use(isValidUser);
handler.post(async (req, res) => {
  try {
    await connect();
    var email = await findUserByEmail(req.body.email);
    if(email) throw new ValidationError(messages.EMAIL_EXISTS);
    req.body.createdBy = new mongoose.Types.ObjectId(req.user._id);
    var user = await insertUser(req.body);
    return sendResponse(req, res, statusCode.SUCCESS,"/app/user", messages.USER_REGISTER_SUCCESSFULLY, user)
  }
    catch (err) {
      handleErrors(err, res);
    }
});

export default handler