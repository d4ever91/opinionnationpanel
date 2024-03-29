"use strict";
exports.id = 880;
exports.ids = [880];
exports.modules = {

/***/ 7689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ Pagination)
/* harmony export */ });
const Pagination = {
    limit: 10,
    pageNo: 1,
    skip: 0
};


/***/ }),

/***/ 2040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BD": () => (/* binding */ insertCategory),
/* harmony export */   "BF": () => (/* binding */ aggregateCategories),
/* harmony export */   "b5": () => (/* binding */ findCategory)
/* harmony export */ });
/* unused harmony exports findCategories, findCategoryById */
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8105);


async function findCategories(body) {
    return await CategoryModel.find(body).lean();
}
async function findCategoryById(categoryId) {
    return await CategoryModel.findOne({
        isDeleted: false,
        _id: new mongoose.Types.ObjectId(categoryId)
    });
}
async function findCategory(body) {
    return await _lib_models__WEBPACK_IMPORTED_MODULE_1__/* .CategoryModel.findOne */ .N_.findOne(body);
}
async function insertCategory(data) {
    const user = await _lib_models__WEBPACK_IMPORTED_MODULE_1__/* .CategoryModel.create */ .N_.create({
        ...data
    });
    return user;
}
async function aggregateCategories(body) {
    return await _lib_models__WEBPACK_IMPORTED_MODULE_1__/* .CategoryModel.aggregate */ .N_.aggregate(body);
}


/***/ }),

/***/ 5827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rO": () => (/* binding */ findCountries)
/* harmony export */ });
/* unused harmony exports findCountryById, findCountry, insertCountry, aggregateCountries */
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8105);


async function findCountries(body) {
    return await _lib_models__WEBPACK_IMPORTED_MODULE_1__/* .CountryModel.find */ .K_.find(body).lean();
}
async function findCountryById(userId) {
    return await CountryModel.findOne({
        isDeleted: false,
        _id: new mongoose.Types.ObjectId(userId)
    });
}
async function findCountry(username) {
    return await CountryModel.findOne({
        username
    });
}
async function insertCountry(data) {
    const user = await CountryModel.create({
        ...data
    });
    return user;
}
async function aggregateCountries(body) {
    return await CountryModel.aggregate(body);
}


/***/ }),

/***/ 880:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BD": () => (/* reexport safe */ _category__WEBPACK_IMPORTED_MODULE_4__.BD),
/* harmony export */   "BF": () => (/* reexport safe */ _category__WEBPACK_IMPORTED_MODULE_4__.BF),
/* harmony export */   "GY": () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_1__.GY),
/* harmony export */   "Jz": () => (/* reexport safe */ _survey__WEBPACK_IMPORTED_MODULE_5__.Jz),
/* harmony export */   "TP": () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_1__.TP),
/* harmony export */   "X8": () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_1__.X8),
/* harmony export */   "_Y": () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_1__._Y),
/* harmony export */   "b5": () => (/* reexport safe */ _category__WEBPACK_IMPORTED_MODULE_4__.b5),
/* harmony export */   "d4": () => (/* reexport safe */ _module__WEBPACK_IMPORTED_MODULE_2__.d4),
/* harmony export */   "e_": () => (/* reexport safe */ _survey__WEBPACK_IMPORTED_MODULE_5__.e_),
/* harmony export */   "kM": () => (/* reexport safe */ _question__WEBPACK_IMPORTED_MODULE_7__.kM),
/* harmony export */   "oe": () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_1__.oe),
/* harmony export */   "pE": () => (/* reexport safe */ _survey__WEBPACK_IMPORTED_MODULE_5__.pE),
/* harmony export */   "rO": () => (/* reexport safe */ _country__WEBPACK_IMPORTED_MODULE_3__.rO)
/* harmony export */ });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8609);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7549);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5983);
/* harmony import */ var _country__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5827);
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2040);
/* harmony import */ var _survey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(906);
/* harmony import */ var _summary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(120);
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(104);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_token__WEBPACK_IMPORTED_MODULE_0__]);
_token__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d4": () => (/* binding */ findModules)
/* harmony export */ });
/* unused harmony exports findModuleById, findModule, updateModuleById, insertModule */
/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8105);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);


