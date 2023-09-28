"use strict";
exports.id = 46;
exports.ids = [46];
exports.modules = {

/***/ 2534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ layout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_api_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1535);


// meta data
const metadata = {
    metadataBase: new URL(_components_api_Api__WEBPACK_IMPORTED_MODULE_1__/* .SiteURL */ .B),
    title: "KIN User Profile",
    description: "KIN User Profile description",
    openGraph: {
        title: "KIN User Profile",
        description: "KIN School Description",
        url: `${_components_api_Api__WEBPACK_IMPORTED_MODULE_1__/* .SiteURL */ .B}/profile`,
        type: "website",
        siteName: "KIN,A Voluntary Organization",
        locale: "bn_BD",
        images: [
            {
                url: "/images/wings/blood.jpg",
                width: 800,
                height: 600,
                alt: "KIN Blood Image"
            },
            {
                url: "/images/wings/blood.jpg",
                width: 900,
                height: 800,
                alt: "KIN Blood Image"
            },
            {
                url: "/images/wings/blood.jpg"
            }
        ]
    },
    twitter: {
        title: "KIN FAQ",
        description: " School Description",
        images: {
            url: "/images/wings/blood.jpg",
            alt: "KIN School "
        }
    }
};
function layout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: children
    });
}


/***/ }),

/***/ 2324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9217);


function loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "top-0 left-0 z-[10] h-screen w-full mx-auto flex justify-center bg-white dark:bg-[#0f0826] overflow-hidden absolute items-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "text-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spinners__WEBPACK_IMPORTED_MODULE_1__/* .ScaleLoader */ .d4, {
                color: "#36d7b7",
                height: 40,
                loading: true,
                margin: 3,
                radius: 3,
                width: 5
            })
        })
    });
}


/***/ }),

/***/ 1535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ SiteURL),
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ApiURL = "https://kin-api.onrender.com";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiURL);
const SiteURL = "https://www.kinsust.org";


/***/ })

};
;