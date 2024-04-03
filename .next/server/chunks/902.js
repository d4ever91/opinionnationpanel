"use strict";
exports.id = 902;
exports.ids = [902];
exports.modules = {

/***/ 1845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GW": () => (/* binding */ BASE_PATH),
/* harmony export */   "Z$": () => (/* binding */ MONGODB_URI)
/* harmony export */ });
/* unused harmony exports API_URL, FROM_EMAIL, FROM_NAME */
const API_URL = "https://app.opinion-nation.com/api";
const BASE_PATH = "https://app.opinion-nation.com";
// export const API_URL ="http://localhost:3000/api"
// export const BASE_PATH="http://localhost:3000"
const FROM_EMAIL = "info@opinion-nation.com";
const FROM_NAME = "Opinion Nation";
const MONGODB_URI = "mongodb+srv://event:5UscXm8Ub6w8QcvB@cluster0.bqzhq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


/***/ }),

/***/ 902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$j": () => (/* binding */ connect)
/* harmony export */ });
/* unused harmony exports disconnect, convertDocToObj */
/* harmony import */ var _lib_config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1845);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


const connection = {};
async function connect() {
    if (connection.isConnected) {
        console.log("already connected");
        return;
    }
    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections.length) > 0) {
        connection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState);
        if (connection.isConnected === 1) {
            console.log("use previous connection");
            return;
        }
        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();
    }
    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(_lib_config_config__WEBPACK_IMPORTED_MODULE_1__/* .MONGODB_URI */ .Z$);
    console.log("new connection");
    connection.isConnected = db.connections[0].readyState;
}
async function disconnect() {
    if (connection.isConnected) {
        if (true) {
            await mongoose.disconnect();
            connection.isConnected = false;
        } else {}
    }
}
function convertDocToObj(doc) {
    doc._id = doc._id.toString();
    doc.createdAt = doc.createdAt.toString();
    doc.updatedAt = doc.updatedAt.toString();
    return doc;
}



/***/ })

};
;