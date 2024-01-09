import { Pagination } from '@/lib/constants/pagination';
import { UserModel } from '@/lib/models';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

export async function findUserWithEmailAndPassword( email, password) {
  const user = await UserModel.findOne({ email,isDeleted:false }).lean();
  if (user && (await bcrypt.compare(password, user.password))) {
    return { ...user }; 
  }
  return null;
}

export async function findUserForAuth(userId) {
  const user = await UserModel.findOne({ _id: new mongoose.Types.ObjectId(userId),isDeleted:false });
  return user;
}


export async function findUsers(body) {
  return await UserModel.find(body).lean();
}

export async function findUser(body) {
  return await UserModel.findOne(body).lean();
}

export async function findUsersWithPagination(body) {
   let pageNo = Number(body.pageNo) || Pagination.pageNo
   let skip = Number(pageNo) - 1 || Pagination.skip;
   let limit = Number(body.limit) || Pagination.limit;
   skip = skip * limit;
   body.limit = body.limit || 10;
   body.key = body.key || 'createdAt';
   body.value = body.value || '-1';
   var result:any = {};
   var totalCount =  await UserModel.countDocuments(body);
   var users = await UserModel.find(body).limit(body.limit).skip(skip).sort({[body.key]:body.value});
   result.users = users;
   result.meta = { limit: Number(limit), pageNo: Number(pageNo), total: totalCount };
   return result;
}


export async function findUserById( userId) {
  return await UserModel.findOne({isDeleted:false, _id: new mongoose.Types.ObjectId(userId) });
}

export async function findUserByUsername( username) {
  return await UserModel.findOne({ username });
}

export async function findUserByEmail( email) {
  return await UserModel.findOne({ email,isDeleted:false }).lean()
}

export async function updateUserById(id, data) {
  return await UserModel
    .findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      { $set: data },
      { new:true }
    )
}

export async function insertUser(data) {
  // const password = await bcrypt.hash(data.password, 10);
  data.emailToken = await bcrypt.hash(data.firstName, 10);
  const user = await UserModel.create({ ...data });
  return user;
}

export async function updateUserPasswordByOldPassword(
  id,
  oldPassword,
  newPassword
) {
  const user = await UserModel.findOne(new mongoose.Types.ObjectId(id));
  if (!user) return false;
  const matched = await bcrypt.compare(oldPassword, user.password);
  if (!matched) return false;
  const password = await bcrypt.hash(newPassword, 10);
  await UserModel
    .updateOne({ _id:new mongoose.Types.ObjectId(id) }, { $set: { password } });
  return true;
}

export async function UNSAFE_updateUserPassword( id, newPassword) {
  const password = await bcrypt.hash(newPassword, 10);
  await UserModel.updateOne({ _id:new mongoose.Types.ObjectId(id) }, { $set: { password } });
}

export async function aggregateUsers(body) {
  return await UserModel.aggregate(body);
}

