"use strict";
(() => {
var exports = {};
exports.id = 9344;
exports.ids = [9344];
exports.modules = {

/***/ 1688:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_hooks_useToast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9465);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5566);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_hooks_useToast__WEBPACK_IMPORTED_MODULE_6__, _iconify_react__WEBPACK_IMPORTED_MODULE_7__]);
([_lib_hooks_useToast__WEBPACK_IMPORTED_MODULE_6__, _iconify_react__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const LoginForm = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    const [show, setShow] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(false);
    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(false);
    const { showToast  } = (0,_lib_hooks_useToast__WEBPACK_IMPORTED_MODULE_6__/* .useToast */ .p)();
    const handlePasswordClick = ()=>setShow(!show);
    const submitLogin = async (values)=>{
        setIsLoading(true);
        var data = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)("credentials", {
            redirect: false,
            email: values.email,
            password: values.password
        });
        if (data.error) {
            setIsLoading(false);
            showToast({
                status: "error",
                title: "Error!",
                description: "Invalid Credentials"
            });
        }
    };
    const SchemaLoginForm = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
        email: yup__WEBPACK_IMPORTED_MODULE_2__.string().email().required("Email must be valid"),
        password: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(7, "Password must be more than 6 character").required()
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
        onSubmit: (values)=>{
            submitLogin(values);
        },
        validateOnBlur: false,
        validateOnChange: true,
        validationSchema: SchemaLoginForm,
        initialValues: {
            email: "",
            password: ""
        },
        children: (formikProps)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
                autoComplete: "off",
                noValidate: true,
                onSubmit: formikProps.handleSubmit,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                        isInvalid: formikProps.errors.email && formikProps.touched.email,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                ...formikProps.getFieldProps("email"),
                                type: "email",
                                placeholder: t("login.email"),
                                size: "lg"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormErrorMessage, {
                                children: formikProps.errors.email
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                        isInvalid: formikProps.errors.password && formikProps.touched.password,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.InputGroup, {
                                mt: 4,
                                size: "md",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                        ...formikProps.getFieldProps("password"),
                                        pr: "4.5rem",
                                        type: show ? "text" : "password",
                                        placeholder: t("login.password"),
                                        size: "lg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.InputRightElement, {
                                        width: "4.5rem",
                                        children: show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_7__.Icon, {
                                            onClick: handlePasswordClick,
                                            icon: "mdi:eye-off",
                                            fontSize: 24
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_7__.Icon, {
                                            onClick: handlePasswordClick,
                                            icon: "ic:sharp-remove-red-eye",
                                            fontSize: 24
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormErrorMessage, {
                                children: formikProps.errors.password
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
                        isLoading: isLoading,
                        color: "white",
                        type: "submit",
                        style: {
                            backgroundColor: "#3A7EC6"
                        },
                        mt: 4,
                        width: "full",
                        size: "lg",
                        variant: "solid",
                        children: t("login.signin")
                    })
                ]
            })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7188:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ LoginTranslate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Auth_Login_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1688);
/* harmony import */ var _components_Route_WithoutAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9724);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layouts_Seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5500);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Auth_Login_LoginForm__WEBPACK_IMPORTED_MODULE_2__]);
_components_Auth_Login_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const LoginTranslate = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { locale  } = router;
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const routeTo = (path)=>{
        return router.push(path, path, {
            locale: locale
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
        minH: "100vh",
        direction: {
            base: "column",
            md: "row"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Seo__WEBPACK_IMPORTED_MODULE_5__/* .Seo */ .p, {
                title: "Login"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
                p: 8,
                flex: 1,
                align: "center",
                justify: "center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                    spacing: 4,
                    w: "full",
                    maxW: "md",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
                            style: {
                                textAlign: "center"
                            },
                            fontSize: "md",
                            children: [
                                " ",
                                " " + t("login.text")
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Auth_Login_LoginForm__WEBPACK_IMPORTED_MODULE_2__/* .LoginForm */ .U, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
                            style: {
                                textAlign: "center"
                            },
                            fontSize: "md",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                style: {
                                    color: "#3A7EC6"
                                },
                                onClick: ()=>routeTo("/auth/forgot"),
                                children: " " + t("login.forget")
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
                            style: {
                                textAlign: "center"
                            },
                            fontSize: "md",
                            children: [
                                t("login.account"),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                    style: {
                                        color: "#3A7EC6"
                                    },
                                    onClick: ()=>routeTo("/auth/register"),
                                    children: " " + t("login.register")
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_Route_WithoutAuth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(LoginTranslate));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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

/***/ 1881:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8137);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Translations_LoginTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7188);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Route_WithoutAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9724);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Translations_LoginTranslate__WEBPACK_IMPORTED_MODULE_3__]);
_components_Translations_LoginTranslate__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Login = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {
        theme: _lib_theme__WEBPACK_IMPORTED_MODULE_1__/* .customTheme */ .v,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Translations_LoginTranslate__WEBPACK_IMPORTED_MODULE_3__/* .LoginTranslate */ .z, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_Route_WithoutAuth__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(Login));
async function getStaticProps({ locale  }) {
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__.serverSideTranslations)(locale, [
                "common"
            ])
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("react-flags-select");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 5566:
/***/ ((module) => {

module.exports = import("@iconify/react");;

/***/ }),

/***/ 6201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5500,8137,6215,5562,9724], () => (__webpack_exec__(1881)));
module.exports = __webpack_exports__;

})();