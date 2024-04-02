"use strict";
exports.id = 9707;
exports.ids = [9707];
exports.modules = {

/***/ 9707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isValidUser)
/* harmony export */ });
/* unused harmony export checkRole */
/* harmony import */ var _lib_utils_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6996);
/* harmony import */ var _lib_middlewares_errors_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3756);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(614);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_middlewares_errors_handleErrorsApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2156);





async function isValidUser(req, res, next) {
    try {
        const { accessToken  } = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_3__.getToken)({
            req,
            secret: process.env.SECRET_KEY
        });
        if (!accessToken) throw new _lib_middlewares_errors_errors__WEBPACK_IMPORTED_MODULE_1__/* .noAuth */ .BZ(_lib_utils_messages__WEBPACK_IMPORTED_MODULE_0__/* .messages.UNAUTHORIZED */ .s.UNAUTHORIZED);
        const decoded = await jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(accessToken, process.env.SECRET_KEY || "");
        if (!decoded) throw new _lib_middlewares_errors_errors__WEBPACK_IMPORTED_MODULE_1__/* .noAuth */ .BZ(_lib_utils_messages__WEBPACK_IMPORTED_MODULE_0__/* .messages.UNAUTHORIZED */ .s.UNAUTHORIZED);
        req.user = decoded;
        next();
    } catch (error) {
        (0,_lib_middlewares_errors_handleErrorsApi__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(error, res);
    }
}
async function checkRole(roles = []) {
    return (req, next)=>{
        if (roles.includes(req.user.role)) {
            next();
        } else {
            throw new Forbidden(messages.FORBIDDEN);
        }
    };
}


/***/ })

};
;