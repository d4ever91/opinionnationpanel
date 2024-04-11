"use strict";
exports.id = 4702;
exports.ids = [4702];
exports.modules = {

/***/ 4702:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fp": () => (/* binding */ getUsersList),
/* harmony export */   "Nq": () => (/* binding */ updateUser),
/* harmony export */   "PR": () => (/* binding */ getUser),
/* harmony export */   "TO": () => (/* binding */ getUserByToken),
/* harmony export */   "XA": () => (/* binding */ getUserByResetToken),
/* harmony export */   "Zy": () => (/* binding */ updateUserPassword),
/* harmony export */   "kX": () => (/* binding */ removeUser)
/* harmony export */ });
/* unused harmony exports USER_API_PATH, getUsers, addUser */
/* harmony import */ var _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(921);
/* harmony import */ var _lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6452);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__]);
_lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const USER_API_PATH = {
    GET: "/app/user",
    GETONE: "/app/user/get",
    GET_TOKEN: "/app/code",
    GET_RESET_TOKEN: "/app/reset/code",
    CREATE: "/app/user/add",
    UPDATE: "/app/user/update",
    UPDATE_PASSWORD: "/app/password/update",
    REMOVE: "/app/user/remove"
};
const getUsers = (filters)=>async (dispatch)=>{
        {
            dispatch(load(true));
            return nodepress.post(USER_API_PATH.GET, filters).then((response)=>{
                var result = response.result ? response.result : response;
                dispatch(get(result));
            }).catch((e)=>{
                dispatch(load(false));
            });
        }
    };
const getUsersList = ()=>async (dispatch)=>{
        {
            dispatch((0,_lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .load */ .zD)(true));
            return _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get(USER_API_PATH.GET).then((response)=>{
                var result = response.result ? response.result : response;
                dispatch((0,_lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U2)(result));
            }).catch((e)=>{
                dispatch((0,_lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .load */ .zD)(false));
            });
        }
    };
const getUser = (id)=>async (dispatch)=>{
        {
            dispatch((0,_lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .load */ .zD)(true));
            return _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get(USER_API_PATH.GETONE + "/" + id).then((response)=>{
                var result = response.result ? response.result : response;
                dispatch((0,_lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .single */ .Zr)(result));
            }).catch((e)=>{
                dispatch((0,_lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .load */ .zD)(false));
            });
        }
    };
const getUserByToken = (token)=>async (dispatch)=>{
        {
            dispatch((0,_lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .load */ .zD)(true));
            return _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get(USER_API_PATH.GET_TOKEN + "?token=" + token).then((response)=>{
                var result = response.result ? response.result : response;
                dispatch((0,_lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .single */ .Zr)(result));
            }).catch((e)=>{
                dispatch((0,_lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .load */ .zD)(false));
            });
        }
    };
const getUserByResetToken = (token)=>async (dispatch)=>{
        {
            dispatch((0,_lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .load */ .zD)(true));
            return _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get(USER_API_PATH.GET_RESET_TOKEN + "?token=" + token).then((response)=>{
                var result = response.result ? response.result : response;
                dispatch((0,_lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .single */ .Zr)(result));
            }).catch((e)=>{
                dispatch((0,_lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .load */ .zD)(false));
            });
        }
    };
const addUser = (user)=>async (dispatch)=>{
        {
            dispatch(load(true));
            return nodepress.post(USER_API_PATH.CREATE, user).then((response)=>{
                var user = response.result ? response.result : response;
                dispatch(add(user));
            }).catch((e)=>{
                dispatch(load(false));
            });
        }
    };
const updateUser = (id, user)=>async (dispatch)=>{
        {
            dispatch((0,_lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .load */ .zD)(true));
            return _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .ZP.put(USER_API_PATH.UPDATE + "/" + id, user).then((response)=>{
                var user = response.result ? response.result : response;
                dispatch((0,_lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .update */ .Vx)(user));
            }).catch((e)=>{
                dispatch((0,_lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .load */ .zD)(false));
            });
        }
    };
const updateUserPassword = (code, user)=>async (dispatch)=>{
        {
            dispatch((0,_lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .load */ .zD)(true));
            return _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .ZP.put(USER_API_PATH.UPDATE_PASSWORD + "/" + code, user).then((response)=>{
                var user = response.result ? response.result : response;
                dispatch((0,_lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .update */ .Vx)(user));
            }).catch((e)=>{
                dispatch((0,_lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .load */ .zD)(false));
            });
        }
    };
const removeUser = (_id)=>async (dispatch)=>{
        {
            dispatch((0,_lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .load */ .zD)(true));
            return _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .ZP["delete"](USER_API_PATH.REMOVE + "/" + _id).then((response)=>{
                var user = response.result ? response.result : response;
                dispatch((0,_lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .remove */ .Od)(user));
            }).catch((e)=>{
                dispatch((0,_lib_store_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .load */ .zD)(false));
            });
        }
    };

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;