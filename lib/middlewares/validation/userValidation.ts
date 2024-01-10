import joi from 'joi';
import handleErrors from '@/lib/middlewares/errors/handleErrorsApi';
import {  ValidationError } from '@/lib/middlewares/errors/errors';

const sendValidation = async (req,res, schema, next) => {
  try {
    const { error } = schema.validate(req.body);
    if (error) {
      throw new ValidationError(error.details ? error.details[0].message : "");
    }
    next();
  }
  catch (error) {
    handleErrors(error,res);
  }
};


const validateLogin = async (req, res, next) => {
  try {
    let schema = joi.object().keys({
      email: joi.string().required(),
      password: joi.string().required(),
    });
    await sendValidation(req,res, schema, next);
  } catch (error) {
    handleErrors(error,res);
  }
};

const validateRegister = async (req, res, next) => {
    try {
      let schema = joi.object().keys({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        email: joi.string().email({ tlds: { allow: false } }).required(),
        terms:joi.boolean().optional(),
        news:joi.boolean().optional(),
        company: joi.string().optional().empty(''),
        platform: joi.string().optional(),
      });
      await sendValidation(req,res, schema, next);
    } catch (error) {
    handleErrors(error,res);
    }
  };

  const validateForgot = async (req, res, next) => {
    try {
      let schema = joi.object().keys({
        email: joi.string().email({ tlds: { allow: false } }).required(),
      });
      await sendValidation(req,res, schema, next);
    } catch (error) {
    handleErrors(error,res);
    }
  };
  

export  { validateForgot , validateLogin ,validateRegister };
