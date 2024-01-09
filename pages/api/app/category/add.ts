import {  isValidUser } from '@/lib/middlewares/server/auth';
import { ncOpts } from '@/lib/middlewares/server';
import nc from 'next-connect';
import { connect } from '@/lib/middlewares/db/mongodb';
import sendResponse from '@/lib/utils/response';
import statusCode from '@/lib/utils/statusCodes';
import handleErrors from '@/lib/middlewares/errors/handleErrorsApi';
import { findCategory, insertCategory } from '@/lib/middlewares/mongo-service';
import { ValidationError } from '@/lib/middlewares/errors/errors';
import { messages } from '@/lib/utils/messages';

const handler = nc(ncOpts);
handler.use(isValidUser);
handler.post(async (req, res) => {
  try {
    await connect();
    var name = await findCategory({name:req.body.name});
    if(name) throw new ValidationError(messages.CATEGORY_EXISTS);
    var category = await insertCategory(req.body);
    return sendResponse(req, res, statusCode.SUCCESS,"/app/category", messages.CATEGORY_CREATED_SUCCESSFULLY, category)
  }
    catch (err) {
      handleErrors(err, res);
    }
});

export default handler