"use strict";
(() => {
var exports = {};
exports.id = 9396;
exports.ids = [9396];
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

/***/ 5673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ privacy_policy),
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
;// CONCATENATED MODULE: ./components/Translations/PrivacyTranslate.tsx




const PrivacyTranslate = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const { locale  } = (0,router_.useRouter)();
    const router = (0,router_.useRouter)();
    const changeHandler = (e)=>{
        router.replace(`/${e.target.value.toLowerCase()}/privacy-policy`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Seo/* Seo */.p, {
                title: "Privacy Policy"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "privacy",
                className: "privacy content-section",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: t("privacy.t1")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                children: [
                                    "1.",
                                    t("privacy.l1")
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                t("privacy.p1"),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                    children: [
                                        "2. ",
                                        t("privacy.l2")
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                t("privacy.p2"),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p3"),
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p4"),
                                "  ",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p5"),
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p6"),
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "mailto: info@opinion-nation.com",
                                        children: "info@opinion-nation.com"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                children: [
                                    "3. ",
                                    t("privacy.l3")
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p7")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                children: [
                                    "4. ",
                                    t("privacy.l4")
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p8")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                children: [
                                    "5. ",
                                    t("privacy.l5")
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p9")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                children: [
                                    "6. ",
                                    t("privacy.l6")
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                " ",
                                t("privacy.p10"),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p11")
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p12")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p13")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p14")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                children: [
                                    "7. ",
                                    t("privacy.l7")
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                t("privacy.p15"),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/cookie-pol",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: t("privacy.p16")
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                children: [
                                    "8. ",
                                    t("privacy.l8")
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p17")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                children: [
                                    "9. ",
                                    t("privacy.l9")
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p18")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                children: [
                                    "10. ",
                                    t("privacy.l10")
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p19")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p20")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                children: [
                                    "11. ",
                                    t("privacy.l11")
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                t("privacy.p21"),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p22"),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p23"),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p24")
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "12."
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: t("privacy.l12")
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "12.1"
                                }),
                                " ",
                                t("privacy.p25")
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "12.2"
                                }),
                                " ",
                                t("privacy.p26"),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p27"),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p28"),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p29"),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p30"),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p31"),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p32"),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p33"),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p34")
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "12.3"
                                }),
                                t("privacy.p35")
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "12.4"
                                }),
                                t("privacy.p36")
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "12.5"
                                }),
                                t("privacy.p37")
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "12.6"
                                }),
                                " ",
                                t("privacy.p38")
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "12.7"
                                }),
                                " ",
                                t("privacy.p39")
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "12.8"
                                }),
                                t("privacy.p40")
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "12.9"
                                }),
                                t("privacy.p41")
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "12.10"
                                }),
                                t("privacy.p42"),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p43"),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p44")
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "12.11"
                                }),
                                t("privacy.p45")
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "12.12"
                                }),
                                " ",
                                t("privacy.p46")
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "12.13"
                                }),
                                " ",
                                t("privacy.p47")
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p48")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p49")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                children: [
                                    "13. ",
                                    t("privacy.l13")
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p50")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p51")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p52")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                children: [
                                    "14. ",
                                    t("privacy.l14")
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p53")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p54")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p55")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p56")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p57")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p58")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                children: [
                                    "15.\xa0",
                                    t("privacy.l15"),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p59")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p60")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p61")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p62")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p63")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p64")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p65")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p66")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p67")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p68")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: t("privacy.t2")
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ol", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: t("privacy.p69")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: t("privacy.p70")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: t("privacy.p71")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: t("privacy.p72")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: t("privacy.p73")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: t("privacy.p74")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: t("privacy.p75")
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: t("privacy.t3")
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ol", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: t("privacy.p76")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: t("privacy.p77")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: t("privacy.p78")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: t("privacy.p79")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: t("privacy.p80")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: t("privacy.p81")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: t("privacy.p82")
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p83")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                children: t("privacy.p84")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p85")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p89")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p90")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p91")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                children: t("privacy.p92")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p93")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                children: t("privacy.p94")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p95")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                children: t("privacy.p96")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p97")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                children: t("privacy.p98")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: t("privacy.p99")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                children: [
                                    "16.",
                                    t("privacy.t4")
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                t("privacy.p100"),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p101"),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p102"),
                                ", ",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p103"),
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p104"),
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                t("privacy.p105"),
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "mailto:dpo@opinion-nation.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "dpo@opinion-nation.com"
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
/* harmony default export */ const Translations_PrivacyTranslate = ((/* unused pure expression or super */ null && (PrivacyTranslate)));

// EXTERNAL MODULE: ./lib/theme/index.ts
var theme = __webpack_require__(8137);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
;// CONCATENATED MODULE: ./pages/privacy-policy.tsx






const Privacy = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        theme: theme/* customTheme */.v,
        children: /*#__PURE__*/ jsx_runtime_.jsx(PrivacyTranslate, {})
    });
};
/* harmony default export */ const privacy_policy = ((0,WithPublic/* default */.Z)(Privacy));
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
var __webpack_exports__ = __webpack_require__.X(0, [5500,8137,6215,5562], () => (__webpack_exec__(5673)));
module.exports = __webpack_exports__;

})();