import nc from 'next-connect';
import {  isValidUser } from '@/lib/middlewares/server/auth';
import { ncOpts } from '@/lib/middlewares/server';
import bcrypt from 'bcryptjs';
import { connect } from '@/lib/middlewares/db/mongodb';
import sendResponse from '@/lib/utils/response';
import statusCode from '@/lib/utils/statusCodes';
import handleErrors from '@/lib/middlewares/errors/handleErrorsApi';
import { updateUserById } from '@/lib/middlewares/mongo-service';
import { messages } from '@/lib/utils/messages';

const handler = nc(ncOpts);
handler.use(isValidUser);
handler.put(async (req, res) => {
  try {
    await connect();
    if(req.body.password) req.body.password = await bcrypt.hash( req.body.password, 10);
    var user = await updateUserById(req.query.id , req.body);
    return sendResponse(req, res, statusCode.SUCCESS, "/app/user", messages.USER_UPDATED_SUCCESSFULLY, user)
  }
    catch (err) {
      handleErrors(err, res);
    }
});

export default handler