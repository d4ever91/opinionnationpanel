import { Pagination } from '@/lib/constants/pagination';
import { CountryModel, SurveyModel,  UserModel } from '@/lib/models';
import { SurveyStatus } from '@/lib/constants/survey';
import mongoose from 'mongoose';


export async function findSurveys(body) {
  return await SurveyModel.find(body).lean();
}

export async function findSurvey( body) {
  return await SurveyModel.findOne(body);
}

export async function findSurveysWithPagination(body) {
   let pageNo = Number(body.pageNo) || Pagination.pageNo
   let skip = Number(pageNo) - 1 || Pagination.skip;
   let limit = Number(body.limit) || Pagination.limit;
   skip = skip * limit;
   body.key = body.key|| 'createdAt';
   body.value = body.value|| -1;
   var result:any = {};
   var countries =  await CountryModel.aggregate([{ $match:{ isDeleted:false }},{ $lookup :{ from:"surveys",localField:"_id",foreignField:"country",as:"survey" } },{ $unwind:"$survey" },
  { $group:{ _id:"$_id",name:{ $first:"$name" },count:{ $sum: 1 }}}
  ]);
  var users =  await UserModel.aggregate([{ $match:{ isDeleted:false }},{ $lookup :{ from:"surveys",localField:"_id",foreignField:"user",as:"survey" } },{ $unwind:"$survey" },
  { $group:{ _id:"$_id",email:{ $first:"$email" },count:{ $sum: 1 }}}
  ]);
  var statuses =  await SurveyModel.aggregate([{ $match:{ isDeleted:false }},
  { $group:{ _id:"$status",value:{ $first:"$status" },count:{ $sum: 1 }}}
  ]);
   var totalCount =  await SurveyModel.countDocuments(body.qry);
   var surveys = await SurveyModel.aggregate([{ $match : body.qry },{ $sort: { [body.key] : body.value } },
    { $skip: skip },{ $limit: limit },
    { $lookup :{ from:"countries",localField:"country",foreignField:"_id",as:"country" }},{ $unwind:"$country"},
    { $lookup :{ from:"categories",localField:"category",foreignField:"_id",as:"category" }},{$unwind:"$category"},
    { $lookup :{ from:"users",localField:"user",foreignField:"_id",as:"user" }},{ $unwind:"$user" },
    { $lookup :{ from:"summaries",localField:"_id",foreignField:"surveyId",as:"summary" } },
    { $project:{ surveyCode:1,surveyName:1,loi:1,cpi:1,cost:1,conversion:1,user:"$user.email",category:"$category.name",country:"$country.name",countryCode:"$country.code",status:1,requiredCompletes:1, complete:{ $size:"$summary"} }},
   ]);

   var statusdata = statuses.filter(statuss => statuss.label =  SurveyStatus.find(surveystatus =>  surveystatus.value == statuss.value ).label);
   result.surveys = surveys;
   result.statuses = statusdata;
   result.countries = countries;
   result.users = users;
   result.meta = { limit: Number(limit), pageNo: Number(pageNo), total: totalCount };
   return result;
}


export async function findSurveyById( userId) {
  return await SurveyModel.findOne({isDeleted:false, _id: new mongoose.Types.ObjectId(userId) });
}

export async function updateSurveyById(id, data) {
  return await SurveyModel
    .findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      { $set: data },
      { new:true }
    )
}

export async function insertSurvey(data) {
  const user = await SurveyModel.create({ ...data });
  return user;
}

export async function aggregateSurveys(body) {
  return await SurveyModel.aggregate(body);
}

