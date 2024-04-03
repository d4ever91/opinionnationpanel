"use strict";
exports.id = 921;
exports.ids = [921];
exports.modules = {

/***/ 9465:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useToast)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_1__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useToast = ()=>{
    const showToast = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({ description , status ="error"  })=>{
        react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].dismiss();
        if (status == "error") {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].error(description);
        }
        if (status == "success") {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].success(description);
        }
    }, []);
    return {
        showToast
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 921:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O3": () => (/* binding */ AxiosInterceptor),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export HTTPStatus */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7177);
/* harmony import */ var _lib_hooks_useToast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9465);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, _lib_hooks_useToast__WEBPACK_IMPORTED_MODULE_3__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, _lib_hooks_useToast__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





var HTTPCode;
(function(HTTPCode) {
    HTTPCode[HTTPCode["SUCCESS"] = 200] = "SUCCESS";
    HTTPCode[HTTPCode["CREATE_SUCCESS"] = 201] = "CREATE_SUCCESS";
    HTTPCode[HTTPCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HTTPCode[HTTPCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HTTPCode[HTTPCode["NO_PERMISSION"] = 403] = "NO_PERMISSION";
    HTTPCode[HTTPCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HTTPCode[HTTPCode["SERVER_ERROR"] = 500] = "SERVER_ERROR";
    HTTPCode[HTTPCode["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    HTTPCode[HTTPCode["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
})(HTTPCode || (HTTPCode = {}));
var HTTPStatus;
(function(HTTPStatus) {
    HTTPStatus["Error"] = "error";
    HTTPStatus["Success"] = "success";
})(HTTPStatus || (HTTPStatus = {}));
const nodepress = axios__WEBPACK_IMPORTED_MODULE_1__["default"].create({
    baseURL: "/api"
});
const AxiosInterceptor = ({ children  })=>{
    const { showToast  } = (0,_lib_hooks_useToast__WEBPACK_IMPORTED_MODULE_3__/* .useToast */ .p)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        nodepress.interceptors.response.use((response)=>{
            if (response && response.data && response.data.code === HTTPCode.SUCCESS) {
                if (response.data.redirect) {
                    return router.push(response.data.redirect);
                }
                if (response.data.message) {
                    showToast({
                        status: "success",
                        title: "Success!",
                        description: response.data.message
                    });
                }
                return Promise.resolve(response.data);
            } else {
                if (response && response.result) {
                    return Promise.resolve(response.result);
                }
                return Promise.reject(response);
            }
        }, (error)=>{
            const errorJSON = error?.toJSON?.();
            const messageText = error.response?.data?.message || "Error";
            const errorInfo = {
                ...errorJSON,
                config: error.config,
                request: error.request,
                response: error.response,
                code: error.code || error.response?.status || HTTPCode.BAD_REQUEST,
                message: messageText
            };
            if (messageText) showToast({
                status: "error",
                title: "Error!",
                description: messageText
            });
            if (error.response.status === HTTPCode.NOT_FOUND) {
                router.push("/404");
            }
            if (error.response.status === HTTPCode.UNAUTHORIZED) {
                _token__WEBPACK_IMPORTED_MODULE_2__/* ["default"].removeToken */ .ZP.removeToken();
            }
            return Promise.reject(errorInfo);
        });
    }, []);
    return children;
};
const service = {
    $: nodepress,
    request: (...args)=>nodepress.request(...args),
    get: (...args)=>nodepress.get(...args),
    delete: (...args)=>nodepress.delete(...args),
    head: (...args)=>nodepress.head(...args),
    options: (...args)=>nodepress.options(...args),
    post: (...args)=>nodepress.post(...args),
    put: (...args)=>nodepress.put(...args),
    patch: (...args)=>nodepress.patch(...args)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (service);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ services_token)
});

// UNUSED EXPORTS: getToken, getTokenCountdown, isTokenValid, removeToken, setToken

;// CONCATENATED MODULE: ./lib/services/storage.ts
const get = (key)=>{
    return localStorage.getItem(key);
};
const set = (key, data)=>{
    return localStorage.setItem(key, data);
};
const remove = (key)=>{
    localStorage.removeItem(key);
};
const setJSON = (key, data)=>{
    set(key, JSON.stringify(data));
};
const getJSON = (key)=>{
    const data = get(key);
    return typeof data === "string" ? JSON.parse(data) : null;
};
const storage = {
    get,
    set,
    remove,
    setJSON,
    getJSON
};
/* harmony default export */ const services_storage = (storage);

;// CONCATENATED MODULE: ./lib/services/token.ts

const TOKEN_STORAGE_KEY = "id_token";
const TOKEN_BIRTH_TIME = "token_birth_time";
const TOKEN_EXPIRES_IN = "token_expires_in";
const getToken = ()=>{
    return services_storage.get(TOKEN_STORAGE_KEY);
};
const setToken = (token, expires_in)=>{
    services_storage.set(TOKEN_STORAGE_KEY, token);
    services_storage.set(TOKEN_EXPIRES_IN, String(expires_in));
    services_storage.set(TOKEN_BIRTH_TIME, String(+new Date() / 1000));
};
const removeToken = ()=>{
    services_storage.remove(TOKEN_STORAGE_KEY);
    services_storage.remove(TOKEN_EXPIRES_IN);
    services_storage.remove(TOKEN_BIRTH_TIME);
};
const isTokenValid = ()=>{
    const token = getToken();
    const tokenIsOk = token?.split(".").length === 3;
    return tokenIsOk;
};
const getTokenCountdown = ()=>{
    const expiresIn = Number(localStorage.getItem(TOKEN_EXPIRES_IN));
    const borthTime = Number(localStorage.getItem(TOKEN_BIRTH_TIME));
    const deadLine = borthTime + expiresIn;
    const now = +new Date() / 1000;
    return deadLine > now ? Math.floor(deadLine - now) : 0;
};
const token = {
    getToken,
    setToken,
    removeToken,
    isTokenValid,
    getTokenCountdown
};
/* harmony default export */ const services_token = (token);


/***/ })

};
;