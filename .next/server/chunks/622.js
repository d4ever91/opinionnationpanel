"use strict";
exports.id = 622;
exports.ids = [622];
exports.modules = {

/***/ 622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IH": () => (/* binding */ add),
/* harmony export */   "U2": () => (/* binding */ get),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "zD": () => (/* binding */ load)
/* harmony export */ });
/* unused harmony exports single, update, remove */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isLoading: false,
    surveys: [],
    countries: [],
    users: [],
    survey: {},
    statuses: [],
    meta: {
        total: 0,
        limit: 0,
        pageNo: 1
    }
};
const surveySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "survey",
    initialState,
    reducers: {
        load (state, action) {
            state = {
                ...state,
                isLoading: action.payload
            };
            return state;
        },
        get (state, action) {
            state = {
                statuses: action.payload.statuses,
                surveys: action.payload.surveys,
                users: action.payload.users,
                countries: action.payload.countries,
                meta: action.payload.meta,
                isLoading: false
            };
            return state;
        },
        single (state, action) {
            state = {
                ...state,
                survey: action.payload,
                isLoading: false
            };
            return state;
        },
        add (state, action) {
            state = {
                surveys: [
                    ...state.surveys,
                    action.payload
                ],
                isLoading: false
            };
            return state;
        },
        update (state, action) {
            state = {
                ...state,
                surveys: [
                    ...state.surveys.filter((user)=>user._id !== action.payload._id),
                    action.payload
                ],
                isLoading: false
            };
            return state;
        },
        remove (state, action) {
            state = {
                surveys: state.surveys.filter((user)=>user._id !== action.payload._id),
                meta: {
                    ...state.meta,
                    total: state.meta.total - 1
                },
                isLoading: false
            };
            return state;
        }
    }
});
const { load , single , get , add , update , remove  } = surveySlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (surveySlice.reducer);


/***/ })

};
;