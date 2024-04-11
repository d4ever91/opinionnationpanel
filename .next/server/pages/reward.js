"use strict";
(() => {
var exports = {};
exports.id = 8648;
exports.ids = [8648];
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

/***/ 1394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ reward),
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
;// CONCATENATED MODULE: ./components/Translations/RewardTranslate.tsx



const RewardTranslate = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Seo/* Seo */.p, {
                title: "Our Rewards"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "about",
                className: "about content-section",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("reward.p1")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: "about-title",
                            children: t("reward.t1")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("reward.p2")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: "about-title",
                            children: t("reward.t2")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("reward.p3")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("reward.p4")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: "about-title",
                            children: t("reward.t3")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("reward.p5")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: "about-title",
                            children: t("reward.t4")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("reward.p6")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: "about-title",
                            children: t("reward.t5")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("reward.p7")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "reward-inner-section",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-3 col-md-12 col-xs-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "inner-img",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    style: {
                                                        maxWidth: "100%"
                                                    },
                                                    src: "/images/reward/Rectangle 10.png"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-3 col-md-12 col-xs-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "inner-img",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    style: {
                                                        maxWidth: "100%"
                                                    },
                                                    src: "/images/reward/Rectangle 11.png"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-3 col-md-12 col-xs-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "inner-img",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    style: {
                                                        maxWidth: "100%"
                                                    },
                                                    src: "/images/reward/Rectangle 12.png"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-3 col-md-12 col-xs-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "inner-img",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    style: {
                                                        maxWidth: "100%"
                                                    },
                                                    src: "/images/reward/Rectangle 13.png"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row pt-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-3 col-md-12 col-xs-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "inner-img",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    style: {
                                                        maxWidth: "100%"
                                                    },
                                                    src: "/images/reward/Rectangle 14.png"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-3 col-md-12 col-xs-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "inner-img",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    style: {
                                                        maxWidth: "100%"
                                                    },
                                                    src: "/images/reward/Rectangle 15.png"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-3 col-md-12 col-xs-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "inner-img",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    style: {
                                                        maxWidth: "100%"
                                                    },
                                                    src: "/images/reward/Rectangle 16.png"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-3 col-md-12 col-xs-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "inner-img",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    style: {
                                                        maxWidth: "100%"
                                                    },
                                                    src: "/images/reward/Rectangle 17.png"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row pt-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-3 col-md-12 col-xs-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "inner-img",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    style: {
                                                        maxWidth: "100%"
                                                    },
                                                    src: "/images/reward/Rectangle 18.png"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-3 col-md-12 col-xs-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "inner-img",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    style: {
                                                        maxWidth: "100%"
                                                    },
                                                    src: "/images/reward/Rectangle 20.png"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-3 col-md-12 col-xs-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "inner-img",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    style: {
                                                        maxWidth: "100%"
                                                    },
                                                    src: "/images/reward/Rectangle 21.png"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-3 col-md-12 col-xs-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "inner-img",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    style: {
                                                        maxWidth: "100%"
                                                    },
                                                    src: "/images/reward/Rectangle 22.png"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row pt-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-3 col-md-12 col-xs-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "inner-img",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    style: {
                                                        maxWidth: "100%"
                                                    },
                                                    src: "/images/reward/Rectangle 23.png"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-3 col-md-12 col-xs-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "inner-img",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    style: {
                                                        maxWidth: "100%"
                                                    },
                                                    src: "/images/reward/Rectangle 24.png"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-3 col-md-12 col-xs-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "inner-img",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    style: {
                                                        maxWidth: "100%"
                                                    },
                                                    src: "/images/reward/Rectangle 25.png"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-3 col-md-12 col-xs-12",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "inner-img",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    style: {
                                                        maxWidth: "100%"
                                                    },
                                                    src: "/images/reward/Rectangle 26.png"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Translations_RewardTranslate = (RewardTranslate);

// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
;// CONCATENATED MODULE: ./pages/reward.tsx




const Reward = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Translations_RewardTranslate, {});
};
/* harmony default export */ const reward = ((0,WithPublic/* default */.Z)(Reward));
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5500,6215,5562], () => (__webpack_exec__(1394)));
module.exports = __webpack_exports__;

})();