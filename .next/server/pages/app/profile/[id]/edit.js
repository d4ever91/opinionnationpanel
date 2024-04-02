"use strict";
(() => {
var exports = {};
exports.id = 2689;
exports.ids = [2689];
exports.modules = {

/***/ 7099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ QuestionInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_2__);



function QuestionInput({ category , question , formikProps , push , remove , setFieldData  }) {
    switch(question.questionType){
        case 1:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                isInvalid: formikProps.errors[question._id] && formikProps.touched[question._id],
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                        style: {
                            fontWeight: "bold"
                        },
                        mb: "4",
                        className: "select",
                        children: question.questionName
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_2___default()), {
                        isMulti: true,
                        ...formikProps.getFieldProps(question._id),
                        onChange: (value)=>{
                            setFieldData(question._id, formikProps.values.data, push, remove, {
                                question: question._id,
                                category,
                                options: value
                            });
                        },
                        options: question.options,
                        placeholder: question.label,
                        closeMenuOnSelect: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
                        children: formikProps.errors[question._id]
                    })
                ]
            });
        case 2:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                isInvalid: formikProps.errors[question._id] && formikProps.touched[question._id],
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                        style: {
                            fontWeight: "bold"
                        },
                        mb: "4",
                        className: "select",
                        children: question.questionName
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                        ...formikProps.getFieldProps(question._id),
                        type: question.type,
                        placeholder: question.label,
                        size: question.size
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
                        children: formikProps.errors[question._id]
                    })
                ]
            });
        case 3:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                isInvalid: formikProps.errors[question._id] && formikProps.touched[question._id],
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                        style: {
                            fontWeight: "bold"
                        },
                        mb: "4",
                        className: "select",
                        children: question.questionName
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_2___default()), {
                        ...formikProps.getFieldProps(question._id),
                        onChange: (value)=>{
                            setFieldData(question._id, formikProps.values.data, push, remove, {
                                question: question._id,
                                category,
                                options: value.optionId
                            });
                        },
                        options: question.questionOption && question.questionOption.map((option)=>({
                                ...option,
                                label: option.title,
                                value: option.optionId
                            })),
                        isClearable: question.isClearable,
                        closeMenuOnSelect: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
                        children: formikProps.errors[question.key]
                    })
                ]
            });
        case 4:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                isInvalid: formikProps.errors[question._id] && formikProps.touched[question._id],
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                        style: {
                            fontWeight: "bold"
                        },
                        mb: "4",
                        className: "checkbox",
                        children: question.questionName
                    }),
                    question.questionOption.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                            mb: "2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
                                value: option.optionId,
                                onChange: (e)=>{
                                    setFieldData(question._id, formikProps.values.data, push, remove, {
                                        question: question._id,
                                        category,
                                        options: e.target.value
                                    });
                                },
                                children: option.title
                            })
                        }, option.optionId)),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
                        children: formikProps.errors[question._id]
                    })
                ]
            });
        default:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                isInvalid: formikProps.errors[question._id] && formikProps.touched[question._id],
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                        style: {
                            fontWeight: "bold"
                        },
                        mb: "4",
                        className: "checkbox",
                        children: question.questionName
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                        ...formikProps.getFieldProps(question._id),
                        type: question.type,
                        placeholder: question.label,
                        size: question.size
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
                        children: formikProps.errors[question._id]
                    })
                ]
            });
    }
}


/***/ }),

/***/ 1261:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export QuestionList */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _QuestionInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7099);
/* harmony import */ var _lib_action_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2830);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_action_profile__WEBPACK_IMPORTED_MODULE_5__]);
_lib_action_profile__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const QuestionList = ({ questions , category  })=>{
    const submitAction = async (values)=>{
        await (0,_lib_action_profile__WEBPACK_IMPORTED_MODULE_5__/* .updateProfileQuestion */ .x)(category, values);
    };
    const setFieldData = (questionId, values, push, remove, input)=>{
        var value = values.findIndex((value)=>value.question == questionId);
        if (value !== -1) remove(value);
        push(input);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
        onSubmit: (values)=>{
            submitAction(values);
        },
        validateOnBlur: false,
        validateOnChange: true,
        initialValues: {
            data: []
        },
        children: (formikProps)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {
                autoComplete: "off",
                noValidate: true,
                onSubmit: formikProps.handleSubmit,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        templateColumns: "repeat(1, 1fr)",
                        gap: 5,
                        children: questions.map((question, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
                                w: "100%",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_3__.FieldArray, {
                                    name: "data",
                                    children: ({ push , remove  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_QuestionInput__WEBPACK_IMPORTED_MODULE_4__/* .QuestionInput */ .Q, {
                                            setFieldData: setFieldData,
                                            push: push,
                                            remove: remove,
                                            category: category,
                                            formikProps: formikProps,
                                            question: question
                                        })
                                })
                            }, index))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        textTransform: "none",
                        type: "submit",
                        colorScheme: "blue",
                        mt: 4,
                        size: "md",
                        variant: "solid",
                        children: "Save"
                    })
                ]
            })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2830:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ updateProfileQuestion)
