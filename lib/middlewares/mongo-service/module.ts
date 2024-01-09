import { ModuleModel } from '@/lib/models';
import mongoose from 'mongoose';

export async function findModuleById( moduleId:string) {
  return await ModuleModel.findOne({ _id: new mongoose.Types.ObjectId(moduleId) });
}

export async function findModule(data:any) {
  return await ModuleModel.findOne(data)
}

export async function updateModuleById(id:string, data:any) {
  return await ModuleModel
    .findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      { $set: data },
      { new:true }
    )
}

export async function findModules(body) {
  return await ModuleModel.find(body).lean();
}


export async function insertModule(
  data:any
) {
  const module = await ModuleModel.create({ ...data });
  return module;
}
