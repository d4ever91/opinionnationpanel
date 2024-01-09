"use strict";
exports.id = 6452;
exports.ids = [6452];
exports.modules = {

/***/ 6452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Od": () => (/* binding */ remove),
/* harmony export */   "U2": () => (/* binding */ get),
/* harmony export */   "Vx": () => (/* binding */ update),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Zr": () => (/* binding */ single),
/* harmony export */   "zD": () => (/* binding */ load)
/* harmony export */ });
/* unused harmony export add */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isLoading: false,
    users: [],
    user: {},
    meta: {
        total: 0,
        limit: 0,
        pageNo: 1
    }
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
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
                users: action.payload.users,
                meta: action.payload.meta,
                isLoading: false
            };
            return state;
        },
        single (state, action) {
            state = {
                ...state,
                user: action.payload,
                isLoading: false
            };
            return state;
        },
        add (state, action) {
            state = {
                users: [
                    ...state.users,
                    action.payload
                ],
                isLoading: false
            };
            return state;
        },
        update (state, action) {
            state = {
                ...state,
                users: [
                    ...state.users.filter((user)=>user._id !== action.payload._id),
                    action.payload
                ],
                isLoading: false
            };
            return state;
        },
        remove (state, action) {
            state = {
                users: state.users.filter((user)=>user._id !== action.payload._id),
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
const { load , single , get , add , update , remove  } = userSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);


/***/ })

};
;