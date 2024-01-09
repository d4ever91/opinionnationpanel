import mongoose from 'mongoose';
import { CategoryModel } from '@/lib/models';


export async function findCategories(body) {
  return await CategoryModel.find(body).lean();
}


export async function findCategoryById( categoryId) {
  return await CategoryModel.findOne({isDeleted:false, _id: new mongoose.Types.ObjectId(categoryId) });
}

export async function findCategory( body) {
  return await CategoryModel.findOne( body );
}

export async function insertCategory(data) {
  const user = await CategoryModel.create({ ...data });
  return user;
}

export async function aggregateCategories(body) {
  return await CategoryModel.aggregate(body);
}

