"use strict";
(() => {
var exports = {};
exports.id = 8231;
exports.ids = [8231];
exports.modules = {

/***/ 5888:
/***/ ((module) => {

module.exports = require("ajv");

/***/ }),

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 614:
/***/ ((module) => {

module.exports = require("next-auth/jwt");

/***/ }),

/***/ 5611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 6339:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_middlewares_server_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9707);
/* harmony import */ var _lib_middlewares_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9848);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5616);
/* harmony import */ var _lib_middlewares_db_mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(902);
/* harmony import */ var _lib_utils_response__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4027);
/* harmony import */ var _lib_utils_statusCodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8458);
/* harmony import */ var _lib_middlewares_errors_handleErrorsApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2156);
/* harmony import */ var _lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(880);
/* harmony import */ var _lib_middlewares_errors_errors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3756);
/* harmony import */ var _lib_utils_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6996);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_3__, _lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_7__]);
([next_connect__WEBPACK_IMPORTED_MODULE_3__, _lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_3__["default"])(_lib_middlewares_server__WEBPACK_IMPORTED_MODULE_2__/* .ncOpts */ .z);
handler.use(_lib_middlewares_server_auth__WEBPACK_IMPORTED_MODULE_1__/* .isValidUser */ .i);
handler.post(async (req, res)=>{
    try {
        await (0,_lib_middlewares_db_mongodb__WEBPACK_IMPORTED_MODULE_4__/* .connect */ .$j)();
        var email = await (0,_lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_7__/* .findUserByEmail */ .GY)(req.body.email);
        if (email) throw new _lib_middlewares_errors_errors__WEBPACK_IMPORTED_MODULE_8__/* .ValidationError */ .p8(_lib_utils_messages__WEBPACK_IMPORTED_MODULE_9__/* .messages.EMAIL_EXISTS */ .s.EMAIL_EXISTS);
        req.body.createdBy = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId)(req.user._id);
        var user = await (0,_lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_7__/* .insertUser */ ._Y)(req.body);
        return (0,_lib_utils_response__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(req, res, _lib_utils_statusCodes__WEBPACK_IMPORTED_MODULE_5__/* ["default"].SUCCESS */ .Z.SUCCESS, "/app/user", _lib_utils_messages__WEBPACK_IMPORTED_MODULE_9__/* .messages.USER_REGISTER_SUCCESSFULLY */ .s.USER_REGISTER_SUCCESSFULLY, user);
    } catch (err) {
        (0,_lib_middlewares_errors_handleErrorsApi__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(err, res);
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [902,3796,104,6996,880,9707], () => (__webpack_exec__(6339)));
module.exports = __webpack_exports__;

})();