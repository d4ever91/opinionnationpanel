"use strict";
exports.id = 7238;
exports.ids = [7238];
exports.modules = {

/***/ 7238:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lu": () => (/* binding */ authForget),
/* harmony export */   "me": () => (/* binding */ authRegister)
/* harmony export */ });
/* unused harmony exports AUTH_API_PATH, authLogin, getAdminInfo, checkTokenValidity, renewalToken */
/* harmony import */ var _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(921);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__]);
_lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const AUTH_API_PATH = {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    FORGOT: "/auth/forgot",
    CHECK_TOKEN: "/auth/check",
    RENEWAL_TOKEN: "/auth/renewal",
    ADMIN: "/auth/admin"
};
function authLogin(body) {
    return nodepress.post(AUTH_API_PATH.LOGIN, body).then((response)=>response.result);
}
function authRegister(body) {
    return _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .ZP.post(AUTH_API_PATH.REGISTER, body).then((response)=>response.result);
}
function authForget(body) {
    return _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .ZP.post(AUTH_API_PATH.FORGOT, body).then((response)=>response.result);
}
function getAdminInfo() {
    return nodepress.get(AUTH_API_PATH.ADMIN).then((response)=>response.result);
}
function checkTokenValidity() {
    return nodepress.post(AUTH_API_PATH.CHECK_TOKEN).then((response)=>response.result);
}
function renewalToken() {
    return nodepress.post(AUTH_API_PATH.RENEWAL_TOKEN).then((response)=>response.result);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;