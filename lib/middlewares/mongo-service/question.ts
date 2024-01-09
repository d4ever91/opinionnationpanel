import { QuestionModel } from '@/lib/models';
import mongoose from 'mongoose';

export async function findQuestionById( moduleId:string) {
  return await QuestionModel.findOne({ _id: new mongoose.Types.ObjectId(moduleId) });
}

export async function findQuestion(data:any) {
  return await QuestionModel.findOne(data)
}

export async function updateQuestionById(id:string, data:any) {
  return await QuestionModel
    .findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      { $set: data },
      { new:true }
    )
}

export async function findQuestions(body) {
  return await QuestionModel.find(body).lean();
}


export async function insertQuestion(
  data:any
) {
  const module = await QuestionModel.create({ ...data });
  return module;
}
