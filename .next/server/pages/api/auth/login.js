"use strict";
(() => {
var exports = {};
exports.id = 3908;
exports.ids = [3908];
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

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 5611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 9539:
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
/* harmony import */ var _lib_utils_response__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4027);
/* harmony import */ var _lib_utils_statusCodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8458);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_utils_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6996);
/* harmony import */ var _lib_middlewares_validation_userValidation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2049);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_2__, next_connect__WEBPACK_IMPORTED_MODULE_5__]);
([_lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_2__, next_connect__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_5__["default"])(_lib_middlewares_server__WEBPACK_IMPORTED_MODULE_4__/* .ncOpts */ .z);
handler.use(_lib_middlewares_validation_userValidation__WEBPACK_IMPORTED_MODULE_10__/* .validateLogin */ ._);
handler.post(async (req, res)=>{
    try {
        await (0,_lib_middlewares_db_mongodb__WEBPACK_IMPORTED_MODULE_3__/* .connect */ .$j)();
        var result = {};
        var user = await (0,_lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_2__/* .findUserWithEmailAndPassword */ .X8)(req.body.email, req.body.password);
        if (!user || !user.emailVerified) throw new _lib_middlewares_errors_errors__WEBPACK_IMPORTED_MODULE_0__/* .ValidationError */ .p8(_lib_utils_messages__WEBPACK_IMPORTED_MODULE_9__/* .messages.INVALID_EMAIL_OR_PASSWORD */ .s.INVALID_EMAIL_OR_PASSWORD);
        const token = await jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default().sign(user, process.env.JWT_SECRET || "", {
            expiresIn: "7d"
        });
        await (0,_lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_2__/* .updateUserById */ .TP)(user._id, {
            lastLogin: new Date()
        });
        await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.signIn)("credentials", {
            redirect: false,
            email: user.email,
            password: user.password
        });
        result.token = token;
        result.user = user;
        return (0,_lib_utils_response__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(req, res, _lib_utils_statusCodes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].SUCCESS */ .Z.SUCCESS, "", _lib_utils_messages__WEBPACK_IMPORTED_MODULE_9__/* .messages.USER_SIGNED_IN_SUCCESSFULLY */ .s.USER_SIGNED_IN_SUCCESSFULLY, result);
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
var __webpack_exports__ = __webpack_require__.X(0, [902,3796,104,6996,880,2049], () => (__webpack_exec__(9539)));
module.exports = __webpack_exports__;

})();