async function findModuleById(moduleId) {
    return await ModuleModel.findOne({
        _id: new mongoose.Types.ObjectId(moduleId)
    });
}
async function findModule(data) {
    return await ModuleModel.findOne(data);
}
async function updateModuleById(id, data) {
    return await ModuleModel.findOneAndUpdate({
        _id: new mongoose.Types.ObjectId(id)
    }, {
        $set: data
    }, {
        new: true
    });
}
async function findModules(body) {
    return await _lib_models__WEBPACK_IMPORTED_MODULE_0__/* .ModuleModel.find */ .Qx.find(body).lean();
}
async function insertModule(data) {
    const module = await ModuleModel.create({
        ...data
    });
    return module;
}


/***/ }),

/***/ 120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports findSummaryById, findSummary, updateSummaryById, findSummarys, insertSummary */
/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8105);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);


async function findSummaryById(moduleId) {
    return await SummaryModel.findOne({
        _id: new mongoose.Types.ObjectId(moduleId)
    });
}
async function findSummary(data) {
    return await SummaryModel.findOne(data);
}
async function updateSummaryById(id, data) {
    return await SummaryModel.findOneAndUpdate({
        _id: new mongoose.Types.ObjectId(id)
    }, {
        $set: data
    }, {
        new: true
    });
}
async function findSummarys(body) {
    return await SummaryModel.find(body).lean();
}
async function insertSummary(data) {
    const module = await SummaryModel.create({
        ...data
    });
    return module;
}


/***/ }),

/***/ 906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$o": () => (/* binding */ findSurvey),
  "e_": () => (/* binding */ findSurveys),
  "Jz": () => (/* binding */ findSurveysWithPagination),
  "pE": () => (/* binding */ insertSurvey)
});

// UNUSED EXPORTS: aggregateSurveys, findSurveyById, updateSurveyById

// EXTERNAL MODULE: ./lib/constants/pagination.ts
var pagination = __webpack_require__(7689);
// EXTERNAL MODULE: ./lib/models/index.ts + 9 modules
var models = __webpack_require__(8105);
;// CONCATENATED MODULE: ./lib/constants/survey.ts
const SurveyStatus = [
    {
        label: "Active",
        value: 1,
        color: "blue"
    },
    {
        label: "Paused",
        value: 2,
        color: "blue"
    },
    {
        label: "Draft",
        value: 3,
        color: "blue"
    },
    {
        label: "Closed",
        value: 4,
        color: "blue"
    }
];

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
;// CONCATENATED MODULE: ./lib/middlewares/mongo-service/survey.ts




