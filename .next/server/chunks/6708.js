"use strict";
exports.id = 6708;
exports.ids = [6708];
exports.modules = {

/***/ 6708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$s": () => (/* binding */ sendVerificationLink),
/* harmony export */   "HF": () => (/* binding */ sendInblue),
/* harmony export */   "NN": () => (/* binding */ sendForgetLink)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1845);

var SibApiV3Sdk = __webpack_require__(5711);
var defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;
var sgMail = new SibApiV3Sdk.TransactionalEmailsApi();
const sendInblue = (input)=>{
    const msg = {
        sender: {
            email: process.env.FROM_EMAIL,
            name: process.env.FROM_NAME
        },
        to: [
            {
                name: process.env.FROM_NAME,
                email: process.env.FROM_EMAIL
            }
        ],
        subject: "Opinion Nation",
        htmlContent: `Name : ${input.name} <br/> Email : ${input.email}<br/> Subject : ${input.subject}<br/> Message : ${input.message}`
    };
    sgMail.sendTransacEmail(msg).then(function(data) {
        return true;
    }, function(error) {
        return false;
    });
};
const sendVerificationLink = (input)=>{
    const msg = {
        sender: {
            email: process.env.FROM_EMAIL,
            name: process.env.FROM_NAME
        },
        to: [
            {
                name: input.name,
                email: input.email
            }
        ],
        subject: "Opinion Nation Verification Link",
        htmlContent: `Hi ${input.name} , <br/> <br/> Here is the verification link for registration . <br/> <br/> ${_config_config__WEBPACK_IMPORTED_MODULE_0__/* .BASE_PATH */ .GW}/auth/verification?token=${input.emailToken}`
    };
    console.log(msg);
    sgMail.sendTransacEmail(msg).then(function(data) {
        console.log(data);
        return true;
    }, function(error) {
        console.log(error);
        return false;
    });
};
const sendForgetLink = (input)=>{
    const msg = {
        sender: {
            email: process.env.FROM_EMAIL,
            name: process.env.FROM_NAME
        },
        to: [
            {
                name: input.name,
                email: input.email
            }
        ],
        subject: "Opinion Nation Password Reset Link",
        htmlContent: `Hi ${input.name} , <br/> <br/> Here is the password reset link . <br/> <br/> ${_config_config__WEBPACK_IMPORTED_MODULE_0__/* .BASE_PATH */ .GW}/auth/password-reset?token=${input.forgotToken}`
    };
    sgMail.sendTransacEmail(msg).then(function(data) {
        return true;
    }, function(error) {
        return false;
    });
};


/***/ })

};
;