import nc from 'next-connect';
import { isValidUser } from '@/lib/middlewares/server/auth';
import { ncOpts } from '@/lib/middlewares/server';
import { connect } from '@/lib/middlewares/db/mongodb';
import sendResponse from '@/lib/utils/response';
import statusCode from '@/lib/utils/statusCodes';
import handleErrors from '@/lib/middlewares/errors/handleErrorsApi';
import { findSurveysWithPagination, findSurveys } from '@/lib/middlewares/mongo-service';
import mongoose from 'mongoose';

const handler = nc(ncOpts);
handler.use(isValidUser);

handler.post(async (req, res) => {
  try {
    await connect();
    var qry:any= { isDeleted:false, createdBy: new mongoose.Types.ObjectId(req.user._id)  };
    if(req.body.search) {
      qry.$or = [
        { surveyName: { $regex: `${req.body.search}`, $options: 'si' } },
      ];
    }
    if(req.body.user){  qry.user = new mongoose.Types.ObjectId(req.body.user) }
    if(req.body.country){  qry.country = new mongoose.Types.ObjectId(req.body.country) }
    if(req.body.status){  qry.status = Number(req.body.status) }
    req.body.qry =qry;
    var result = await findSurveysWithPagination(req.body);
    return sendResponse(req, res, statusCode.SUCCESS, "", "", result)
  }
    catch (err) {
      handleErrors(err, res);
    }
});

handler.get(async (req, res) => {
  try {
    await connect();
    var result:any ={};
    var users = await findSurveys({ isDeleted:false });
    result.users = users;
    return sendResponse(req, res, statusCode.SUCCESS, "", "", result)
  }
    catch (err) {
      handleErrors(err, res);
    }
});

export default handler