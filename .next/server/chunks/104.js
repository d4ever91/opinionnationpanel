"use strict";
exports.id = 104;
exports.ids = [104];
exports.modules = {

/***/ 104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O4": () => (/* binding */ findQuestion),
/* harmony export */   "cN": () => (/* binding */ insertQuestion),
/* harmony export */   "kM": () => (/* binding */ findQuestions)
/* harmony export */ });
/* unused harmony exports findQuestionById, updateQuestionById */
/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8105);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);


async function findQuestionById(moduleId) {
    return await QuestionModel.findOne({
        _id: new mongoose.Types.ObjectId(moduleId)
    });
}
async function findQuestion(data) {
    return await _lib_models__WEBPACK_IMPORTED_MODULE_0__/* .QuestionModel.findOne */ .WA.findOne(data);
}
async function updateQuestionById(id, data) {
    return await QuestionModel.findOneAndUpdate({
        _id: new mongoose.Types.ObjectId(id)
    }, {
        $set: data
    }, {
        new: true
    });
}
async function findQuestions(body) {
    return await _lib_models__WEBPACK_IMPORTED_MODULE_0__/* .QuestionModel.find */ .WA.find(body).lean();
}
async function insertQuestion(data) {
    const module = await _lib_models__WEBPACK_IMPORTED_MODULE_0__/* .QuestionModel.create */ .WA.create({
        ...data
    });
    return module;
}


/***/ }),

/***/ 8105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N_": () => (/* reexport */ category),
  "K_": () => (/* reexport */ country),
  "Qx": () => (/* reexport */ models_module),
  "WA": () => (/* reexport */ question),
  "fA": () => (/* reexport */ survey),
  "T_": () => (/* reexport */ user)
});

// UNUSED EXPORTS: AdminModel, InvoiceModel, SummaryModel

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./lib/models/user.ts

const UserSchema = new external_mongoose_.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false
    },
    company: {
        type: String,
        required: false
    },
    uuid: {
        type: String,
        required: false
    },
    inviteCode: {
        type: String,
        required: false
    },
    emailToken: {
        type: String,
        required: false
    },
    emailVerified: {
        type: Boolean,
        required: false,
        default: false
    },
    platform: {
        type: String,
        required: false
    },
    provider: {
        type: String,
        required: false
    },
    facebookId: {
        type: String,
        required: false
    },
    googleId: {
        type: String,
        required: false
    },
    lastLogin: {
        type: Date,
        required: false
    },
    isSocialLogin: {
        type: Boolean,
        default: false
    },
    isRecieveEmailNotification: {
        type: Boolean,
        default: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});
UserSchema.index({
    firstName: 1
});
UserSchema.index({
    lastName: 1
});
UserSchema.index({
    email: 1
});
UserSchema.index({
    company: 1
});
const UserModel = (external_mongoose_default()).models.User || external_mongoose_default().model("User", UserSchema);
/* harmony default export */ const user = (UserModel);

;// CONCATENATED MODULE: ./lib/models/module.ts

const ModuleSchema = new external_mongoose_.Schema({
    name: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    route: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});
const ModuleModel = (external_mongoose_default()).models.Module || external_mongoose_default().model("Module", ModuleSchema);
/* harmony default export */ const models_module = (ModuleModel);

;// CONCATENATED MODULE: ./lib/models/country.ts

const CountrySchema = new external_mongoose_.Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});
CountrySchema.index({
    code: 1
});
CountrySchema.index({
    name: 1
});
const CountryModel = (external_mongoose_default()).models.Country || external_mongoose_default().model("Country", CountrySchema);
/* harmony default export */ const country = (CountryModel);

;// CONCATENATED MODULE: ./lib/models/category.ts

const CategorySchema = new external_mongoose_.Schema({
    moduleKey: {
        type: String,
        default: "category"
    },
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});
CategorySchema.index({
    name: 1
});
const CategoryModel = (external_mongoose_default()).models.Category || external_mongoose_default().model("Category", CategorySchema);
/* harmony default export */ const category = (CategoryModel);

;// CONCATENATED MODULE: ./lib/models/survey.ts

