"use strict";

class GeneralError extends Error {
  constructor(message:string) {
    super();
    this.message = message;
  }

  getCode() {
    if (this instanceof BadRequest) {
      return 400;
    }
    if (this instanceof NotFound) {
      return 404;
    }
    if (this instanceof ValidationError) {
      return 400;
    }
    if (this instanceof noAuth) {
      return 401;
    }
    if (this instanceof Forbidden) {
      return 403;
    }
    return 500;
  }
}

class BadRequest extends GeneralError {}
class NotFound extends GeneralError {}
class ValidationError extends GeneralError {}
class noAuth extends GeneralError {}
class Forbidden extends GeneralError {}

export   { GeneralError, BadRequest,NotFound, ValidationError, noAuth, Forbidden};
