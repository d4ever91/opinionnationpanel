"use strict";
(() => {
var exports = {};
exports.id = 3748;
exports.ids = [3748];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 7449:
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ 3598:
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ 5611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 8439:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_middlewares_db_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(902);
/* harmony import */ var _lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(880);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3598);
/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7449);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_1__, uuid__WEBPACK_IMPORTED_MODULE_6__]);
([_lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_1__, uuid__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_3___default()({
    providers: [
        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4___default()({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_5___default()({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                await (0,_lib_middlewares_db_mongodb__WEBPACK_IMPORTED_MODULE_0__/* .connect */ .$j)();
                var user = await (0,_lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_1__/* .findUserWithEmailAndPassword */ .X8)(credentials.email, credentials.password);
                delete user.password;
                var accessToken = await jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign(user, process.env.SECRET_KEY);
                user.accessToken = accessToken;
                await (0,_lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_1__/* .updateUserById */ .TP)(user._id, {
                    lastLogin: new Date()
                });
                return user;
            }
        })
    ],
    pages: {
        signIn: "/auth/login"
    },
    secret: process.env.SECRET_KEY,
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt ({ token , account , user  }) {
            var uuid = await (0,uuid__WEBPACK_IMPORTED_MODULE_6__.v4)();
            if (account && account.provider === "google") {
                await (0,_lib_middlewares_db_mongodb__WEBPACK_IMPORTED_MODULE_0__/* .connect */ .$j)();
                var user = await (0,_lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_1__/* .findUserByEmail */ .GY)(user.email);
                if (!user) await (0,_lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_1__/* .insertUser */ ._Y)({
                    email: user.email,
                    password: user.id,
                    provider: "google",
                    platform: "web",
                    googleId: user.id,
                    uuid
                });
                var accessToken = await jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign(user, process.env.SECRET_KEY);
                user.accessToken = accessToken;
                await (0,_lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_1__/* .updateUserById */ .TP)(user._id, {
                    lastLogin: new Date()
                });
            }
            if (account && account.provider === "facebook") {
                await (0,_lib_middlewares_db_mongodb__WEBPACK_IMPORTED_MODULE_0__/* .connect */ .$j)();
                var user = await (0,_lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_1__/* .findUserByEmail */ .GY)(user.email);
                if (!user) await (0,_lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_1__/* .insertUser */ ._Y)({
                    email: user.email,
                    password: user.id,
                    provider: "google",
                    platform: "web",
                    googleId: user.id,
                    uuid
                });
                var accessToken = await jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign(user, process.env.SECRET_KEY);
                user.accessToken = accessToken;
                await (0,_lib_middlewares_mongo_service__WEBPACK_IMPORTED_MODULE_1__/* .updateUserById */ .TP)(user._id, {
                    lastLogin: new Date()
                });
            }
            if (user) token.accessToken = user.accessToken;
            return token;
        },
        async session ({ session , token  }) {
            session.accessToken = token.accessToken;
            return session;
        }
    }
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [902,104,880], () => (__webpack_exec__(8439)));
module.exports = __webpack_exports__;

})();