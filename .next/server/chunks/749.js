"use strict";
exports.id = 749;
exports.ids = [749];
exports.modules = {

/***/ 213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ layout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var _components_api_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1535);

// meta data
const metadata = {
    metadataBase: new URL(_components_api_Api__WEBPACK_IMPORTED_MODULE_0__/* .SiteURL */ .B),
    title: "KIN Posts ",
    description: "KIN Posts Distribution",
    openGraph: {
        title: "KIN Posts",
        description: "KIN Posts Description",
        url: `${_components_api_Api__WEBPACK_IMPORTED_MODULE_0__/* .SiteURL */ .B}/posts`,
        type: "website",
        siteName: "KIN,A Voluntary Organization",
        locale: "bn_BD",
        images: [
            {
                url: "/icon/icon.jpg",
                width: 800,
                height: 600,
                alt: "KIN Posts"
            },
            {
                url: "/icon/icon.jpg",
                width: 900,
                height: 800,
                alt: "KIN Posts"
            },
            {
                url: "/icon/icon.jpg"
            }
        ]
    },
    twitter: {
        title: "KIN Posts",
        description: "KIN Posts Description",
        images: {
            url: "/icon/icon.jpg",
            alt: "KIN Posts "
        }
    }
};
function layout({ children }) {
    return children;
}


/***/ }),

/***/ 8579:
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