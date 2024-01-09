"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 1374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U2": () => (/* binding */ get),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Zr": () => (/* binding */ single)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isLoading: true,
    category: {},
    categories: []
};
const categorySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "category",
    initialState,
    reducers: {
        get (state, action) {
            state = {
                ...action.payload,
                isLoading: false
            };
            return state;
        },
        single (state, action) {
            state = {
                categories: [],
                category: action.payload,
                isLoading: false
            };
            return state;
        }
    }
});
const { get , single  } = categorySlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categorySlice.reducer);


/***/ }),

/***/ 5282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ get),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isLoading: true,
    countries: []
};
const countrySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "country",
    initialState,
    reducers: {
        get (state, action) {
            state = {
                ...action.payload,
                isLoading: false
            };
            return state;
        }
    }
});
const { get  } = countrySlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countrySlice.reducer);


/***/ }),

/***/ 6688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lib_store)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./lib/store/categorySlice.ts
var categorySlice = __webpack_require__(1374);
// EXTERNAL MODULE: ./lib/store/countrySlice.ts
var countrySlice = __webpack_require__(5282);
;// CONCATENATED MODULE: ./lib/store/loadingSlice.ts

const initialState = {
    isLoading: false
};
const loadingSlice = (0,toolkit_.createSlice)({
    name: "loading",
    initialState,
    reducers: {
        load (state, action) {
            state = action.payload;
            return state;
        }
    }
});
const { load  } = loadingSlice.actions;
/* harmony default export */ const store_loadingSlice = (loadingSlice.reducer);

// EXTERNAL MODULE: ./lib/store/moduleSlice.ts
var moduleSlice = __webpack_require__(5150);
// EXTERNAL MODULE: ./lib/store/questionSlice.ts
var questionSlice = __webpack_require__(8792);
// EXTERNAL MODULE: ./lib/store/surveySlice.ts
var surveySlice = __webpack_require__(622);
// EXTERNAL MODULE: ./lib/store/userSlice.ts
var userSlice = __webpack_require__(6452);
;// CONCATENATED MODULE: ./lib/store/rootReducer.ts








const rootReducer = (0,toolkit_.combineReducers)({
    loading: store_loadingSlice,
    module: moduleSlice/* default */.Z,
    user: userSlice/* default */.ZP,
    survey: surveySlice/* default */.ZP,
    country: countrySlice/* default */.Z,
    category: categorySlice/* default */.ZP,
    question: questionSlice/* default */.Z
});
/* harmony default export */ const store_rootReducer = (rootReducer);

;// CONCATENATED MODULE: ./lib/store/index.ts


const store = (0,toolkit_.configureStore)({
    reducer: store_rootReducer
});
/* harmony default export */ const lib_store = (store);


/***/ }),

/***/ 5150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ get),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isLoading: true,
    modules: []
};
const moduleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "module",
    initialState,
    reducers: {
        get (state, action) {
            state = {
                ...action.payload,
                isLoading: false
            };
            return state;
        }
    }
});
const { get  } = moduleSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moduleSlice.reducer);


/***/ }),

/***/ 8792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ get),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isLoading: true,
    questions: []
};
const categorySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "question",
    initialState,
    reducers: {
        get (state, action) {
            state = {
                questions: action.payload,
                isLoading: false
            };
            return state;
        }
    }
});
const { get  } = categorySlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categorySlice.reducer);


/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6688);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8137);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(921);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6201);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_services_nodepress__WEBPACK_IMPORTED_MODULE_7__, react_hot_toast__WEBPACK_IMPORTED_MODULE_8__]);
([_lib_services_nodepress__WEBPACK_IMPORTED_MODULE_7__, react_hot_toast__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const App = ({ Component , pageProps: { session , ...pageProps }  })=>{
    const { ToastContainer  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.createStandaloneToast)(_lib_theme__WEBPACK_IMPORTED_MODULE_5__/* .customTheme */ .v);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_lib_services_nodepress__WEBPACK_IMPORTED_MODULE_7__/* .AxiosInterceptor */ .O3, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ToastContainer, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.Toaster, {
                position: "top-right"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {
                session: session,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
                    store: _lib_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.appWithTranslation)(App));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 6201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8137,921,6452,622], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();