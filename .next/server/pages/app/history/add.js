"use strict";
(() => {
var exports = {};
exports.id = 9879;
exports.ids = [9879];
exports.modules = {

/***/ 6525:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ getCountriesList)
/* harmony export */ });
/* unused harmony export COUNTRY_API_PATH */
/* harmony import */ var _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(921);
/* harmony import */ var _lib_store_countrySlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__]);
_lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const COUNTRY_API_PATH = {
    GET: "/app/country",
    CREATE: "/app/country"
};
const getCountriesList = ()=>async (dispatch)=>{
        {
            return _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get(COUNTRY_API_PATH.GET).then((response)=>{
                var countries = response.result;
                dispatch((0,_lib_store_countrySlice__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U)(countries));
            });
        }
    };

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ get),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isLoading: true,
    countries: []
};
const countrySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "country",
    initialState,
    reducers: {
        get (state, action) {
            state = {
                ...action.payload,
                isLoading: false
            };
            return state;
        }
    }
});
const { get  } = countrySlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countrySlice.reducer);


/***/ }),

/***/ 2372:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSurvey": () => (/* binding */ AddSurvey),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Route_WithAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7639);
/* harmony import */ var _layouts_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5500);
/* harmony import */ var _components_App_Header_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _components_App_Form_FormLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1236);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_action_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4702);
/* harmony import */ var _lib_action_country__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6525);
/* harmony import */ var _lib_action_category__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3768);
/* harmony import */ var _lib_action_survey__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2821);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Route_WithAuth__WEBPACK_IMPORTED_MODULE_3__, _components_App_Header_PageHeader__WEBPACK_IMPORTED_MODULE_5__, _lib_action_user__WEBPACK_IMPORTED_MODULE_9__, _lib_action_country__WEBPACK_IMPORTED_MODULE_10__, _lib_action_category__WEBPACK_IMPORTED_MODULE_11__, _lib_action_survey__WEBPACK_IMPORTED_MODULE_12__]);
([_components_Route_WithAuth__WEBPACK_IMPORTED_MODULE_3__, _components_App_Header_PageHeader__WEBPACK_IMPORTED_MODULE_5__, _lib_action_user__WEBPACK_IMPORTED_MODULE_9__, _lib_action_country__WEBPACK_IMPORTED_MODULE_10__, _lib_action_category__WEBPACK_IMPORTED_MODULE_11__, _lib_action_survey__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const AddSurvey = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    const { users  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.user);
    const { countries  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.country);
    const { categories  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.category);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getCountries();
        getUsers();
        getCategories();
    }, []);
    const getCountries = async ()=>{
        await dispatch((0,_lib_action_country__WEBPACK_IMPORTED_MODULE_10__/* .getCountriesList */ .y)());
    };
    const getUsers = async ()=>{
        await dispatch((0,_lib_action_user__WEBPACK_IMPORTED_MODULE_9__/* .getUsersList */ .Fp)());
    };
    const getCategories = async ()=>{
        await dispatch((0,_lib_action_category__WEBPACK_IMPORTED_MODULE_11__/* .getCategoriesList */ .vb)());
    };
    const formInputs = [
        {
            key: "surveyName",
            label: "Survey Name",
            type: "text",
            validationType: "string",
            rules: [
                {
                    type: "required",
                    params: [
                        "Survey Name  is required"
                    ]
                }, 
            ],
            size: "md"
        },
        {
            key: "loi",
            label: "LOI",
            type: "number",
            validationType: "number",
            rules: [
                {
                    type: "required",
                    params: [
                        "LOI is required"
                    ]
                }, 
            ],
            size: "md"
        },
        {
            key: "conversion",
            label: "Conversion",
            type: "number",
            validationType: "string",
            rules: [
                {
                    type: "required",
                    params: [
                        "Conversion is required"
                    ]
                }, 
            ],
            size: "md"
        },
        {
            key: "cpi",
            label: "CPI",
            type: "number",
            validationType: "string",
            rules: [
                {
                    type: "required",
                    params: [
                        "CPI is required"
                    ]
                }, 
            ],
            size: "md"
        },
        {
            key: "requiredCompletes",
            label: "Required Completes",
            type: "number",
            validationType: "string",
            rules: [
                {
                    type: "required",
                    params: [
                        "Complete is required"
                    ]
                }, 
            ],
            size: "md"
        },
        {
            key: "category",
            label: "Category",
            type: "select",
            validationType: "object",
            rules: [
                {
                    type: "required",
                    params: [
                        "Category is required"
                    ]
                }, 
            ],
            options: categories && categories.map((option)=>({
                    ...option,
                    label: option.name,
                    value: option._id
                })),
            size: "md"
        },
        {
            key: "user",
            label: "Manager",
            type: "select",
            validationType: "object",
            rules: [
                {
                    type: "required",
                    params: [
                        "Manger is required"
                    ]
                }, 
            ],
            options: users && users.map((option)=>({
                    ...option,
                    label: option.email,
                    value: option._id
                })),
            size: "md"
        },
        {
            key: "country",
            label: "Countries",
            type: "select",
            validationType: "object",
            rules: [
                {
                    type: "required",
                    params: [
                        "Country is required"
                    ]
                }, 
            ],
            options: countries && countries.map((option)=>({
                    ...option,
                    label: option.name,
                    value: option._id
                })),
            size: "md"
        },
        {
            key: "language",
            label: "Languages",
            type: "select",
            validationType: "object",
            rules: [
                {
                    type: "required",
                    params: [
                        "Country is required"
                    ]
                }, 
            ],
            options: countries && countries.map((option)=>({
                    ...option,
                    label: option.name,
                    value: option._id
                })),
            size: "md"
        },
        {
            key: "surveyLiveUrl",
            label: "Survey Live URL",
            type: "text",
            validationType: "string",
            rules: [
                {
                    type: "required",
                    params: [
                        "Survey Live URL is required"
                    ]
                }, 
            ],
            size: "md"
        },
        {
            key: "surveyTestUrl",
            label: "Survey Test URL",
            type: "text",
            validationType: "string",
            rules: [
                {
                    type: "required",
                    params: [
                        "Survey Test URL is required"
                    ]
                }, 
            ],
            size: "md"
        }, 
    ];
    const submitAction = async (values)=>{
        await dispatch((0,_lib_action_survey__WEBPACK_IMPORTED_MODULE_12__/* .addSurvey */ .ME)(values));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Seo__WEBPACK_IMPORTED_MODULE_4__/* .Seo */ .p, {
                title: "Surveys"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_App_Header_PageHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: "New Survey"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_App_Form_FormLayout__WEBPACK_IMPORTED_MODULE_6__/* .FormLayout */ .l, {
                formInputs: formInputs,
                submitAction: submitAction
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.resolve((0,_components_Route_WithAuth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(AddSurvey)), {
    ssr: false
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 1929:
/***/ ((module) => {

module.exports = require("react-select");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,7142,5500,8137,921,183,6452,4702,3768,622,1236,2821], () => (__webpack_exec__(2372)));
module.exports = __webpack_exports__;

})();