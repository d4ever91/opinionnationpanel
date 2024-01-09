import nc from 'next-connect';
import { isValidUser } from '@/lib/middlewares/server/auth';
import { ncOpts } from '@/lib/middlewares/server';
import { findCountries } from '@/lib/middlewares/mongo-service';
import { connect } from '@/lib/middlewares/db/mongodb';
import sendResponse from '@/lib/utils/response';
import statusCode from '@/lib/utils/statusCodes';
import handleErrors from '@/lib/middlewares/errors/handleErrorsApi';

const handler = nc(ncOpts);
handler.use(isValidUser);
handler.get(async (req, res) => {
  try {
    await connect();
    var result:any ={};
    var data =  await findCountries({ isDeleted:false});
    result.countries = data;
    return sendResponse(req, res, statusCode.SUCCESS, "","", result)
  }
    catch (err) {
      handleErrors(err, res);
    }
});

export default handler