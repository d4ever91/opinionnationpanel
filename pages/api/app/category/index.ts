import nc from 'next-connect';
import { isValidUser } from '@/lib/middlewares/server/auth';
import { ncOpts } from '@/lib/middlewares/server';
import { connect } from '@/lib/middlewares/db/mongodb';
import sendResponse from '@/lib/utils/response';
import statusCode from '@/lib/utils/statusCodes';
import handleErrors from '@/lib/middlewares/errors/handleErrorsApi';
import { aggregateCategories } from '@/lib/middlewares/mongo-service';

const handler = nc(ncOpts);
handler.use(isValidUser);
handler.get(async (req, res) => {
  try {
    await connect();
    var result:any ={};
    var data =  await aggregateCategories([{ $match:{ isDeleted:false }},
      { $lookup:{  from:'profiles',  localField:'_id', foreignField:'category', as:'profile'}},
      { $lookup:{  from:'questions',  localField:'_id', foreignField:'category', as:'question'}},
       { $project:{_id:1,name:1,icon:1,profileCount:{ $size:"$profile"},questionCount:{ $size:"$question"} }},
       { $project:{_id:1,name:1,icon:1,profilePercantage:{ $multiply:[ { $cond: { if: { $eq: [ "$questionCount", 0 ] }, then: 0, else: { $divide: ["$profileCount","$questionCount" ] }} } ,100]}}},
       { $project:{_id:1,name:1,icon:1,profilePercantage:{ $round:["$profilePercantage",0 ]} }}
    ]);
    result.categories = data;
    return sendResponse(req, res, statusCode.SUCCESS, "","", result)
  }
    catch (err) {
      handleErrors(err, res);
    }
});

export default handler