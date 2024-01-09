import nc from 'next-connect';
import { isValidUser } from '@/lib/middlewares/server/auth';
import { ncOpts } from '@/lib/middlewares/server';
import { connect } from '@/lib/middlewares/db/mongodb';
import sendResponse from '@/lib/utils/response';
import statusCode from '@/lib/utils/statusCodes';
import handleErrors from '@/lib/middlewares/errors/handleErrorsApi';
import { sendInblue } from '@/lib/services/emailService'

const handler = nc(ncOpts);
// handler.use(isValidUser);
handler.post(async (req, res) => {
  try {
    await connect();
    var result:any ={};
    await sendInblue(req.body);
    return sendResponse(req, res, statusCode.SUCCESS, "","Email send successfully", result)
  }
    catch (err) {
      handleErrors(err, res);
    }
});

export default handler