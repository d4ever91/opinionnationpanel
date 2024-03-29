"use strict";
(() => {
var exports = {};
exports.id = 9134;
exports.ids = [9134];
exports.modules = {

/***/ 5888:
/***/ ((module) => {

module.exports = require("ajv");

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

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 3242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const ProfileSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    user: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
        ref: "User"
    },
    category: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
        ref: "Category"
    },
    question: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
        ref: "Question"
    },
    options: [
        {
            type: String,
            default: ""
        }
    ],
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});
const ProfileModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Profile) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Profile", ProfileSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileModel);


/***/ }),

/***/ 2992:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_middlewares_server_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9707);
/* harmony import */ var _lib_middlewares_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9848);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5616);
/* harmony import */ var _lib_middlewares_db_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(902);
/* harmony import */ var _lib_utils_response__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4027);
/* harmony import */ var _lib_utils_statusCodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8458);
/* harmony import */ var _lib_middlewares_errors_handleErrorsApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2156);
/* harmony import */ var _lib_models_profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3242);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_2__]);
next_connect__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_2__["default"])(_lib_middlewares_server__WEBPACK_IMPORTED_MODULE_1__/* .ncOpts */ .z);
handler.use(_lib_middlewares_server_auth__WEBPACK_IMPORTED_MODULE_0__/* .isValidUser */ .i);
handler.post(async (req, res)=>{
    try {
        await (0,_lib_middlewares_db_mongodb__WEBPACK_IMPORTED_MODULE_3__/* .connect */ .$j)();
        await _lib_models_profile__WEBPACK_IMPORTED_MODULE_6__/* ["default"].deleteMany */ .Z.deleteMany({
            category: req.query.id
        });
        var questions = await _lib_models_profile__WEBPACK_IMPORTED_MODULE_6__/* ["default"].create */ .Z.create(req.body.data);
        return (0,_lib_utils_response__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(req, res, _lib_utils_statusCodes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].SUCCESS */ .Z.SUCCESS, "/app/profile", "", questions);
    } catch (err) {
        (0,_lib_middlewares_errors_handleErrorsApi__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(err, res);
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [902,3796,6996,9707], () => (__webpack_exec__(2992)));
module.exports = __webpack_exports__;

})();