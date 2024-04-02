"use strict";
exports.id = 3768;
exports.ids = [3768];
exports.modules = {

/***/ 3768:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n3": () => (/* binding */ getCategory),
/* harmony export */   "vb": () => (/* binding */ getCategoriesList)
/* harmony export */ });
/* unused harmony export COUNTRY_API_PATH */
/* harmony import */ var _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(921);
/* harmony import */ var _lib_store_categorySlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1374);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__]);
_lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const COUNTRY_API_PATH = {
    GET: "/app/category",
    CREATE: "/app/category"
};
const getCategoriesList = ()=>async (dispatch)=>{
        {
            return _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get(COUNTRY_API_PATH.GET).then((response)=>{
                var countries = response.result;
                dispatch((0,_lib_store_categorySlice__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U2)(countries));
            });
        }
    };
const getCategory = (id)=>async (dispatch)=>{
        {
            return _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get(COUNTRY_API_PATH.GET + `/${id}`).then((response)=>{
                var category = response.result;
                dispatch((0,_lib_store_categorySlice__WEBPACK_IMPORTED_MODULE_1__/* .single */ .Zr)(category));
            });
        }
    };

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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


/***/ })

};
;