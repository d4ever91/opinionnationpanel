"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 7297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/App/Country/CountrySelect.tsx
var CountrySelect = __webpack_require__(6215);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./components/Translations/HomeTranslate.tsx






const HomeTranslate = ()=>{
    const router = (0,router_.useRouter)();
    const { locale  } = router;
    const { status  } = (0,react_.useSession)();
    const { 0: selected , 1: setSelected  } = (0,external_react_.useState)(locale == "en" ? "US" : locale.toUpperCase());
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const changeHandler = (code)=>{
        setSelected(code);
        if (code == "US") {
            return router.push(router.pathname, router.pathname, {
                locale: "en"
            });
        }
        return router.push(router.pathname, router.pathname, {
            locale: code.toLowerCase()
        });
    };
    const routeTo = (path)=>{
        setSelected(locale.toUpperCase());
        return router.push(path, path, {
            locale: locale
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                id: "home",
                className: "hero-area",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "top-nav navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/",
                                    className: "navbar-brand",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        width: "150",
                                        src: "/images/log.png",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "navbar-toggler",
                                    type: "button",
                                    "data-toggle": "collapse",
                                    "data-target": "#navbarCollapse",
                                    "aria-controls": "navbarCollapse",
                                    "aria-expanded": "false",
                                    "aria-label": "Toggle navigation",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "lni-menu"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "collapse navbar-collapse",
                                    id: "navbarCollapse",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "navbar-nav mr-auto w-100 justify-content-end",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link page-scroll",
                                                    onClick: ()=>routeTo("/"),
                                                    children: t("header.home")
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link page-scroll",
                                                    onClick: ()=>routeTo("/about"),
                                                    children: t("header.about")
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link page-scroll",
                                                    onClick: ()=>routeTo("/how-it-works"),
                                                    children: t("header.howitworks")
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link page-scroll",
                                                    onClick: ()=>routeTo("/reward"),
                                                    children: t("header.rewards")
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link page-scroll",
                                                    onClick: ()=>routeTo("/contact"),
                                                    children: t("header.contact")
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: status != "unauthenticated" ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "btn btn-singin",
                                                    onClick: ()=>routeTo("/app/dashboard"),
                                                    children: t("header.dashboard")
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "btn btn-singin",
                                                    onClick: ()=>routeTo("/auth/register"),
                                                    children: t("header.register")
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(CountrySelect/* default */.Z, {
                                                    selected: selected,
                                                    changeHandler: changeHandler
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row space-100",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-12 col-md-12 col-xs-12 p-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "intro-img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/images/banner1.png",
                                            alt: ""
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-12 col-md-12 col-xs-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "contents",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "head-title",
                                                children: t("home.title")
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    t("home.subtitle"),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "header-button",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/auth/register",
                                                    className: "btn btn-border-filled",
                                                    children: t("home.getstart")
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "features",
                className: "section",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "features-text section-header text-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                className: "section-title",
                                                children: [
                                                    " ",
                                                    t("home.title2")
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "desc-text",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: t("home.subtitle2")
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row featured-bg",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6 col-md-6 col-xs-12 p-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "feature-item featured-border1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icons",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "lni-users"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "feature-info float-left",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                        children: [
                                                            " ",
                                                            t("home.signup")
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            t("home.p1"),
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            " ",
                                                            t("home.p2"),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6 col-md-6 col-xs-12 p-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "feature-item featured-border2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icons",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "lni lni-user"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "feature-info float-left",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                        children: [
                                                            t("home.completeprofile"),
                                                            " "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            t("home.p3"),
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            " ",
                                                            t("home.p4"),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6 col-md-6 col-xs-12 p-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "feature-item featured-border1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icons",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "lni lni-layers "
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "feature-info float-left",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        children: t("home.takesurvey")
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            t("home.p5"),
                                                            "  ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            "  ",
                                                            t("home.p6"),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6 col-md-6 col-xs-12 p-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "feature-item featured-border2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icons",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "lni lni-money-protection"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "feature-info float-left",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                        children: [
                                                            " ",
                                                            t("home.earnrewards")
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            t("home.p7"),
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            "  ",
                                                            t("home.p8"),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "business-plan",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6 col-md-12 pl-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "business-item-info",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                            children: [
                                                t("home.joinrewards"),
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: t("home.p9")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "btn btn-common",
                                            href: "/auth/register",
                                            children: t("home.joinnow")
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6 col-md-12 pt-70",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "business-item-img",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/images/banner2.png",
                                        className: "img-fluid",
                                        alt: ""
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    id: "footer-Content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "footer-logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                width: "200",
                                                src: "/images/log.png",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "widget",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "block-title",
                                                    children: t("footer.getintouch")
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "menu",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    target: "_blank",
                                                                    href: "mailto:sales@wolfinsights.com",
                                                                    children: "sales@opinion-nation.com"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    target: "_blank",
                                                                    href: "mailto:info@opinion-nation.com",
                                                                    children: "info@opinion-nation.com"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "tel:+1 2178230316",
                                                                    children: "+1 2178230316"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "widget",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "block-title",
                                                    children: t("footer.quicklinks")
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "menu",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                onClick: ()=>routeTo("/how-it-works"),
                                                                children: t("footer.howitworks")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                onClick: ()=>routeTo("/about"),
                                                                children: t("footer.about")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                onClick: ()=>routeTo("/reward"),
                                                                children: t("footer.rewards")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                onClick: ()=>routeTo("/contact"),
                                                                children: t("footer.contact")
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "widget",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "block-title",
                                                    children: t("footer.company")
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "menu",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                onClick: ()=>routeTo("/privacy-policy"),
                                                                children: t("footer.privacy")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                onClick: ()=>routeTo("/term-of-use"),
                                                                children: t("footer.termsofuse")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                onClick: ()=>routeTo("/cookie-pol"),
                                                                children: t("footer.cookiepolicy")
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "widget",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "block-title",
                                                    children: t("footer.social")
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "menu social-links",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa fa-instagram"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa fa-linkedin"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa fa-facebook"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa fa-twitter"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "copyright",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "row",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-12",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "site-info text-center",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "\xa9 2023 Opinion Nation, ",
                                                    t("footer.allseatreserved")
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Translations_HomeTranslate = ((/* unused pure expression or super */ null && (HomeTranslate)));

// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
;// CONCATENATED MODULE: ./pages/index.tsx



const Home = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(HomeTranslate, {});
};
/* harmony default export */ const pages = (Home);
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
var __webpack_exports__ = __webpack_require__.X(0, [6215], () => (__webpack_exec__(7297)));
module.exports = __webpack_exports__;

})();