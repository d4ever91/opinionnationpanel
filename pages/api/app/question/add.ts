import mongoose from 'mongoose';
import nc from 'next-connect';
import {  isValidUser } from '@/lib/middlewares/server/auth';
import { ncOpts } from '@/lib/middlewares/server';
import { connect } from '@/lib/middlewares/db/mongodb';
import sendResponse from '@/lib/utils/response';
import statusCode from '@/lib/utils/statusCodes';
import handleErrors from '@/lib/middlewares/errors/handleErrorsApi';
import { ValidationError } from '@/lib/middlewares/errors/errors';
import { messages } from '@/lib/utils/messages';
import { findQuestion, insertQuestion } from '@/lib/middlewares/mongo-service/question';

const handler = nc(ncOpts);
handler.post(async (req, res) => {
  try {
    await connect();
    var survey = await findQuestion({ questionName:req.body.questionName ,isDeleted:false});
    if(survey) throw new ValidationError(messages.SURVEY_EXISTS);
    var questionOp = [];
    req.body.questionOption.map(ques=> questionOp.push({optionId:new mongoose.Types.ObjectId() ,title:ques }))
    req.body.questionOption = questionOp;
    var survey = await insertQuestion(req.body);
    return sendResponse(req, res, statusCode.SUCCESS,"/app/question", messages.SURVEY_ADDED_SUCCESSFULLY, survey)
  }
    catch (err) {
      handleErrors(err, res);
    }
});

export default handler