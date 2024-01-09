import {  SummaryModel } from '@/lib/models';
import mongoose from 'mongoose';

export async function findSummaryById( moduleId:string) {
  return await SummaryModel.findOne({ _id: new mongoose.Types.ObjectId(moduleId) });
}

export async function findSummary(data:any) {
  return await SummaryModel.findOne(data)
}

export async function updateSummaryById(id:string, data:any) {
  return await SummaryModel
    .findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      { $set: data },
      { new:true }
    )
}

export async function findSummarys(body) {
  return await SummaryModel.find(body).lean();
}


export async function insertSummary(
  data:any
) {
  const module = await SummaryModel.create({ ...data });
  return module;
}
