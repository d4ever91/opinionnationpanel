"use strict";
exports.id = 2821;
exports.ids = [2821];
exports.modules = {

/***/ 2821:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ME": () => (/* binding */ addSurvey),
/* harmony export */   "x6": () => (/* binding */ getSurveys)
/* harmony export */ });
/* unused harmony exports SURVEY_API_PATH, getSurveysList, getSurvey, updateSurvey, removeSurvey */
/* harmony import */ var _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(921);
/* harmony import */ var _lib_store_surveySlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(622);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__]);
_lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const SURVEY_API_PATH = {
    GET: "/app/survey",
    GETONE: "/app/survey/get",
    CREATE: "/app/survey/add",
    UPDATE: "/app/survey/update",
    REMOVE: "/app/survey/remove",
    STATUS: "/app/survey/status"
};
const getSurveys = (filters)=>async (dispatch)=>{
        {
            dispatch((0,_lib_store_surveySlice__WEBPACK_IMPORTED_MODULE_1__/* .load */ .zD)(true));
            return _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .ZP.post(SURVEY_API_PATH.GET, filters).then((response)=>{
                var result = response.result;
                dispatch((0,_lib_store_surveySlice__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U2)(result));
            }).catch((e)=>{
                dispatch((0,_lib_store_surveySlice__WEBPACK_IMPORTED_MODULE_1__/* .load */ .zD)(false));
            });
        }
    };
const getSurveysList = ()=>async (dispatch)=>{
        {
            dispatch(load(true));
            return nodepress.get(SURVEY_API_PATH.GET).then((response)=>{
                var result = response.result;
                dispatch(get(result));
            }).catch((e)=>{
                dispatch(load(false));
            });
        }
    };
const getSurvey = (id)=>async (dispatch)=>{
        {
            dispatch(load(true));
            return nodepress.get(SURVEY_API_PATH.GETONE + "/" + id).then((response)=>{
                var result = response.result;
                dispatch(single(result));
            }).catch((e)=>{
                dispatch(load(false));
            });
        }
    };
const addSurvey = (user)=>async (dispatch)=>{
        {
            dispatch((0,_lib_store_surveySlice__WEBPACK_IMPORTED_MODULE_1__/* .load */ .zD)(true));
            return _lib_services_nodepress__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .ZP.post(SURVEY_API_PATH.CREATE, user).then((response)=>{
                var survey = response.result;
                dispatch((0,_lib_store_surveySlice__WEBPACK_IMPORTED_MODULE_1__/* .add */ .IH)(survey));
            }).catch((e)=>{
                dispatch((0,_lib_store_surveySlice__WEBPACK_IMPORTED_MODULE_1__/* .load */ .zD)(false));
            });
        }
    };
const updateSurvey = (id, user)=>async (dispatch)=>{
        {
            dispatch(load(true));
            return nodepress.put(SURVEY_API_PATH.UPDATE + "/" + id, user).then((response)=>{
                var survey = response.result;
                dispatch(update(survey));
            }).catch((e)=>{
                dispatch(load(false));
            });
        }
    };
const removeSurvey = (_id)=>async (dispatch)=>{
        {
            dispatch(load(true));
            return nodepress.delete(SURVEY_API_PATH.REMOVE + "/" + _id).then((response)=>{
                var survey = response.result;
                dispatch(remove(survey));
            }).catch((e)=>{
                dispatch(load(false));
            });
        }
    };

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;