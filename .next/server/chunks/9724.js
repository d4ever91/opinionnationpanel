"use strict";
exports.id = 9724;
exports.ids = [9724];
exports.modules = {

/***/ 9724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8137);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Auth_Common_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7421);
/* harmony import */ var _Auth_Common_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6112);







const withOutAuth = (WrappedComponent)=>{
    return (props)=>{
        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
        const { status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();
        if (status == "authenticated") {
            router.push("/app/dashboard");
        }
        if (status !== "authenticated" && status !== "loading") {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {
                theme: _lib_theme__WEBPACK_IMPORTED_MODULE_3__/* .customTheme */ .v,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Auth_Common_Header__WEBPACK_IMPORTED_MODULE_5__/* .Header */ .h, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WrappedComponent, {
                        ...props
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Auth_Common_Footer__WEBPACK_IMPORTED_MODULE_6__/* .Footer */ .$, {})
                ]
            });
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withOutAuth);


/***/ })

};
;