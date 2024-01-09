import {  isValidUser } from '@/lib/middlewares/server/auth';
import { ncOpts } from '@/lib/middlewares/server';
import nc from 'next-connect';
import { connect } from '@/lib/middlewares/db/mongodb';
import sendResponse from '@/lib/utils/response';
import statusCode from '@/lib/utils/statusCodes';
import handleErrors from '@/lib/middlewares/errors/handleErrorsApi';
import ProfileModel from '@/lib/models/profile';

const handler = nc(ncOpts);
handler.use(isValidUser);
handler.post(async (req, res) => {
  try {
    await connect();
    await ProfileModel.deleteMany({ category:req.query.id });
    var questions = await ProfileModel.create(req.body.data);
    return sendResponse(req, res, statusCode.SUCCESS, "/app/profile", "", questions)
  }
    catch (err) {
      handleErrors(err, res);
    }
});

export default handler