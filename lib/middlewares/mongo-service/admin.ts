import { Pagination } from '@/lib/constants/pagination';
import { AdminModel } from '@/lib/models';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

export async function findAdminWithEmailAndPassword( email, password) {
  const admin = await AdminModel.findOne({ email,isDeleted:false }).lean();
  if (admin && (await bcrypt.compare(password, admin.password))) {
    return { ...admin }; 
  }
  return null;
}

export async function findAdminForAuth(adminId) {
  const admin = await AdminModel.findOne({ _id: new mongoose.Types.ObjectId(adminId),isDeleted:false });
  return admin;
}


export async function findAdmins(body) {
  return await AdminModel.find(body).populate('module').lean();
}

export async function findAdminsWithPagination(body) {
   let pageNo = Number(body.pageNo) || Pagination.pageNo
   let skip = Number(pageNo) - 1 || Pagination.skip;
   let limit = Number(body.limit) || Pagination.limit;
   skip = skip * limit;
   body.limit = body.limit || 10;
   body.key = body.key || 'createdAt';
   body.value = body.value || '-1';
   var result:any = {};
   var totalCount =  await AdminModel.countDocuments(body);
   var admins = await AdminModel.find(body).populate('module').limit(body.limit).skip(skip).sort({[body.key]:body.value});
   result.admins = admins;
   result.meta = { limit: Number(limit), pageNo: Number(pageNo), total: totalCount };
   return result;
}


export async function findAdminById( adminId) {
  return await AdminModel.findOne({isDeleted:false, _id: new mongoose.Types.ObjectId(adminId) }).populate('module');
}

export async function findAdminByAdminname( adminname) {
  return await AdminModel.findOne({ adminname });
}

export async function findAdminByEmail( email) {
  return await AdminModel.findOne({ email,isDeleted:false }).lean()
}

export async function updateAdminById(id, data) {
  return await AdminModel
    .findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      { $set: data },
      { new:true }
    )
}

export async function insertAdmin(data) {
  const password = await bcrypt.hash(data.password, 10);
  const admin = await AdminModel.create({ ...data, password });
  return admin;
}

export async function updateAdminPasswordByOldPassword(
  id,
  oldPassword,
  newPassword
) {
  const admin = await AdminModel.findOne(new mongoose.Types.ObjectId(id));
  if (!admin) return false;
  const matched = await bcrypt.compare(oldPassword, admin.password);
  if (!matched) return false;
  const password = await bcrypt.hash(newPassword, 10);
  await AdminModel
    .updateOne({ _id:new mongoose.Types.ObjectId(id) }, { $set: { password } });
  return true;
}

export async function UNSAFE_updateAdminPassword( id, newPassword) {
  const password = await bcrypt.hash(newPassword, 10);
  await AdminModel.updateOne({ _id:new mongoose.Types.ObjectId(id) }, { $set: { password } });
}

export async function aggregateAdmins(body) {
  return await AdminModel.aggregate(body);
}

