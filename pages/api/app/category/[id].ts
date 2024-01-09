import {  isValidUser } from '@/lib/middlewares/server/auth';
import { ncOpts } from '@/lib/middlewares/server';
import nc from 'next-connect';
import { findCategory } from '@/lib/middlewares/mongo-service';
import { connect } from '@/lib/middlewares/db/mongodb';
import sendResponse from '@/lib/utils/response';
import statusCode from '@/lib/utils/statusCodes';
import handleErrors from '@/lib/middlewares/errors/handleErrorsApi';

const handler = nc(ncOpts);
handler.use(isValidUser);
handler.get(async (req, res) => {
  try {
    await connect();
    var category = await findCategory({_id: req.query.id });
    return sendResponse(req, res, statusCode.SUCCESS, "", "", category)
  }
    catch (err) {
      handleErrors(err, res);
    }
});

export default handler