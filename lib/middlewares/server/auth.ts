import { messages } from "@/lib/utils/messages";
import { noAuth, Forbidden } from "@/lib/middlewares/errors/errors";
import jwt from 'jsonwebtoken';
import { getToken } from "next-auth/jwt";
import { NextApiResponse } from "next";
import handleErrors from "@/lib/middlewares/errors/handleErrorsApi";

export async function isValidUser(req: any, res: NextApiResponse, next: any) {
  try {
    const { accessToken }: any = await getToken({ req, secret: process.env.SECRET_KEY });
    if (!accessToken) throw new noAuth(messages.UNAUTHORIZED);
    const decoded = await jwt.verify(accessToken, process.env.SECRET_KEY || '');
    if (!decoded) throw new noAuth(messages.UNAUTHORIZED);
    req.user = decoded;
    next()
  } catch (error) {
    handleErrors(error, res)
  }
};


export async function checkRole(roles = []) {
  return (req,  next) => {
    if (roles.includes(req.user.role)) {
      next();
    }
    else {
      throw new Forbidden(messages.FORBIDDEN);
    }
  }
}


