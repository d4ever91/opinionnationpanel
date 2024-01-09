import {  isValidUser } from '@/lib/middlewares/server/auth';
import { ncOpts } from '@/lib/middlewares/server';
import nc from 'next-connect';
import { connect } from '@/lib/middlewares/db/mongodb';
import sendResponse from '@/lib/utils/response';
import statusCode from '@/lib/utils/statusCodes';
import handleErrors from '@/lib/middlewares/errors/handleErrorsApi';
import { updateUserById } from '@/lib/middlewares/mongo-service';
import { messages } from '@/lib/utils/messages';

const handler = nc(ncOpts);
handler.use(isValidUser);
handler.delete(async (req, res) => {
  try {
    await connect();
    var user = await updateUserById(req.query.id ,{ isDeleted:true});
    return sendResponse(req, res, statusCode.SUCCESS, "", messages.USER_DELETED_SUCCESSFULLY, user)
  }
    catch (err) {
      handleErrors(err, res);
    }
});

export default handler