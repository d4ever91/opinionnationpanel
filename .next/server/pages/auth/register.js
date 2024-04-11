"use strict";
(() => {
var exports = {};
exports.id = 461;
exports.ids = [461];
exports.modules = {

/***/ 8100:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ RegisterForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_action_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7238);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_action_auth__WEBPACK_IMPORTED_MODULE_4__]);
_lib_action_auth__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const RegisterForm = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(false);
    const submitForm = async (values, resetForm)=>{
        setIsLoading(true);
        await (0,_lib_action_auth__WEBPACK_IMPORTED_MODULE_4__/* .authRegister */ .me)(values);
        resetForm();
        setIsLoading(false);
    };
    const SchemaLoginForm = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
        firstName: yup__WEBPACK_IMPORTED_MODULE_2__.string().trim().required("First Name is required"),
        lastName: yup__WEBPACK_IMPORTED_MODULE_2__.string().trim().required("Last Name is required"),
        email: yup__WEBPACK_IMPORTED_MODULE_2__.string().email().required("Email must be valid"),
        terms: yup__WEBPACK_IMPORTED_MODULE_2__.boolean().required("")
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
        onSubmit: (values, { resetForm  })=>{
            submitForm(values, resetForm);
        },
        validateOnBlur: false,
        validateOnChange: true,
        enableReinitialize: true,
        validationSchema: SchemaLoginForm,
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            terms: false,
            news: false
        },
        children: (formikProps)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
                onSubmit: formikProps.handleSubmit,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                        isInvalid: formikProps.errors.firstName && formikProps.touched.firstName,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                ...formikProps.getFieldProps("firstName"),
                                type: "text",
                                placeholder: t("register.firstName"),
                                size: "lg"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormErrorMessage, {
                                children: formikProps.errors.firstName
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                        mt: 4,
                        isInvalid: formikProps.errors.lastName && formikProps.touched.lastName,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                ...formikProps.getFieldProps("lastName"),
                                type: "text",
                                placeholder: t("register.lastName"),
                                size: "lg"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormErrorMessage, {
                                children: formikProps.errors.lastName
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                        mt: 4,
                        isInvalid: formikProps.errors.email && formikProps.touched.email,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                ...formikProps.getFieldProps("email"),
                                type: "email",
                                placeholder: t("register.emai"),
                                size: "lg"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormErrorMessage, {
                                children: formikProps.errors.email
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                        mt: 4,
                        isInvalid: formikProps.errors.company && formikProps.touched.company,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                ...formikProps.getFieldProps("company"),
                                type: "text",
                                placeholder: t("register.company") + "(Optional)",
                                size: "lg"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormErrorMessage, {
                                children: formikProps.errors.company
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                        mt: 4,
                        isInvalid: formikProps.errors.terms && formikProps.touched.terms,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
                                name: "terms",
                                defaultChecked: formikProps.values.terms,
                                checked: formikProps.values.terms,
                                onChange: formikProps.handleChange,
                                size: "md",
                                children: [
                                    t("register.policy1"),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {
                                        style: {
                                            color: "#3A7EC6"
                                        },
                                        href: "/term-of-use",
                                        children: t("register.policy2")
                                    }),
                                    t("register.policy3"),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {
                                        style: {
                                            color: "#3A7EC6"
                                        },
                                        href: "/privacy-policy",
                                        children: t("register.policy4")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormErrorMessage, {
                                children: formikProps.errors.terms
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
                        mt: 4,
                        isInvalid: formikProps.errors.news && formikProps.touched.news,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
                                name: "news",
                                checked: formikProps.values.news,
                                onChange: formikProps.handleChange,
                                size: "md",
                                children: t("register.news")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormErrorMessage, {
                                children: formikProps.errors.news
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
                        isLoading: isLoading,
                        isDisabled: !formikProps.values.terms,
                        color: "white",
                        type: "submit",
                        style: {
                            backgroundColor: "#3A7EC6"
                        },
                        mt: 4,
                        width: "full",
                        size: "lg",
                        variant: "solid",
                        children: t("register.createAccount")
                    })
                ]
            })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4209:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ RegisterTranslate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Route_WithoutAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9724);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5500);
/* harmony import */ var _components_Auth_Register_RegisterForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8100);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Auth_Register_RegisterForm__WEBPACK_IMPORTED_MODULE_5__]);
_components_Auth_Register_RegisterForm__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const RegisterTranslate = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { locale  } = router;
    const routeTo = (path)=>{
        return router.push(path, path, {
            locale: locale
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {
        minH: "100vh",
        direction: {
            base: "column",
            md: "row"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Seo__WEBPACK_IMPORTED_MODULE_4__/* .Seo */ .p, {
                title: "Register"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
                p: 8,
                flex: 1,
                align: "center",
                justify: "center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                    spacing: 4,
                    w: "full",
                    maxW: "md",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Auth_Register_RegisterForm__WEBPACK_IMPORTED_MODULE_5__/* .RegisterForm */ .B, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                            style: {
                                textAlign: "center"
                            },
                            fontSize: "md",
                            children: [
                                "  ",
                                t("register.already") + " ?",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {
                                    style: {
                                        color: "#3A7EC6"
                                    },
                                    onClick: ()=>routeTo("/auth/login"),
                                    children: " " + t("register.login")
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_Route_WithoutAuth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(RegisterTranslate));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3380:
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
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Route_WithoutAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9724);
/* harmony import */ var _components_Translations_RegisterTranslate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4209);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Translations_RegisterTranslate__WEBPACK_IMPORTED_MODULE_5__]);
_components_Translations_RegisterTranslate__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Register = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {
        theme: _lib_theme__WEBPACK_IMPORTED_MODULE_1__/* .customTheme */ .v,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Translations_RegisterTranslate__WEBPACK_IMPORTED_MODULE_5__/* .RegisterTranslate */ .k, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_Route_WithoutAuth__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(Register));
async function getStaticProps({ locale  }) {
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__.serverSideTranslations)(locale, [
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5500,8137,921,6215,5562,9724,7238], () => (__webpack_exec__(3380)));
module.exports = __webpack_exports__;

})();