"use strict";
(() => {
var exports = {};
exports.id = 7929;
exports.ids = [7929];
exports.modules = {

/***/ 5888:
/***/ ((module) => {

module.exports = require("ajv");

/***/ }),

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 8506:
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5711:
/***/ ((module) => {

module.exports = require("sib-api-v3-sdk");

/***/ }),

/***/ 5611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 3469:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_middlewares_errors_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3756);
/* harmony import */ var _lib_middlewares_errors_handleErrorsApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2156);
/* harmony import */ var _lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(880);
/* harmony import */ var _lib_middlewares_db_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(902);
/* harmony import */ var _lib_middlewares_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9848);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5616);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6555);
/* harmony import */ var _lib_utils_response__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4027);
/* harmony import */ var _lib_utils_statusCodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8458);
/* harmony import */ var _lib_middlewares_validation_userValidation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2049);
/* harmony import */ var _lib_utils_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6996);
/* harmony import */ var _lib_services_emailService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6708);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_2__, next_connect__WEBPACK_IMPORTED_MODULE_5__, uuid__WEBPACK_IMPORTED_MODULE_7__]);
([_lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_2__, next_connect__WEBPACK_IMPORTED_MODULE_5__, uuid__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_5__["default"])(_lib_middlewares_server__WEBPACK_IMPORTED_MODULE_4__/* .ncOpts */ .z);
handler.use(_lib_middlewares_validation_userValidation__WEBPACK_IMPORTED_MODULE_9__/* .validateForgot */ .Lq);
handler.post(async (req, res)=>{
    try {
        await (0,_lib_middlewares_db_mongodb__WEBPACK_IMPORTED_MODULE_3__/* .connect */ .$j)();
        var user = await (0,_lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_2__/* .findUserByEmail */ .GY)(req.body.email);
        if (!user) throw new _lib_middlewares_errors_errors__WEBPACK_IMPORTED_MODULE_0__/* .ValidationError */ .p8(_lib_utils_messages__WEBPACK_IMPORTED_MODULE_10__/* .messages.USER_NOT_EXISTS */ .s.USER_NOT_EXISTS);
        if (user && user.emailVerified) {
            var forgotToken = await bcryptjs__WEBPACK_IMPORTED_MODULE_6___default().hash(req.body.email, 10);
            req.body.forgotToken = forgotToken;
            var userData = await (0,_lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_2__/* .updateUserById */ .TP)(user._id, {
                forgotToken
            });
            console.log(userData);
            await (0,_lib_services_emailService__WEBPACK_IMPORTED_MODULE_11__/* .sendForgetLink */ .NN)({
                forgotToken: userData.forgotToken,
                name: userData.firstName + " " + userData.lastName,
                email: userData.email
            });
            return (0,_lib_utils_response__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(req, res, _lib_utils_statusCodes__WEBPACK_IMPORTED_MODULE_8__/* ["default"].SUCCESS */ .Z.SUCCESS, "", _lib_utils_messages__WEBPACK_IMPORTED_MODULE_10__/* .messages.USER_EMAIL_INVITE_SEND_SUCCESSFULLY */ .s.USER_EMAIL_INVITE_SEND_SUCCESSFULLY, data);
        }
        var uuid = await (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)();
        req.body.uuid = uuid;
        var data = await (0,_lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_2__/* .insertUser */ ._Y)(req.body);
        if (user) await (0,_lib_services_emailService__WEBPACK_IMPORTED_MODULE_11__/* .sendForgetLink */ .NN)({
            forgotToken: data.forgotToken,
            name: data.firstName + " " + data.lastName,
            email: data.email
        });
        return (0,_lib_utils_response__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(req, res, _lib_utils_statusCodes__WEBPACK_IMPORTED_MODULE_8__/* ["default"].SUCCESS */ .Z.SUCCESS, "", _lib_utils_messages__WEBPACK_IMPORTED_MODULE_10__/* .messages.USER_EMAIL_INVITE_SEND_SUCCESSFULLY */ .s.USER_EMAIL_INVITE_SEND_SUCCESSFULLY, data);
    } catch (err) {
        (0,_lib_middlewares_errors_handleErrorsApi__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(err, res);
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3796,902,104,6996,880,6708,2049], () => (__webpack_exec__(3469)));
module.exports = __webpack_exports__;

})();