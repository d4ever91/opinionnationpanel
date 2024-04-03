"use strict";
exports.id = 6215;
exports.ids = [6215];
exports.modules = {

/***/ 6215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_flags_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_flags_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_flags_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function CountrySelector({ selected , changeHandler  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_flags_select__WEBPACK_IMPORTED_MODULE_1___default()), {
        countries: [
            "US",
            "CN",
            "ES",
            "FR",
            "ID",
            "IT",
            "JP",
            "PT",
            "SA",
            "DE"
        ],
        customLabels: {
            US: "English",
            CN: "Chinese",
            ES: "Spanish",
            FR: "French",
            ID: "Indonesian",
            IT: "Italian",
            JP: "Japanese",
            PT: "Portuguese",
            SA: "Arabic",
            DE: "German"
        },
        className: "menu-flags",
        selected: selected,
        onSelect: (code)=>changeHandler(code)
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountrySelector);


/***/ })

};
;