/* harmony export */ });
/* unused harmony export QUESTION_API_PATH */
/* harmony import */ var _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(921);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__]);
_lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const QUESTION_API_PATH = {
    POST: "/app/profile/question/update"
};
function updateProfileQuestion(id, body) {
    {
        return _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .ZP.post(QUESTION_API_PATH.POST + `/${id}`, body).then((response)=>response.result);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5319:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ getQuestionList)
/* harmony export */ });
/* unused harmony export QUESTION_API_PATH */
/* harmony import */ var _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(921);
/* harmony import */ var _lib_store_questionSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8792);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__]);
_lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const QUESTION_API_PATH = {
    GET: "/app/profile/question"
};
const getQuestionList = (id)=>async (dispatch)=>{
        {
            return _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get(QUESTION_API_PATH.GET + `/${id}`).then((response)=>{
                var countries = response.result;
                dispatch((0,_lib_store_questionSlice__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U)(countries));
            });
        }
    };

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ get),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isLoading: true,
    questions: []
};
const categorySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "question",
    initialState,
    reducers: {
        get (state, action) {
            state = {
                questions: action.payload,
                isLoading: false
            };
            return state;
        }
    }
});
const { get  } = categorySlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categorySlice.reducer);


/***/ }),

/***/ 8248:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsList": () => (/* binding */ QuestionsList),
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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Common_SpinnerLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4607);
/* harmony import */ var _lib_action_question__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5319);
/* harmony import */ var _components_App_Question_QuestionList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1261);
/* harmony import */ var _lib_action_category__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3768);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Route_WithAuth__WEBPACK_IMPORTED_MODULE_3__, _components_App_Header_PageHeader__WEBPACK_IMPORTED_MODULE_5__, _lib_action_question__WEBPACK_IMPORTED_MODULE_10__, _components_App_Question_QuestionList__WEBPACK_IMPORTED_MODULE_11__, _lib_action_category__WEBPACK_IMPORTED_MODULE_12__]);
([_components_Route_WithAuth__WEBPACK_IMPORTED_MODULE_3__, _components_App_Header_PageHeader__WEBPACK_IMPORTED_MODULE_5__, _lib_action_question__WEBPACK_IMPORTED_MODULE_10__, _components_App_Question_QuestionList__WEBPACK_IMPORTED_MODULE_11__, _lib_action_category__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const QuestionsList = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const { id  } = router.query;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    const { isLoading , questions  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.question);
    const { category  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.category);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (id) {
            getQuestions(id);
            getSingleCategory(id);
        }
    }, [
        id
    ]);
    const getQuestions = async (id)=>{
        await dispatch((0,_lib_action_question__WEBPACK_IMPORTED_MODULE_10__/* .getQuestionList */ .e)(id));
    };
    const getSingleCategory = async (id)=>{
        await dispatch((0,_lib_action_category__WEBPACK_IMPORTED_MODULE_12__/* .getCategory */ .n3)(id));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Seo__WEBPACK_IMPORTED_MODULE_4__/* .Seo */ .p, {
                title: category.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_App_Header_PageHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: category.name
            }),
            isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_SpinnerLayout__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_App_Question_QuestionList__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                questions: questions,
                category: category._id
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.resolve((0,_components_Route_WithAuth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(QuestionsList)), {
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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,7142,5500,8137,921,183,3768], () => (__webpack_exec__(8248)));
module.exports = __webpack_exports__;

})();