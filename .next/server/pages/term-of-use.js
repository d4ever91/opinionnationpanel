"use strict";
(() => {
var exports = {};
exports.id = 8780;
exports.ids = [8780];
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

/***/ 5229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ term_of_use),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Route/WithPublic.tsx
var WithPublic = __webpack_require__(754);
// EXTERNAL MODULE: ./layouts/Seo/index.tsx
var Seo = __webpack_require__(5500);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Translations/TermsTranslate.tsx





const TermsTranslate = ()=>{
    const { 0: selected , 1: setSelected  } = (0,external_react_.useState)("US");
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const router = (0,router_.useRouter)();
    const changeHandler = (code)=>{
        setSelected(code);
        router.replace(`/${code.toLowerCase()}/${router.pathname}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Seo/* Seo */.p, {
                title: "Terms Of Use"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "term",
                className: "term content-section",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: t("terms.t1")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("terms.p1")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: t("terms.t2")
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ol", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        t("terms.l1"),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        t("terms.l2"),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        t("terms.l3"),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        t("terms.l4"),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        t("terms.l5"),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        t("terms.l6"),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        t("terms.l7"),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        t("terms.l8"),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        t("terms.l9"),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        t("terms.l10"),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        t("terms.l11"),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        t("terms.l12"),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        t("terms.l13"),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        t("terms.l14"),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: t("terms.t3")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("terms.p2")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("terms.p3")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: t("terms.t4")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("terms.p4")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: t("terms.t5")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("terms.p5")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: t("terms.t6")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("terms.p6")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: t("terms.t7")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("terms.p7")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: t("terms.t8")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("terms.p8")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: t("terms.t9")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("terms.p9")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: t("terms.t10")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("terms.p10")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: t("terms.t11")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("terms.p11")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: t("terms.t12")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("terms.p12")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: t("terms.t13")
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                t("terms.p13"),
                                "\xa0",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://panelapp.opinion-nation.com/privacy-policy",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: "https://Opinion Nation.com/privacy-policy"
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
/* harmony default export */ const Translations_TermsTranslate = (TermsTranslate);

// EXTERNAL MODULE: ./lib/theme/index.ts
var theme = __webpack_require__(8137);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
;// CONCATENATED MODULE: ./pages/term-of-use.tsx






const Terms = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        theme: theme/* customTheme */.v,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Translations_TermsTranslate, {})
    });
};
/* harmony default export */ const term_of_use = ((0,WithPublic/* default */.Z)(Terms));
async function getStaticProps({ locale  }) {
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common"
            ])
        }
    };
}


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5500,8137,5562], () => (__webpack_exec__(5229)));
module.exports = __webpack_exports__;

})();