var SurveyStatusEnum;
(function(SurveyStatusEnum) {
    SurveyStatusEnum[SurveyStatusEnum["active"] = 1] = "active";
    SurveyStatusEnum[SurveyStatusEnum["paused"] = 2] = "paused";
    SurveyStatusEnum[SurveyStatusEnum["draft"] = 3] = "draft";
    SurveyStatusEnum[SurveyStatusEnum["closed"] = 4] = "closed";
})(SurveyStatusEnum || (SurveyStatusEnum = {}));
const SurveySchema = new external_mongoose_.Schema({
    moduleKey: {
        type: String,
        default: "survey"
    },
    surveyCode: {
        type: Number,
        required: true
    },
    surveyName: {
        type: String,
        required: true
    },
    loi: {
        type: Number,
        required: true
    },
    cpi: {
        type: Number,
        required: true
    },
    requiredCompletes: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        default: 0
    },
    conversion: {
        type: Number,
        required: true
    },
    user: {
        type: external_mongoose_.Schema.Types.ObjectId,
        ref: "User"
    },
    country: {
        type: external_mongoose_.Schema.Types.ObjectId,
        ref: "Country"
    },
    category: {
        type: external_mongoose_.Schema.Types.ObjectId,
        ref: "Category"
    },
    language: {
        type: external_mongoose_.Schema.Types.ObjectId,
        ref: "Language"
    },
    createdBy: {
        type: external_mongoose_.Schema.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: Number,
        enum: [
            SurveyStatusEnum.active,
            SurveyStatusEnum.paused,
            SurveyStatusEnum.draft,
            SurveyStatusEnum.closed
        ],
        default: SurveyStatusEnum.draft
    },
    quota: [
        {
            name: {
                type: external_mongoose_.Schema.Types.ObjectId,
                ref: "Qualification"
            },
            value: [
                {
                    type: String,
                    default: ""
                }
            ]
        }
    ],
    surveyLiveUrl: {
        type: String,
        required: false,
        default: ""
    },
    surveyTestUrl: {
        type: String,
        required: false,
        default: ""
    },
    startDate: {
        type: Date,
        default: ""
    },
    endDate: {
        type: Date,
        default: ""
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});
SurveySchema.index({
    surveyCode: 1
});
SurveySchema.index({
    surveyName: 1
});
SurveySchema.index({
    user: 1
});
SurveySchema.index({
    surveyStatus: 1
});
SurveySchema.index({
    createdBy: 1
});
const SurveyModel = (external_mongoose_default()).models.Survey || external_mongoose_default().model("Survey", SurveySchema);
/* harmony default export */ const survey = (SurveyModel);

;// CONCATENATED MODULE: ./lib/models/summary.ts

