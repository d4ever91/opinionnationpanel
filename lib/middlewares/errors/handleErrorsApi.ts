
import type {  NextApiResponse } from 'next'
import { GeneralError } from "./errors";

const handleErrors = (err:Error, res:NextApiResponse) => {
  if (err instanceof GeneralError) {
    return res.status(err.getCode()).json({
      code: err.getCode(),
      status: "error",
      message: err.message,
    });
  }

  return res.status(500).json({
    code: 500,
    status: "error",
    message: err.message,
  });
};

export default handleErrors;
