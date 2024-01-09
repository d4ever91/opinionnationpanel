import mongoose from 'mongoose';
import nc from 'next-connect';
import {  isValidUser } from '@/lib/middlewares/server/auth';
import { ncOpts } from '@/lib/middlewares/server';
import { connect } from '@/lib/middlewares/db/mongodb';
import sendResponse from '@/lib/utils/response';
import statusCode from '@/lib/utils/statusCodes';
import handleErrors from '@/lib/middlewares/errors/handleErrorsApi';
import { insertSurvey } from '@/lib/middlewares/mongo-service';
import { ValidationError } from '@/lib/middlewares/errors/errors';
import { messages } from '@/lib/utils/messages';
import { findSurvey } from '@/lib/middlewares/mongo-service/survey';

const handler = nc(ncOpts);
handler.use(isValidUser);
handler.post(async (req, res) => {
  try {
    await connect();
    var survey = await findSurvey({surveyName:req.body.surveyName ,isDeleted:false});
    if(survey) throw new ValidationError(messages.SURVEY_EXISTS);
    req.body.createdBy = new mongoose.Types.ObjectId(req.user._id);
    var survey = await insertSurvey(req.body);
    return sendResponse(req, res, statusCode.SUCCESS,"/app/survey", messages.SURVEY_ADDED_SUCCESSFULLY, survey)
  }
    catch (err) {
      handleErrors(err, res);
    }
});

export default handler