const SummarySchema = new external_mongoose_.Schema({
    survey: {
        type: external_mongoose_.Schema.Types.ObjectId,
        ref: "Survey"
    },
    projectCpi: {
        type: String,
        default: ""
    },
    supplierCpi: {
        type: String,
        default: ""
    },
    respondedMeta: {
        type: Object,
        default: {}
    },
    surveyMeta: {
        type: Object,
        default: {}
    },
    supplierIdentifier: {
        type: String,
        default: ""
    },
    userIdentifier: {
        type: String,
        default: ""
    },
    ipAddress: {
        type: String,
        default: ""
    },
    browserDetail: {
        type: String,
        default: ""
    },
    isProxy: {
        type: Boolean,
        default: false
    },
    country: {
        type: String,
        default: ""
    },
    region: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    zipCode: {
        type: String,
        default: ""
    },
    risk: {
        type: Number,
        default: 0
    },
    latitude: {
        type: Number,
        default: 0
    },
    longitude: {
        type: Number,
        default: 0
    },
    osName: {
        type: String,
        default: ""
    },
    // deviceType:{
    //     type:Number,
    //     enum:[ constants.DEVICE_TYPE.MOBILE , constants.DEVICE_TYPE.TABLET ,  constants.DEVICE_TYPE.DESKTOP ],
    // },
    startTime: {
        type: Date,
        default: ""
    },
    duration: {
        type: Number,
        default: null
    },
    endTime: {
        type: Date,
        default: ""
    },
    isPreScreenValid: {
        type: Boolean,
        default: true
    },
    isProgress: {
        type: Boolean,
        default: true
    },
    prescreenStart: {
        type: Boolean,
        default: false
    },
    questionCount: {
        type: Number,
        default: 0
    },
    isSurveyDone: {
        type: Boolean,
        default: false
    },
    lastPageSeen: {
        type: String,
        default: ""
    },
    liveLink: {
        type: String,
        default: ""
    },
    // status:{
    //     type:String,
    //     enum:[
    //           constants.PROJECT_REDIRECT_STATUS.SURVEY_DROP_OUT.value,
    //           constants.PROJECT_REDIRECT_STATUS.SURVEY_COMPLETE.value, 
    //           constants.PROJECT_REDIRECT_STATUS.SURVEY_ACTIVE.value, 
    //           constants.PROJECT_REDIRECT_STATUS.SURVEY_INACTIVE.value , 
    //           constants.PROJECT_REDIRECT_STATUS.SURVEY_PRESCREEN_DROP_OUT.value,
    //           constants.PROJECT_REDIRECT_STATUS.SURVEY_TERMINATE.value,
    //           constants.PROJECT_REDIRECT_STATUS.SURVEY_OVER_QUOTA.value,
    //           constants.PROJECT_REDIRECT_STATUS.SURVEY_QUALITY_TERMINATE.value,
    //           constants.PROJECT_REDIRECT_STATUS.SURVEY_PRESCREEN_TERMINATE.value,
    //           constants.PROJECT_REDIRECT_STATUS.SURVEY_CLOSE.value,
    //           constants.PROJECT_REDIRECT_STATUS.SURVEY_REJECTED.value,
    //           constants.PROJECT_REDIRECT_STATUS.SURVEY_APPROVED.value,
    //           constants.PROJECT_REDIRECT_STATUS.SURVEY_SPEEDER_TERMINATE.value,
    //           constants.PROJECT_REDIRECT_STATUS.SUVERY_MULTILINK_ALLOCATED.value,
    //         ],
    //     default:constants.PROJECT_REDIRECT_STATUS.SURVEY_PRESCREEN_DROP_OUT.value,
    // },
    isApproved: {
        type: Number,
        enum: [
            1,
            2,
            3
        ],
        default: 1
    },
    isSupplierApproved: {
        type: Number,
        enum: [
            1,
            2,
            3
        ],
        default: 1
    },
    statusDescription: {
        type: String,
        default: ""
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});
const SummaryModel = (external_mongoose_default()).models.Summary || external_mongoose_default().model("Summary", SummarySchema);
/* harmony default export */ const summary = ((/* unused pure expression or super */ null && (SummaryModel)));

;// CONCATENATED MODULE: ./lib/models/invoice.ts

const invoiceSchema = new (external_mongoose_default()).Schema({
    moduleKey: {
        type: String,
        default: "invoice"
    },
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        trim: true,
        default: ""
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
const Invoice = (external_mongoose_default()).models.Invoice || external_mongoose_default().model("Invoice", invoiceSchema);
/* harmony default export */ const invoice = ((/* unused pure expression or super */ null && (Invoice)));

;// CONCATENATED MODULE: ./lib/models/admin.ts

var AdminType;
(function(AdminType) {
    AdminType[AdminType["Admin"] = 1] = "Admin";
    AdminType[AdminType["Manager"] = 2] = "Manager";
})(AdminType || (AdminType = {}));
const AdminSchema = new external_mongoose_.Schema({
    moduleKey: {
        type: String,
        default: "admin"
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: false
    },
    role: {
        type: String,
        enum: [
            AdminType.Admin,
            AdminType.Manager
        ],
        default: AdminType.Admin
    },
    lastLogin: {
        type: Date,
        required: false
    },
    createdBy: {
        type: external_mongoose_.Schema.Types.ObjectId,
        ref: "Admin",
        required: false,
        default: null
    },
    module: [
        {
            type: external_mongoose_.Schema.Types.ObjectId,
            ref: "Module"
        }
    ],
    isRecieveEmailNotification: {
        type: Boolean,
        default: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});
AdminSchema.index({
    firstName: 1
});
AdminSchema.index({
    lastName: 1
});
AdminSchema.index({
    email: 1
});
AdminSchema.index({
    company: 1
});
const AdminModel = (external_mongoose_default()).models.Admin || external_mongoose_default().model("Admin", AdminSchema);
/* harmony default export */ const admin = ((/* unused pure expression or super */ null && (AdminModel)));

;// CONCATENATED MODULE: ./lib/models/question.ts

var QuestionType;
(function(QuestionType) {
    QuestionType[QuestionType["TEXT"] = 1] = "TEXT";
    QuestionType[QuestionType["RADIO"] = 2] = "RADIO";
    QuestionType[QuestionType["DROPDOWN"] = 3] = "DROPDOWN";
    QuestionType[QuestionType["CHECKBOX"] = 4] = "CHECKBOX";
})(QuestionType || (QuestionType = {}));
const QuestionSchema = new external_mongoose_.Schema({
    moduleKey: {
        type: String,
        default: "question"
    },
    category: {
        type: external_mongoose_.Schema.Types.ObjectId,
        ref: "Category"
    },
    questionName: {
        type: String,
        required: true
    },
    questionType: {
        type: Number,
        enum: [
            QuestionType.TEXT,
            QuestionType.RADIO,
            QuestionType.DROPDOWN,
            QuestionType.CHECKBOX
        ],
        default: QuestionType.TEXT
    },
    questionOption: [
        {
            optionId: {
                type: String
            },
            title: {
                type: String,
                default: ""
            },
            enable: {
                type: Boolean,
                default: true
            }
        }
    ],
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});
QuestionSchema.index({
    questionName: 1
});
const QuestionModel = (external_mongoose_default()).models.Question || external_mongoose_default().model("Question", QuestionSchema);
/* harmony default export */ const question = (QuestionModel);

;// CONCATENATED MODULE: ./lib/models/index.ts











/***/ })

};
;