"use strict";
(() => {
var exports = {};
exports.id = 9335;
exports.ids = [9335];
exports.modules = {

/***/ 754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Auth_Common_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7421);
/* harmony import */ var _Auth_Common_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6112);



const withPublic = (WrappedComponent)=>{
    return (props)=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Auth_Common_Header__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .h, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WrappedComponent, {
                    ...props
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Auth_Common_Footer__WEBPACK_IMPORTED_MODULE_2__/* .Footer */ .$, {})
            ]
        });
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withPublic);


/***/ }),

/***/ 8202:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Contact */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Route_WithPublic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(754);
/* harmony import */ var _layouts_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5500);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_action_email__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2235);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_action_email__WEBPACK_IMPORTED_MODULE_7__]);
_lib_action_email__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Contact = ()=>{
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)("US");
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const changeHandler = (code)=>{
        setSelected(code);
        router.replace(`/${code.toLowerCase()}/${router.pathname}`);
    };
    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_8___default().useState(false);
    const SchemaLoginForm = yup__WEBPACK_IMPORTED_MODULE_6__.object().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_6__.string().required("Name is required"),
        email: yup__WEBPACK_IMPORTED_MODULE_6__.string().email().required("Email must be valid"),
        subject: yup__WEBPACK_IMPORTED_MODULE_6__.string().required("Subject is required"),
        message: yup__WEBPACK_IMPORTED_MODULE_6__.string().required("Message is required")
    });
    const sendEmailForm = async (values, resetForm)=>{
        setIsLoading(true);
        (0,_lib_action_email__WEBPACK_IMPORTED_MODULE_7__/* .sendEmail */ .Cz)(values);
        setIsLoading(false);
        resetForm();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Seo__WEBPACK_IMPORTED_MODULE_2__/* .Seo */ .p, {
                title: "Contact Us"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                id: "contact",
                className: "section content-section",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "contact-text section-header text-center",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "section-title",
                                                children: t("contact.getintouch")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "desc-text",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: t("contact.title")
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-5 col-md-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_5__.Formik, {
                                        onSubmit: (values, { resetForm  })=>{
                                            sendEmailForm(values, resetForm);
                                        },
                                        validateOnBlur: false,
                                        validateOnChange: true,
                                        validationSchema: SchemaLoginForm,
                                        initialValues: {
                                            name: "",
                                            email: "",
                                            subject: "",
                                            message: ""
                                        },
                                        children: (formikProps)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_5__.Form, {
                                                id: "contactForm",
                                                autoComplete: "off",
                                                noValidate: true,
                                                onSubmit: formikProps.handleSubmit,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "row",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-md-6",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.FormControl, {
                                                                        isInvalid: formikProps.errors.name && formikProps.touched.name,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "text",
                                                                                className: "form-control",
                                                                                id: "name",
                                                                                name: "name",
                                                                                ...formikProps.getFieldProps("name"),
                                                                                placeholder: t("contact.name"),
                                                                                "data-error": "Please enter your name"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.FormErrorMessage, {
                                                                                children: formikProps.errors.name
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "help-block with-errors"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-md-6",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.FormControl, {
                                                                        isInvalid: formikProps.errors.subject && formikProps.touched.subject,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "text",
                                                                                placeholder: t("contact.subject"),
                                                                                id: "msg_subject",
                                                                                className: "form-control",
                                                                                ...formikProps.getFieldProps("subject"),
                                                                                name: "subject",
                                                                                "data-error": "Please enter your subject"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.FormErrorMessage, {
                                                                                children: formikProps.errors.subject
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "help-block with-errors"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-md-12",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.FormControl, {
                                                                        isInvalid: formikProps.errors.email && formikProps.touched.email,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "text",
                                                                                className: "form-control",
                                                                                id: "email",
                                                                                name: "email",
                                                                                ...formikProps.getFieldProps("email"),
                                                                                placeholder: t("contact.email"),
                                                                                "data-error": "Please enter your Email"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.FormErrorMessage, {
                                                                                children: formikProps.errors.email
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "help-block with-errors"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-md-12",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "form-group",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.FormControl, {
                                                                            isInvalid: formikProps.errors.message && formikProps.touched.message,
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                                    className: "form-control",
                                                                                    id: "message",
                                                                                    name: "message",
                                                                                    placeholder: t("contact.message"),
                                                                                    rows: 4,
                                                                                    ...formikProps.getFieldProps("message"),
                                                                                    "data-error": "Write your message"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.FormErrorMessage, {
                                                                                    children: formikProps.errors.message
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "help-block with-errors"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "submit-button",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            disabled: isLoading,
                                                                            className: "btn btn-common",
                                                                            id: "submit",
                                                                            type: "submit",
                                                                            children: t("contact.submit")
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            id: "msgSubmit",
                                                                            className: "h3 hidden"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "clearfix"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-7 col-md-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "contact-img",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/banner3.png",
                                            className: "img-fluid",
                                            alt: ""
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_Route_WithPublic__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(Contact));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2235:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cz": () => (/* binding */ sendEmail)
/* harmony export */ });
/* unused harmony exports COUNTRY_API_PATH, sendEmailVerification */
/* harmony import */ var _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(921);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__]);
_lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const COUNTRY_API_PATH = {
    SEND: "/app/email",
    VERIFICATION: "/app/email/code"
};
function sendEmail(body) {
    return _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .ZP.post(COUNTRY_API_PATH.SEND, body).then((response)=>response.result);
}
function sendEmailVerification(body) {
    return nodepress.post(COUNTRY_API_PATH.VERIFICATION, body).then((response)=>response.result);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5210:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Translations_ContactTranslate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8202);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Translations_ContactTranslate__WEBPACK_IMPORTED_MODULE_1__]);
_components_Translations_ContactTranslate__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Contact = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Translations_ContactTranslate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);
async function getStaticProps({ locale  }) {
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2__.serverSideTranslations)(locale, [
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5500,921,6215,5562], () => (__webpack_exec__(5210)));
module.exports = __webpack_exports__;

})();