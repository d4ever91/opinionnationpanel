"use strict";
(() => {
var exports = {};
exports.id = 1640;
exports.ids = [1640];
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

/***/ 9497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ how_it_works),
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
;// CONCATENATED MODULE: ./components/Translations/HowItWorksTranslate.tsx



const HowItWorks = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Seo/* Seo */.p, {
                title: "How it workss"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "about",
                className: "about content-section",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "faq_1",
                            className: "faq-box",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex-row",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "p-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "about-title",
                                                children: t("howitwork.t1")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: t("howitwork.p1")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "p-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "about-title",
                                                children: t("howitwork.t2")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: t("howitwork.p2")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "p-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                className: "about-title",
                                                children: [
                                                    " ",
                                                    t("howitwork.t3")
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: t("howitwork.p3")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "p-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "about-title",
                                                children: t("howitwork.t4")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: t("howitwork.p4")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: t("howitwork.p5")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "p-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "about-title",
                                                children: t("howitwork.t5")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: t("howitwork.p6")
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "faq_2",
                            className: "faq-box",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex-row",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "p-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "about-title",
                                            children: t("howitwork.t6")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: t("howitwork.p7")
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "faq_3",
                            className: "faq-box",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex-row",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "p-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "about-title",
                                                children: t("howitwork.t7")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: t("howitwork.p8")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "p-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "about-title",
                                                children: t("howitwork.t8")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: t("howitwork.p9")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "p-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "about-title",
                                                children: t("howitwork.t9")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: t("howitwork.p10")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "p-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "about-title",
                                                children: t("howitwork.t10")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: t("howitwork.p11")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "p-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "about-title",
                                                children: t("howitwork.t11")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: t("howitwork.p12")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "p-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "about-title",
                                                children: t("howitwork.t12")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: t("howitwork.p13")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "p-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "about-title",
                                                children: t("howitwork.t14")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: t("howitwork.P15")
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const HowItWorksTranslate = (HowItWorks);

// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
;// CONCATENATED MODULE: ./pages/how-it-works.tsx




const HowItWork = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(HowItWorksTranslate, {});
};
/* harmony default export */ const how_it_works = ((0,WithPublic/* default */.Z)(HowItWork));
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
var __webpack_exports__ = __webpack_require__.X(0, [5500,5562], () => (__webpack_exec__(9497)));
module.exports = __webpack_exports__;

})();