async function findSurveys(body) {
    return await models/* SurveyModel.find */.fA.find(body).lean();
}
async function findSurvey(body) {
    return await models/* SurveyModel.findOne */.fA.findOne(body);
}
async function findSurveysWithPagination(body) {
    let pageNo = Number(body.pageNo) || pagination/* Pagination.pageNo */.t.pageNo;
    let skip = Number(pageNo) - 1 || pagination/* Pagination.skip */.t.skip;
    let limit = Number(body.limit) || pagination/* Pagination.limit */.t.limit;
    skip = skip * limit;
    body.key = body.key || "createdAt";
    body.value = body.value || -1;
    var result = {};
    var countries = await models/* CountryModel.aggregate */.K_.aggregate([
        {
            $match: {
                isDeleted: false
            }
        },
        {
            $lookup: {
                from: "surveys",
                localField: "_id",
                foreignField: "country",
                as: "survey"
            }
        },
        {
            $unwind: "$survey"
        },
        {
            $group: {
                _id: "$_id",
                name: {
                    $first: "$name"
                },
                count: {
                    $sum: 1
                }
            }
        }
    ]);
    var users = await models/* UserModel.aggregate */.T_.aggregate([
        {
            $match: {
                isDeleted: false
            }
        },
        {
            $lookup: {
                from: "surveys",
                localField: "_id",
                foreignField: "user",
                as: "survey"
            }
        },
        {
            $unwind: "$survey"
        },
        {
            $group: {
                _id: "$_id",
                email: {
                    $first: "$email"
                },
                count: {
                    $sum: 1
                }
            }
        }
    ]);
    var statuses = await models/* SurveyModel.aggregate */.fA.aggregate([
        {
            $match: {
                isDeleted: false
            }
        },
        {
            $group: {
                _id: "$status",
                value: {
                    $first: "$status"
                },
                count: {
                    $sum: 1
                }
            }
        }
    ]);
    var totalCount = await models/* SurveyModel.countDocuments */.fA.countDocuments(body.qry);
    var surveys = await models/* SurveyModel.aggregate */.fA.aggregate([
        {
            $match: body.qry
        },
        {
            $sort: {
                [body.key]: body.value
            }
        },
        {
            $skip: skip
        },
        {
            $limit: limit
        },
        {
            $lookup: {
                from: "countries",
                localField: "country",
                foreignField: "_id",
                as: "country"
            }
        },
        {
            $unwind: "$country"
        },
        {
            $lookup: {
                from: "categories",
                localField: "category",
                foreignField: "_id",
                as: "category"
            }
        },
        {
            $unwind: "$category"
        },
        {
            $lookup: {
                from: "users",
                localField: "user",
                foreignField: "_id",
                as: "user"
            }
        },
        {
            $unwind: "$user"
        },
        {
            $lookup: {
                from: "summaries",
                localField: "_id",
                foreignField: "surveyId",
                as: "summary"
            }
        },
        {
            $project: {
                surveyCode: 1,
                surveyName: 1,
                loi: 1,
                cpi: 1,
                cost: 1,
                conversion: 1,
                user: "$user.email",
                category: "$category.name",
                country: "$country.name",
                countryCode: "$country.code",
                status: 1,
                requiredCompletes: 1,
                complete: {
                    $size: "$summary"
                }
            }
        }, 
    ]);
    var statusdata = statuses.filter((statuss)=>statuss.label = SurveyStatus.find((surveystatus)=>surveystatus.value == statuss.value).label);
    result.surveys = surveys;
    result.statuses = statusdata;
    result.countries = countries;
    result.users = users;
    result.meta = {
        limit: Number(limit),
        pageNo: Number(pageNo),
        total: totalCount
    };
    return result;
}
async function findSurveyById(userId) {
    return await SurveyModel.findOne({
        isDeleted: false,
        _id: new mongoose.Types.ObjectId(userId)
    });
}
async function updateSurveyById(id, data) {
    return await SurveyModel.findOneAndUpdate({
        _id: new mongoose.Types.ObjectId(id)
    }, {
        $set: data
    }, {
        new: true
    });
}
async function insertSurvey(data) {
    const user = await models/* SurveyModel.create */.fA.create({
        ...data
    });
    return user;
}
async function aggregateSurveys(body) {
    return await SurveyModel.aggregate(body);
}


/***/ }),

/***/ 8609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports findTokenByIdAndType, findAndDeleteTokenByIdAndType, createToken */
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nanoid__WEBPACK_IMPORTED_MODULE_0__]);
nanoid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function findTokenByIdAndType(db, id, type) {
    return db.collection("tokens").findOne({
        _id: id,
        type
    });
}
function findAndDeleteTokenByIdAndType(db, id, type) {
    return db.collection("tokens").findOneAndDelete({
        _id: id,
        type
    }).then(({ value  })=>value);
}
async function createToken(db, { creatorId , type , expireAt  }) {
    const securedTokenId = nanoid(32);
    const token = {
        _id: securedTokenId,
        creatorId,
        type,
        expireAt
    };
    await db.collection("tokens").insertOne(token);
    return token;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GY": () => (/* binding */ findUserByEmail),
/* harmony export */   "TP": () => (/* binding */ updateUserById),
/* harmony export */   "X8": () => (/* binding */ findUserWithEmailAndPassword),
/* harmony export */   "_Y": () => (/* binding */ insertUser),
/* harmony export */   "oe": () => (/* binding */ findUser)
/* harmony export */ });
/* unused harmony exports findUserForAuth, findUsers, findUsersWithPagination, findUserById, findUserByUsername, updateUserPasswordByOldPassword, UNSAFE_updateUserPassword, aggregateUsers */
/* harmony import */ var _lib_constants_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7689);
/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8105);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);




