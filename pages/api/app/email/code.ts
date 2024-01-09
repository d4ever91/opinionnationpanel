import nc from 'next-connect';
import { isValidUser } from '@/lib/middlewares/server/auth';
import { ncOpts } from '@/lib/middlewares/server';
import { connect } from '@/lib/middlewares/db/mongodb';
import sendResponse from '@/lib/utils/response';
import statusCode from '@/lib/utils/statusCodes';
import handleErrors from '@/lib/middlewares/errors/handleErrorsApi';
import { findUser } from '@/lib/middlewares/mongo-service';
import { NotFound } from '@/lib/middlewares/errors/errors';
import { messages } from '@/lib/utils/messages';

const handler = nc(ncOpts);
// handler.use(isValidUser);
handler.get(async (req, res) => {
  try {
    await connect();
    var user= await findUser({emailToken:req.params.token});
    if(!user) throw new NotFound(messages.TOKEN_INVALID);
    return sendResponse(req, res, statusCode.SUCCESS, "","", user)
  }
    catch (err) {
      handleErrors(err, res);
    }
});

export default handler