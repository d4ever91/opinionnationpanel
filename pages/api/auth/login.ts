import { ValidationError } from '@/lib/middlewares/errors/errors';
import handleErrors from '@/lib/middlewares/errors/handleErrorsApi';
import { findUserWithEmailAndPassword,updateUserById } from '@/lib/middlewares/mongo-service';
import { connect } from '@/lib/middlewares/db/mongodb';
import { ncOpts } from '@/lib/middlewares/server';
import nc from 'next-connect';
import sendResponse from '@/lib/utils/response';
import statusCode from '@/lib/utils/statusCodes';
import jwt from "jsonwebtoken"
import { signIn } from 'next-auth/react';
import { messages } from '@/lib/utils/messages';
import { validateLogin } from '@/lib/middlewares/validation/userValidation';

const handler = nc(ncOpts);
handler.use(validateLogin);
handler.post(async (req, res) => {
  try {
    await connect();
    var result: any = {};
    var user = await findUserWithEmailAndPassword(req.body.email, req.body.password);
    if (!user || !user.emailVerified) throw new ValidationError(messages.INVALID_EMAIL_OR_PASSWORD);
    const token = await jwt.sign(user, process.env.JWT_SECRET || '', { expiresIn: "7d" });
     await updateUserById(user._id, { lastLogin:new Date() });
     await signIn('credentials', {
      redirect: false,
      email: user.email,
      password: user.password,
    })
    result.token = token;
    result.user = user;
    return sendResponse(req, res, statusCode.SUCCESS,'', messages.USER_SIGNED_IN_SUCCESSFULLY, result)
  }
  catch (err) {
    handleErrors(err, res);
  }
});
export default handler