async function findUserWithEmailAndPassword(email, password) {
    const user = await _lib_models__WEBPACK_IMPORTED_MODULE_1__/* .UserModel.findOne */ .T_.findOne({
        email,
        isDeleted: false
    }).lean();
    if (user && await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(password, user.password)) {
        return {
            ...user
        };
    }
    return null;
}
async function findUserForAuth(userId) {
    const user = await UserModel.findOne({
        _id: new mongoose.Types.ObjectId(userId),
        isDeleted: false
    });
    return user;
}
async function findUsers(body) {
    return await UserModel.find(body).lean();
}
async function findUser(body) {
    return await _lib_models__WEBPACK_IMPORTED_MODULE_1__/* .UserModel.findOne */ .T_.findOne(body).lean();
}
async function findUsersWithPagination(body) {
    let pageNo = Number(body.pageNo) || Pagination.pageNo;
    let skip = Number(pageNo) - 1 || Pagination.skip;
    let limit = Number(body.limit) || Pagination.limit;
    skip = skip * limit;
    body.limit = body.limit || 10;
    body.key = body.key || "createdAt";
    body.value = body.value || "-1";
    var result = {};
    var totalCount = await UserModel.countDocuments(body);
    var users = await UserModel.find(body).limit(body.limit).skip(skip).sort({
        [body.key]: body.value
    });
    result.users = users;
    result.meta = {
        limit: Number(limit),
        pageNo: Number(pageNo),
        total: totalCount
    };
    return result;
}
async function findUserById(userId) {
    return await UserModel.findOne({
        isDeleted: false,
        _id: new mongoose.Types.ObjectId(userId)
    });
}
async function findUserByUsername(username) {
    return await UserModel.findOne({
        username
    });
}
async function findUserByEmail(email) {
    return await _lib_models__WEBPACK_IMPORTED_MODULE_1__/* .UserModel.findOne */ .T_.findOne({
        email,
        isDeleted: false
    }).lean();
}
async function updateUserById(id, data) {
    return await _lib_models__WEBPACK_IMPORTED_MODULE_1__/* .UserModel.findOneAndUpdate */ .T_.findOneAndUpdate({
        _id: new (mongoose__WEBPACK_IMPORTED_MODULE_3___default().Types.ObjectId)(id)
    }, {
        $set: data
    }, {
        new: true
    });
}
async function insertUser(data) {
    // const password = await bcrypt.hash(data.password, 10);
    data.emailToken = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().hash(data.firstName, 10);
    const user = await _lib_models__WEBPACK_IMPORTED_MODULE_1__/* .UserModel.create */ .T_.create({
        ...data
    });
    return user;
}
async function updateUserPasswordByOldPassword(id, oldPassword, newPassword) {
    const user = await UserModel.findOne(new mongoose.Types.ObjectId(id));
    if (!user) return false;
    const matched = await bcrypt.compare(oldPassword, user.password);
    if (!matched) return false;
    const password = await bcrypt.hash(newPassword, 10);
    await UserModel.updateOne({
        _id: new mongoose.Types.ObjectId(id)
    }, {
        $set: {
            password
        }
    });
    return true;
}
async function UNSAFE_updateUserPassword(id, newPassword) {
    const password = await bcrypt.hash(newPassword, 10);
    await UserModel.updateOne({
        _id: new mongoose.Types.ObjectId(id)
    }, {
        $set: {
            password
        }
    });
}
async function aggregateUsers(body) {
    return await UserModel.aggregate(body);
}


/***/ })

};
;