"use strict";
exports.id = 3796;
exports.ids = [3796];
exports.modules = {

/***/ 3756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BZ": () => (/* binding */ noAuth),
/* harmony export */   "TX": () => (/* binding */ NotFound),
/* harmony export */   "aE": () => (/* binding */ GeneralError),
/* harmony export */   "p8": () => (/* binding */ ValidationError)
/* harmony export */ });
/* unused harmony exports BadRequest, Forbidden */

class GeneralError extends Error {
    constructor(message){
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
class BadRequest extends GeneralError {
}
class NotFound extends GeneralError {
}
class ValidationError extends GeneralError {
}
class noAuth extends GeneralError {
}
class Forbidden extends GeneralError {
}



/***/ }),

/***/ 2156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3756);

const handleErrors = (err, res)=>{
    if (err instanceof _errors__WEBPACK_IMPORTED_MODULE_0__/* .GeneralError */ .aE) {
        return res.status(err.getCode()).json({
            code: err.getCode(),
            status: "error",
            message: err.message
        });
    }
    return res.status(500).json({
        code: 500,
        status: "error",
        message: err.message
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleErrors);


/***/ }),

/***/ 9848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* reexport */ ncOpts)
});

// UNUSED EXPORTS: validateBody

// EXTERNAL MODULE: external "ajv"
var external_ajv_ = __webpack_require__(5888);
;// CONCATENATED MODULE: ./lib/middlewares/server/ajv.ts

function validateBody(schema) {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    return (req, res, next)=>{
        const valid = validate(req.body);
        if (valid) {
            return next();
        } else {
            const error = validate.errors[0];
            return res.status(400).json({
                error: {
                    message: `"${error.instancePath.substring(1)}" ${error.message}`
                }
            });
        }
    };
}

;// CONCATENATED MODULE: ./lib/middlewares/server/nc.ts
const ncOpts = {
    onError (err, req, res) {
        res.statusCode = err.status && err.status >= 100 && err.status < 600 ? err.status : 500;
        res.status(err.status).json({
            message: err.message
        });
    }
};

;// CONCATENATED MODULE: ./lib/middlewares/server/index.ts




/***/ }),

/***/ 4027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sendResponse = async (req, res, code, redirect = "", message = "", data)=>{
    try {
        return res.status(code).send({
            code: code,
            status: "Success",
            message: message,
            redirect: redirect,
            result: data
        });
    } catch (error) {
        throw error;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendResponse);


/***/ }),

/***/ 8458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const statusCode = {
    CONTINUE: 210,
    SWITCHING_PROTOCOLS: 201,
    PROCESSING: 202,
    SUCCESS: 200,
    CREATED: 203,
    UNAUTHORIZED: 401,
    FORBIDDEN: 401,
    ACCESS_NOT_ALLOWED: 403,
    NOT_FOUND: 205,
    RUNDOWN_ERROR: 212,
    EMPTY_DATA: 212,
    NOT_ACCEPTABLE: 206,
    CONFLICT: 207,
    BAD_REQUEST: 400,
    UNPROCESSABLE_ENTITY: 209,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIME_OUT: 504
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (statusCode);


/***/ })

};
;