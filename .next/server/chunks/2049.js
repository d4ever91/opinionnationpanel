"use strict";
exports.id = 2049;
exports.ids = [2049];
exports.modules = {

/***/ 2049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ validateLogin),
/* harmony export */   "p": () => (/* binding */ validateRegister)
/* harmony export */ });
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8506);
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_middlewares_errors_handleErrorsApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2156);
/* harmony import */ var _lib_middlewares_errors_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3756);



const sendValidation = async (req, res, schema, next)=>{
    try {
        const { error  } = schema.validate(req.body);
        if (error) {
            throw new _lib_middlewares_errors_errors__WEBPACK_IMPORTED_MODULE_2__/* .ValidationError */ .p8(error.details ? error.details[0].message : "");
        }
        next();
    } catch (error1) {
        (0,_lib_middlewares_errors_handleErrorsApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(error1, res);
    }
};
const validateLogin = async (req, res, next)=>{
    try {
        let schema = joi__WEBPACK_IMPORTED_MODULE_0___default().object().keys({
            email: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),
            password: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required()
        });
        await sendValidation(req, res, schema, next);
    } catch (error) {
        (0,_lib_middlewares_errors_handleErrorsApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(error, res);
    }
};
const validateRegister = async (req, res, next)=>{
    try {
        let schema = joi__WEBPACK_IMPORTED_MODULE_0___default().object().keys({
            firstName: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),
            lastName: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),
            email: joi__WEBPACK_IMPORTED_MODULE_0___default().string().email({
                tlds: {
                    allow: false
                }
            }).required(),
            terms: joi__WEBPACK_IMPORTED_MODULE_0___default().boolean().optional(),
            news: joi__WEBPACK_IMPORTED_MODULE_0___default().boolean().optional(),
            company: joi__WEBPACK_IMPORTED_MODULE_0___default().string().optional().empty(""),
            platform: joi__WEBPACK_IMPORTED_MODULE_0___default().string().optional()
        });
        await sendValidation(req, res, schema, next);
    } catch (error) {
        (0,_lib_middlewares_errors_handleErrorsApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(error, res);
    }
};



/***/ })

};
;