exports.id = 850;
exports.ids = [850];
exports.modules = {

/***/ 5282:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6054))

/***/ }),

/***/ 5718:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8146))

/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 6054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
function Error({ error, reset }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "py-28 px-4 text-black dark:text-white",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            className: "text-center text-3xl sm:text-4xl md:text-5xl",
            children: "Internal Server Error"
        })
    });
}


/***/ }),

/***/ 8146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.js","import":"Hind_Siliguri","arguments":[{"subsets":["bengali"],"weight":["300","400","500","600","700"]}],"variableName":"hindSiliguri"}
var target_path_app_layout_js_import_Hind_Siliguri_arguments_subsets_bengali_weight_300_400_500_600_700_variableName_hindSiliguri_ = __webpack_require__(7075);
var target_path_app_layout_js_import_Hind_Siliguri_arguments_subsets_bengali_weight_300_400_500_600_700_variableName_hindSiliguri_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_js_import_Hind_Siliguri_arguments_subsets_bengali_weight_300_400_500_600_700_variableName_hindSiliguri_);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var index_esm = __webpack_require__(930);
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var md_index_esm = __webpack_require__(7625);
// EXTERNAL MODULE: ./components/shared/header/Header.scss
var Header = __webpack_require__(1128);
// EXTERNAL MODULE: ./node_modules/react-icons/hi/index.esm.js
var hi_index_esm = __webpack_require__(2717);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(4751);
;// CONCATENATED MODULE: ./hooks/popupControl/usePopupControl.jsx

const usePopupControl = ()=>{
    const [isOpen, setIsOpen] = (0,react_.useState)(false);
    const dropDownRef = (0,react_.useRef)(null);
    // toggle menu
    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    };
    //outside click
    const handleClickOutside = (e)=>{
        if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };
    (0,react_.useEffect)(()=>{
        document.addEventListener("click", handleClickOutside);
        return ()=>{
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return {
        isOpen,
        toggleMenu,
        dropDownRef
    };
};
/* harmony default export */ const popupControl_usePopupControl = (usePopupControl);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
// EXTERNAL MODULE: ./components/api/Api.jsx
var Api = __webpack_require__(398);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(1388);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(3258);
;// CONCATENATED MODULE: ./app/advisors/advisorApiSlice.jsx



// get all advisors data
const getAllAdvisors = (0,redux_toolkit_cjs_production_min.createAsyncThunk)("advisors/getAllAdvisors", async ()=>{
    try {
        const response = await axios/* default */.Z.get(`${Api/* default */.Z}/api/v1/advisors`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
});

;// CONCATENATED MODULE: ./app/executive-committee/ecApiSlice.jsx



// get all executive committee 
const getAllEC = (0,redux_toolkit_cjs_production_min.createAsyncThunk)("ecs/getAllEC", async ()=>{
    try {
        const response = await axios/* default */.Z.get(`${Api/* default */.Z}/api/v1/ec`, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
});
// single executive committee 
const getSingleEC = (0,redux_toolkit_cjs_production_min.createAsyncThunk)("ecs/getSingleEC", async (id)=>{
    try {
        const response = await axios/* default */.Z.get(`${Api/* default */.Z}/api/v1/ec/${id}`, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
});

// EXTERNAL MODULE: ./app/programs/programsApiSlice.jsx
var programsApiSlice = __webpack_require__(3801);
// EXTERNAL MODULE: ./app/posts/postsApiSlice.jsx
var postsApiSlice = __webpack_require__(4540);
// EXTERNAL MODULE: ./components/slider/sliderApiSlice.jsx
var sliderApiSlice = __webpack_require__(519);
// EXTERNAL MODULE: ./app/login/authRedux/authApiSlice.jsx
var authApiSlice = __webpack_require__(1572);
// EXTERNAL MODULE: ./app/login/authRedux/authSlice.jsx
var authSlice = __webpack_require__(7477);
;// CONCATENATED MODULE: ./components/shared/header/Header.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



















function Header_Header() {
    const pathname = (0,navigation.usePathname)();
    const dispatch = (0,lib.useDispatch)();
    let theme = "";
    if (false) {}
    const handleChangeTheme = ()=>{
        if (theme === "light") {
            document.querySelector("body").classList.add("dark");
            localStorage.setItem("theme", "dark");
            theme = "dark";
        } else {
            document.querySelector("body").classList.remove("dark");
            localStorage.setItem("theme", "light");
            theme = "light";
        }
    };
    // user
    const { user, message } = (0,lib.useSelector)(authSlice/* getAuthData */.nr);
    // dispatch
    // const dispatch = useDispatch();
    // navigate
    // const navigate = useNavigate();
    // navbar close
    const { isOpen, toggleMenu, dropDownRef } = popupControl_usePopupControl();
    // sticky mode
    const [direction, setDirection] = (0,react_.useState)("relative");
    (0,react_.useEffect)(()=>{
        let oldScrollY = window.scrollY;
        const handleScroll = ()=>{
            oldScrollY > window.scrollY ? setDirection("sticky") : setDirection("");
            oldScrollY = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, [
        direction
    ]);
    // handle logout
    const handleLogout = ()=>{
        dispatch((0,authApiSlice/* userLogout */.Kv)());
    };
    const router = (0,navigation.useRouter)();
    (0,react_.useEffect)(()=>{
        if (message === "Successfully Logout.") {
            react_toastify_esm/* toast */.Am.success(message);
            dispatch((0,authSlice/* setMessageEmpty */.Eo)());
            router.push("/login");
        }
    }, [
        message,
        dispatch,
        router
    ]);
    const dropDownMenuRef = (0,react_.useRef)(null);
    // organizing week
    const [showOrg, setShowOrg] = (0,react_.useState)(false);
    // all api call
    (0,react_.useEffect)(()=>{
        dispatch((0,authApiSlice/* loggedInUser */.RZ)());
        dispatch(getAllAdvisors());
        dispatch(getAllEC());
        dispatch((0,programsApiSlice/* getAllPrograms */.N)());
        dispatch((0,postsApiSlice/* getAllBlogs */.L)());
        dispatch((0,sliderApiSlice/* allSliders */.L)());
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: `  top-0  bg-[#fafafaf0] dark:bg-[#0f1829] shadow-md     border  dark:border-[#1b2341] dark:border-b dark:border-t-0 dark:border-l-0 dark:border-r-0 ${direction} `,
        style: {
            zIndex: "100"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: " navbar  px-4 py-0 xl:w-[1200px] m-auto ",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "navbar-start  w-fit grow lg:grow-0 ",
                    ref: dropDownRef,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "p-2 text-[#374246] dark:text-white bg-[#5a7b862c] cursor-pointer dark:bg-[#9f98b720] rounded-md lg:hidden",
                            onClick: ()=>{
                                toggleMenu(!isOpen);
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(hi_index_esm/* HiMenuAlt1 */.ZES, {
                                className: "text-[22px] "
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "dropdown",
                            children: isOpen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                tabIndex: 0,
                                className: "top-[33px] -left-[54px] p-2 shadow  rounded-b-md w-60 absolute dark:bg-[#0f0826f7] space-y-[1px] bg-[#f1f5f9] lg:hidden",
                                ref: dropDownMenuRef,
                                style: {
                                    zIndex: "300"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "",
                                        onClick: ()=>{
                                            toggleMenu(!isOpen);
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            className: `${pathname === "/" ? "active" : ""} custom-style-menu-a`,
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "text-[#334155]  active:bg-transparent   ",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "menu-toggle",
                                                className: "flex justify-between w-full cursor-pointer",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: " w-full h-full custom-style-menu-a new-menu flex justify-between py-[6px] px-[10px]",
                                                    children: [
                                                        "About Us",
                                                        /*#__PURE__*/ jsx_runtime_.jsx(md_index_esm/* MdKeyboardArrowDown */.Ix0, {
                                                            className: "text-xl"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "checkbox",
                                                id: "menu-toggle",
                                                className: "hidden"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "    space-y-[2px] shadow-md mt-1 vertical-child-1 bg-white dark:bg-[#1f273476] z-50  rounded-md ",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "rounded-[4px]",
                                                        onClick: ()=>{
                                                            toggleMenu(!isOpen);
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/our-history",
                                                            className: `${pathname === "/our-history/" ? "active" : ""} custom-style-menu-a`,
                                                            children: "Our History"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        onClick: ()=>{
                                                            toggleMenu(!isOpen);
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/executive-committee",
                                                            className: `${pathname === "/executive-committee/" ? "active" : ""} custom-style-menu-a`,
                                                            children: "Executive Committee"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        onClick: ()=>{
                                                            toggleMenu(!isOpen);
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/advisors",
                                                            className: `${pathname === "/advisors/" ? "active" : ""} custom-style-menu-a`,
                                                            children: "Advisors"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        onClick: ()=>{
                                                            toggleMenu(!isOpen);
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/faq",
                                                            className: `${pathname === "/faq/" ? "active" : ""} custom-style-menu-a`,
                                                            children: "FAQ"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: " text-[#334155]  active:bg-transparent ",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "menu-toggle2",
                                                className: "flex justify-between w-full",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "custom-style-menu-a flex justify-between py-[6px] px-[10px] cursor-pointer hover:text-white w-full h-full",
                                                    children: [
                                                        "Wings",
                                                        /*#__PURE__*/ jsx_runtime_.jsx(md_index_esm/* MdKeyboardArrowDown */.Ix0, {
                                                            className: "text-xl"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "checkbox",
                                                id: "menu-toggle2",
                                                className: "hidden"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: " space-y-[2px] shadow-md mt-1 vertical-child-2 bg-white z-30 dark:bg-[#1f273476]  rounded-md ",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        onClick: ()=>{
                                                            toggleMenu(!isOpen);
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/wings/kin-school",
                                                            className: `${pathname === "/wings/kin-school/" ? "active" : ""} custom-style-menu-a`,
                                                            children: "KIN School"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        onClick: ()=>{
                                                            toggleMenu(!isOpen);
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/wings/blood-donation",
                                                            className: `${pathname === "/wings/blood-donation/" ? "active" : ""} custom-style-menu-a`,
                                                            children: "Blood Donation"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        onClick: ()=>{
                                                            toggleMenu(!isOpen);
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/wings/social-awareness",
                                                            className: `${pathname === "/wings/social-awareness/" ? "active" : ""} custom-style-menu-a`,
                                                            children: "Social Awareness"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        onClick: ()=>{
                                                            toggleMenu(!isOpen);
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/wings/charity&aid",
                                                            className: `${pathname === "/wings/charity&aid/" ? "active" : ""} custom-style-menu-a`,
                                                            children: "Charity & Aid"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        onClick: ()=>{
                                                            toggleMenu(!isOpen);
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/wings/winter-cloth-distribution",
                                                            className: `${pathname === "/wings/winter-cloth-distribution/" ? "active" : ""} custom-style-menu-a`,
                                                            children: "Winter Cloth Distribution"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        onClick: ()=>{
                                            toggleMenu(!isOpen);
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/posts",
                                            className: `${pathname === "/posts/" ? "active" : ""} custom-style-menu-a`,
                                            children: "Blog"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        onClick: ()=>{
                                            toggleMenu(!isOpen);
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/programs",
                                            className: `${pathname === "/programs/" ? "active" : ""} custom-style-menu-a`,
                                            children: "Programs"
                                        })
                                    }),
                                    showOrg && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        onClick: ()=>{
                                            toggleMenu(!isOpen);
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/organizing-week",
                                            className: `${pathname === "/organizing-week/" ? "active" : ""} custom-style-menu-a`,
                                            children: "Organizing Week"
                                        })
                                    }),
                                    user && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        onClick: ()=>{
                                            toggleMenu(!isOpen);
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/profile",
                                            className: `${pathname === "/profile/" ? "active" : ""} custom-style-menu-a`,
                                            children: "Profile"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        onClick: ()=>{
                                            toggleMenu(!isOpen);
                                        },
                                        children: user ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            className: "  custom-style-menu-a",
                                            onClick: handleLogout,
                                            href: "",
                                            children: "Sign Out"
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/login",
                                            className: `${pathname === "/login/" ? "active" : ""} custom-style-menu-a`,
                                            children: "Login"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            className: ` h-full  md:mx-0 w-full`,
                            href: "/",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/images/logo/logo_black.webp",
                                    alt: "",
                                    className: "h-16 dark:hidden block mx-auto w-auto",
                                    width: 100,
                                    height: 52,
                                    placeholder: "blur",
                                    blurDataURL: "/images/blur/blur.webp",
                                    loading: "lazy"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/images/logo/logo_white.webp",
                                    alt: "",
                                    className: "h-16 dark:block hidden mx-auto w-auto",
                                    width: 100,
                                    height: 52,
                                    placeholder: "blur",
                                    blurDataURL: "/images/blur/blur.webp",
                                    loading: "lazy"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "navbar-center hidden lg:flex p-0 grow ",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "menu menu-horizontal p-0 menu-compact space-x-2 mx-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    className: `${pathname === "/" ? "active" : ""} custom-style-menu-a`,
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "custom-style-menu-a",
                                        children: [
                                            "About Us",
                                            /*#__PURE__*/ jsx_runtime_.jsx(md_index_esm/* MdKeyboardArrowDown */.Ix0, {
                                                className: "text-xl"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "py-0 shadow-md  top-[35px] dark:bg-[#0f0826] dark:text-zinc-100    bg-[#f1f5f9] text-[#000]  drop-child-1",
                                        style: {
                                            zIndex: "100"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/our-history",
                                                    className: `${pathname === "/our-history/" ? "active" : ""} custom-style-menu-a`,
                                                    children: "Our History"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/executive-committee",
                                                    className: `${pathname === "/executive-committee/" ? "active" : ""} custom-style-menu-a`,
                                                    children: "Executive Committee"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/advisors",
                                                    className: `${pathname === "/advisors/" ? "active" : ""} custom-style-menu-a `,
                                                    children: "Advisors"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/faq",
                                                    className: `${pathname === "/faq/" ? "active" : ""} custom-style-menu-a mb-[-1px]`,
                                                    children: "FAQ"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "custom-style-menu-a",
                                        children: [
                                            "Wings",
                                            /*#__PURE__*/ jsx_runtime_.jsx(md_index_esm/* MdKeyboardArrowDown */.Ix0, {
                                                className: "text-xl"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "py-0 m-0 shadow-md   dark:bg-[#0f0826]     bg-[#f1f5f9]    drop-child-2",
                                        style: {
                                            zIndex: "100"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/wings/kin-school",
                                                    className: `${pathname === "/wings/kin-school/" ? "active" : ""} custom-style-menu-a`,
                                                    children: "KIN School"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/wings/blood-donation",
                                                    className: `${pathname === "/wings/blood-donation/" ? "active" : ""} custom-style-menu-a`,
                                                    children: "Blood Donation"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/wings/social-awareness",
                                                    className: `${pathname === "/wings/social-awareness/" ? "active" : ""} custom-style-menu-a`,
                                                    children: "Social Awareness"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/wings/charity&aid",
                                                    className: `${pathname === "/wings/charity&aid/" ? "active" : ""} custom-style-menu-a`,
                                                    children: "Charity & Aid"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/wings/winter-cloth-distribution",
                                                    className: `${pathname === "/wings/winter-cloth-distribution/" ? "active" : ""} custom-style-menu-a mb-[-1px]`,
                                                    children: "Winter Cloth Distribution"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/posts",
                                    className: `${pathname === "/posts/" ? "active" : ""} custom-style-menu-a`,
                                    children: "Blog"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/programs",
                                    className: `${pathname === "/programs/" ? "active" : ""} custom-style-menu-a`,
                                    children: "Programs"
                                })
                            }),
                            showOrg && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/organizing-week",
                                    className: `${pathname === "/organizing-week/" ? "active" : ""} custom-style-menu-a`,
                                    children: "Organizing Week"
                                })
                            }),
                            user && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/profile",
                                    className: `${pathname === "/profile/" ? "active" : ""} custom-style-menu-a`,
                                    children: "Profile"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: user ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: "custom-style-menu-a",
                                    href: "",
                                    onClick: handleLogout,
                                    children: "Sign Out"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/login",
                                    className: `${pathname === "/login/" ? "active" : ""} custom-style-menu-a`,
                                    children: "Login"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "navbar-end  w-fit",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "border dark:border-zinc-800 p-3 rounded-full  text-[#374246] dark:text-white bg-[#5a7b862c] cursor-pointer dark:bg-[#9f98b720] ",
                        onClick: handleChangeTheme,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BsFillMoonStarsFill */.gLD, {
                                className: "block dark:hidden   "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BsFillSunFill */.UD2, {
                                className: "dark:block hidden"
                            })
                        ]
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(4047);
// EXTERNAL MODULE: ./app/globals.scss
var app_globals = __webpack_require__(6435);
// EXTERNAL MODULE: ./node_modules/react-icons/im/index.esm.js
var im_index_esm = __webpack_require__(236);
// EXTERNAL MODULE: ./node_modules/react-icons/io/index.esm.js
var io_index_esm = __webpack_require__(2772);
// EXTERNAL MODULE: ./node_modules/react-icons/gr/index.esm.js
var gr_index_esm = __webpack_require__(1086);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(3500);
// EXTERNAL MODULE: ./components/shared/footer/Footer.scss
var Footer = __webpack_require__(8080);
// EXTERNAL MODULE: ./components/subscriber/subscriberApiSlice.jsx
var subscriberApiSlice = __webpack_require__(7329);
;// CONCATENATED MODULE: ./components/shared/footer/Footer.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 














function Footer_Footer() {
    const dispatch = (0,lib.useDispatch)();
    // handle subscriber
    const handleSubscribe = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const { email } = Object.fromEntries(formData.entries());
        if (!email) {
            react_toastify_esm/* toast */.Am.error("Email is required!");
            return false;
        }
        const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        const emailTest = emailPattern.test(email);
        if (!emailTest) {
            react_toastify_esm/* toast */.Am.error("Invalid Email Address");
            return false;
        }
        dispatch((0,subscriberApiSlice/* addSubscriber */.F)({
            email
        }));
    };
    (0,react_.useEffect)(()=>{
        document?.querySelector(".modal")?.addEventListener("click", ()=>{
            if (document?.querySelector(".modal")?.previousElementSibling.checked) {
                document.querySelector(".modal")?.previousElementSibling.click();
            }
        });
    }, []);
    const formRef = (0,react_.useRef)(null);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "bg-[#f9fbfc]  dark:bg-[#0f1829] border-t  dark:border-[#211d4c] ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: " text-base xl:w-[1200px]    mx-auto footer pt-10 pb-12  px-3  m-auto  items-start justify-center md:justify-between ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: " mx-auto justify-items-center md:justify-items-start text-center md:text-left ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    href: "/",
                                    className: "cursor-pointer ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/images/logo/logo_white.webp",
                                            alt: "KIN logo",
                                            className: "h-[52px] hidden dark:block w-auto ",
                                            width: 150,
                                            height: 60,
                                            placeholder: "blur",
                                            blurDataURL: "/images/blur/blur.webp",
                                            loading: "lazy"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/images/logo/logo_black.webp",
                                            alt: "KIN logo",
                                            className: "  w-fit dark:hidden  h-[52px]",
                                            width: 150,
                                            height: 60,
                                            placeholder: "blur",
                                            blurDataURL: "/images/blur/blur.webp",
                                            loading: "lazy"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: " font-['Hind_Siliguri']  -mt-2 text-[#3e5060] dark:text-[#b2bac2]",
                                children: "আত্মার কাছে দায়বদ্ধতায় হাতে রাখি হাত"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-[#3e5060] dark:text-[#b2bac2]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "pb-[6px] pt-3 font-semibold",
                                        children: "Enter Your Email address:"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        className: "flex gap-2",
                                        onSubmit: handleSubscribe,
                                        ref: formRef,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                name: "email",
                                                placeholder: "example@gmail.com ",
                                                className: "py-3   rounded-md w-full px-3 bg-[#fff] border dark:bg-[#392f57d1] dark:border-[#848485]"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "submit",
                                                value: "Subscribe",
                                                className: "bg-[#d3e4f5] text-[#007fff] font-bold dark:bg-[#1e4976]  py-2 px-3 rounded-md dark:text-white cursor-pointer"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: " py-8 md:py-0 text-[#3e5060] dark:text-[#b2bac2] flex flex-col  gap-2  items-center md:items-start mx-auto contact-section ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "pb-3 text-[#000102] dark:text-[#ffffff] font-bold  ",
                                children: "CONTACT"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "tel:+8801975467878",
                                className: "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BsFillTelephoneFill */.lfG, {
                                        className: "w-6   h-6 inline-block mx-1 p-[3px]"
                                    }),
                                    "+8801975-467878"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "tel:+8801615467878",
                                className: " flex items-center gap-2 ml-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        version: "1.1",
                                        width: "20",
                                        height: "20",
                                        x: "0",
                                        y: "0",
                                        viewBox: "0 0 64 64",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M32 2a30 30 0 1 0 30 30A30.037 30.037 0 0 0 32 2zm3.72 17.56c1.64-1.92 4.13-4.81 4.13-6.39a.715.715 0 0 1 1.43 0c0 1.65 2.69 4.71 4.35 6.65a8.53 8.53 0 0 1 .78 10.07 7.34 7.34 0 0 1-5.85 3.29 7.316 7.316 0 0 1-5.84-3.29 8.534 8.534 0 0 1 1-10.33zm14.6 29.53a12.525 12.525 0 0 1-16.82-.7L15.61 30.5a12.511 12.511 0 0 1-.7-16.81c1.19-1.76 3.39-2.34 5.01-.79l4.48 4.48a3.09 3.09 0 0 1-.49 4.73 3.228 3.228 0 0 0-.93 4.5c2.42 3.68 10.61 11.87 14.31 14.35a3.302 3.302 0 0 0 4.64-.87 3.051 3.051 0 0 1 4.71-.46l4.46 4.46a3.057 3.057 0 0 1 .89 2.29 3.529 3.529 0 0 1-1.67 2.71z",
                                                fill: "#f40505",
                                                "data-original": "#000000",
                                                opacity: "1"
                                            })
                                        })
                                    }),
                                    "+8801615-467878"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "",
                                href: "mailto: kinsust03@gmail.com",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(md_index_esm/* MdOutlineMailOutline */.hoL, {
                                        className: "w-6  h-6 inline-block mx-1 p-[3px]"
                                    }),
                                    "kinsust03@gmail.com"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "https://goo.gl/maps/x35EyojkSbMZY3rh7",
                                target: "_blank",
                                rel: "noReferrer",
                                className: "     flex items-center ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(hi_index_esm/* HiOutlineLocationMarker */.k9l, {
                                        className: "w-6  h-6 inline-block mx-1 p-[3px]"
                                    }),
                                    "Shahjalal University of Science & Technology, Sylhet-3114, Bangladesh"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: " text-[#3e5060] dark:text-[#b2bac2]  flex flex-col gap-[6px] items-center md:items-start mx-auto explore-section",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "pb-3 text-black dark:text-white  font-bold  ",
                                children: "EXPLORE"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: "",
                                href: "/our-history",
                                children: "Our History"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: "",
                                href: "/programs",
                                children: "Campaigns"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: "",
                                href: "/executive-committee",
                                children: "Executive Committee"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/faq",
                                className: "",
                                children: "FAQ"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " xl:w-[1200px] mx-auto  ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    className: "h-[1px] border-none bg-[#bfbebe50] dark:bg-[#211d4c]"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " grid md:grid-cols-2 md:justify-items-between xl:w-[1200px] py-8 px-4  mx-auto text-[#3e5060] items-center dark:text-[#b2bac2]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: " md:order-1 order-2 dark:text-[#e2e8f0]   text-center md:text-left",
                        children: [
                            "Copyright \xa9 2023",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-red-600 font-['Arial_black'] dark:text-red-600",
                                children: "KIN"
                            }),
                            " ",
                            ", A Voluntary Organization of SUST"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "social-icons order-1 md:order-2 flex pb-4 md:pb-0 gap-4  md:justify-end mx-auto md:mx-0 ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.linkedin.com/company/kin-a-voluntary-organisation-of-sust/",
                                target: "_blank",
                                className: "text-[#0077b5]  dark:bg-[#6267d21e]  flex items-center h-12 rounded-full w-12  justify-center ",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(im_index_esm/* ImLinkedin */.h6E, {
                                    className: "fill-[#435562] text-md dark:fill-white  "
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.youtube.com/@kinsust3885",
                                target: "_blank",
                                rel: "noreferrer",
                                className: "text-[#0077b5]   dark:bg-[#6267d21e]  flex items-center h-12 rounded-full w-12  justify-center ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(io_index_esm/* IoLogoYoutube */.tPx, {
                                    className: "fill-[#435562] text-md dark:fill-white "
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "//www.facebook.com/KINSUST",
                                rel: "noreferrer",
                                target: "_blank",
                                className: "  text-[#0077b5]  dark:bg-[#6267d21e]  flex items-center h-12 rounded-full w-12  justify-center ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(gr_index_esm/* GrFacebookOption */.f1b, {
                                    className: "fill-[#435562] text-md dark:fill-white "
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "//www.instagram.com/kin_sust/",
                                rel: "noreferrer",
                                target: "_blank",
                                className: " text-[#0077b5]  dark:bg-[#6267d21e]  flex items-center h-12 rounded-full w-12  justify-center ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_index_esm/* FaInstagram */.Zf_, {
                                    className: "fill-[#435562] text-md dark:fill-white "
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/react-photo-view/dist/react-photo-view.css
var react_photo_view = __webpack_require__(9);
;// CONCATENATED MODULE: ./app/advisors/advisorSlice.jsx
// create auth slice


const advisorsSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "advisors",
    initialState: {
        // advisors: localStorage.getItem("advisors")
        //   ? JSON.parse(localStorage.getItem("advisors"))
        //   : [],
        advisors: [],
        error: null,
        message: null
    },
    reducers: {
        setMessageEmpty: (state)=>{
            state.message = null;
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getAllAdvisors.rejected, (state, action)=>{
            state.error = action.error.message;
        }).addCase(getAllAdvisors.fulfilled, (state, action)=>{
            state.advisors = action.payload.data;
        // localStorage.setItem("advisors", JSON.stringify(action.payload.data));
        });
    }
});
// selectors
const getAdvisorsData = (state)=>state.advisors;
// actions
const { setMessageEmpty } = advisorsSlice.actions;
// exports
/* harmony default export */ const advisorSlice = (advisorsSlice.reducer);

;// CONCATENATED MODULE: ./app/executive-committee/ecSlice.jsx
// create auth slice


const ecSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "ecs",
    initialState: {
        ecs: [],
        // ecs: localStorage.getItem("ecs")
        //   ? JSON.parse(localStorage.getItem("ecs"))
        //   : [],
        error: null,
        message: null,
        pagination: null,
        // ec: localStorage.getItem("ec")
        //   ? JSON.parse(localStorage.getItem("ec"))
        //   : null,
        ec: null
    },
    reducers: {
        setMessageEmpty: (state)=>{
            state.message = null;
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getAllEC.rejected, (state, action)=>{
            state.error = action.error.message;
        }).addCase(getAllEC.fulfilled, (state, action)=>{
            state.ecs = action.payload.data;
            state.ec = action.payload.data[0];
            localStorage.setItem("ecs", JSON.stringify(action.payload.data));
            localStorage.setItem("ec", JSON.stringify(action.payload.data[0]));
            state.pagination = action.payload.pagination;
        })// get single  blog
        .addCase(getSingleEC.rejected, (state, action)=>{
            state.error = action.error.message;
        }).addCase(getSingleEC.fulfilled, (state, action)=>{
            state.ec = action.payload.data;
        });
    }
});
// selectors
// actions
const { setMessageEmpty: ecSlice_setMessageEmpty } = ecSlice.actions;
// exports
/* harmony default export */ const executive_committee_ecSlice = (ecSlice.reducer);

;// CONCATENATED MODULE: ./app/programs/programSlice.jsx
// create auth slice


const programsSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "programs",
    initialState: {
        // programs: localStorage.getItem("programs")
        //   ? JSON.parse(localStorage.getItem("programs"))
        //   : [],
        programs: [],
        error: null,
        message: null,
        // pagination: localStorage.getItem("programs.pagination")
        //   ? JSON.parse(localStorage.getItem("programs.pagination"))
        //   : null,
        pagination: null
    },
    reducers: {
        setMessageEmpty: (state)=>{
            state.message = null;
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(programsApiSlice/* getAllPrograms */.N.rejected, (state, action)=>{
            state.error = action.error.message;
        }).addCase(programsApiSlice/* getAllPrograms */.N.fulfilled, (state, action)=>{
            state.programs = action.payload.data;
            state.pagination = action.payload.pagination;
            localStorage.setItem("programs", JSON.stringify(action.payload.data));
            localStorage.setItem("programs.pagination", JSON.stringify(action.payload.pagination));
        });
    }
});
// selectors
const getProgramsData = (state)=>state.advisors;
// actions
const { setMessageEmpty: programSlice_setMessageEmpty } = programsSlice.actions;
// exports
/* harmony default export */ const programSlice = (programsSlice.reducer);

;// CONCATENATED MODULE: ./app/posts/postSlice.jsx
// create auth slice


const blogsSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "blogs",
    initialState: {
        // blogs: localStorage.getItem("blogs")
        //   ? JSON.parse(localStorage.getItem("blogs"))
        //   : [],
        blogs: [],
        error: null,
        message: null,
        // blog: localStorage.getItem("blog")
        //   ? JSON.parse(localStorage.getItem("blog"))
        //   : null,
        // pagination: localStorage.getItem("blogs.pagination")
        //   ? JSON.parse(localStorage.getItem("blogs.pagination"))
        //   : null,
        blog: null,
        pagination: null
    },
    reducers: {
        setMessageEmpty: (state)=>{
            state.message = null;
            state.error = null;
        },
        setBlogEmpty: (state)=>{
            state.blog = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(postsApiSlice/* getAllBlogs */.L.rejected, (state, action)=>{
            state.error = action.error.message;
        }).addCase(postsApiSlice/* getAllBlogs */.L.fulfilled, (state, action)=>{
            state.blogs = action.payload.data;
            state.pagination = action.payload.pagination;
            localStorage.setItem("blogs", JSON.stringify(action.payload.data));
            localStorage.setItem("blogs.pagination", JSON.stringify(action.payload.pagination));
        })// get single  blog
        .addCase(postsApiSlice/* getSingleBlog */.VK.rejected, (state, action)=>{
            state.error = action.error.message;
        }).addCase(postsApiSlice/* getSingleBlog */.VK.fulfilled, (state, action)=>{
            state.blog = action.payload.data;
            localStorage.setItem("blog", JSON.stringify(action.payload.data));
        })// comment on blog
        .addCase(postsApiSlice/* commentOnBlog */.AH.rejected, (state, action)=>{
            state.error = action.error.message;
        }).addCase(postsApiSlice/* commentOnBlog */.AH.fulfilled, (state, action)=>{
            state.message = action.payload.message;
            state.blog = action.payload.data;
            localStorage.setItem("blog", JSON.stringify(action.payload.data));
        });
    }
});
// selectors
const getBlogsData = (state)=>state.advisors;
// actions
const { setMessageEmpty: postSlice_setMessageEmpty } = blogsSlice.actions;
const { setBlogEmpty } = blogsSlice.actions;
// exports
/* harmony default export */ const postSlice = (blogsSlice.reducer);

;// CONCATENATED MODULE: ./components/slider/sliderSlice.jsx
// create auth slice


const slidersSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "sliders",
    initialState: {
        // sliders: localStorage.getItem("sliders")
        //   ? JSON.parse(localStorage.getItem("sliders"))
        //   : null,
        sliders: [],
        error: null,
        message: null
    },
    reducers: {
        setMessageEmpty: (state)=>{
            state.message = null;
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(sliderApiSlice/* allSliders */.L.rejected, (state, action)=>{
            state.error = action.error.message;
        }).addCase(sliderApiSlice/* allSliders */.L.fulfilled, (state, action)=>{
            state.sliders = action.payload.data;
            localStorage.setItem("sliders", JSON.stringify(action.payload.data));
        });
    }
});
// selectors
// actions
const { setMessageEmpty: sliderSlice_setMessageEmpty } = slidersSlice.actions;
// exports
/* harmony default export */ const sliderSlice = (slidersSlice.reducer);

// EXTERNAL MODULE: ./components/subscriber/subscriberSlice.jsx
var subscriberSlice = __webpack_require__(2289);
;// CONCATENATED MODULE: ./store/store.js
// import authReducer from "../features/auth/authSlice";
// import advisorsReducer from "../features/advisors/advisorSlice";
// import programsReducer from "../features/programs/programSlice";
// import blogsReducer from "../features/blogs/blogSlice";
// import ecsReducer from "../features/ec/ecSlice";
// import slidersReducer from "../features/slider/sliderSlice";
// import subscriberReducer from "../features/subscriber/subscriberSlice";
// import organizationsReducer from "../features/organizationForm/orgSlice";








const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        auth: authSlice/* default */.ZP,
        advisors: advisorSlice,
        programs: programSlice,
        blogs: postSlice,
        ecs: executive_committee_ecSlice,
        sliders: sliderSlice,
        subscriber: subscriberSlice/* default */.Z
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({}),
    devTools: true
});
/* harmony default export */ const store_store = (store);

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(5996);
// EXTERNAL MODULE: ./node_modules/animate.css/animate.min.css
var animate_min = __webpack_require__(9009);
;// CONCATENATED MODULE: ./app/layout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 












function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "owner",
                        content: "KIN,A Voluntary Organization"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "kinsust, kin ,kin school,kin blood donation, sust"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "distribution",
                        content: "Global"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "Md.Rejoyan Islam"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "fb:pages",
                        content: "192895057402251"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "fb:app_id",
                        content: "1438139603344595"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "copyright",
                        content: "KIN,A Voluntary Organization "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:title",
                        content: "KIN,A Voluntary Organization"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: `${Api/* SiteURL */.B}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: `${Api/* SiteURL */.B}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "/favicon.png",
                        type: "image/png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.png",
                        type: "image/png"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                className: `${(target_path_app_layout_js_import_Hind_Siliguri_arguments_subsets_bengali_weight_300_400_500_600_700_variableName_hindSiliguri_default()).className} bg-transparent`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib.Provider, {
                        store: store_store,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                                children: children
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_toastify_esm/* ToastContainer */.Ix, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        newestOnTop: false,
                        closeOnClick: true,
                        rtl: false,
                        pauseOnFocusLoss: true,
                        draggable: true,
                        pauseOnHover: true,
                        theme: "light"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 1572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Al: () => (/* binding */ updateUserData),
/* harmony export */   DO: () => (/* binding */ updateUserPhoto),
/* harmony export */   Gd: () => (/* binding */ activeAccount),
/* harmony export */   Kv: () => (/* binding */ userLogout),
/* harmony export */   N$: () => (/* binding */ userRegister),
/* harmony export */   OU: () => (/* binding */ passwordReset),
/* harmony export */   RJ: () => (/* binding */ passwordResetCodeSend),
/* harmony export */   RZ: () => (/* binding */ loggedInUser),
/* harmony export */   Zy: () => (/* binding */ updateUserPassword),
/* harmony export */   aT: () => (/* binding */ findAccount),
/* harmony export */   kE: () => (/* binding */ sendActiveCode),
/* harmony export */   n$: () => (/* binding */ userLogin)
/* harmony export */ });
/* harmony import */ var _components_api_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(398);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3258);
// register user



const userRegister = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/userRegister", async (data)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post(`${_components_api_Api__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z}/api/v1/auth/register`, data, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
});
// login user
const userLogin = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/userLogin", async (data)=>{
    const { router } = data;
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post(`${_components_api_Api__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z}/api/v1/auth/login`, {
            ...data.data
        }, {
            withCredentials: true
        });
        setTimeout(()=>{
            router.push("/profile");
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
});
// logout  user
const userLogout = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/userLogout", async ()=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post(`${_components_api_Api__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z}/api/v1/auth/logout`, {}, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
});
// logged in user
const loggedInUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/loggedInUser", async ()=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get(`${_components_api_Api__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z}/api/v1/auth/me`, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
});
const updateUserData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/updateUserData", async (data)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.patch(`${_components_api_Api__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z}/api/v1/users/${data.id}`, data.data, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
});
// update user photo
const updateUserPhoto = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/updateUserPhoto", async (data)=>{
    const { userId } = Object.fromEntries(data);
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.patch(`${_components_api_Api__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z}/api/v1/users/${userId}`, data, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
});
// update user password
const updateUserPassword = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/updateUserPassword", async (data)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.patch(`${_components_api_Api__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z}/api/v1/users/password-update`, data, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
});
// send account active code
const sendActiveCode = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/sendActiveCode", async (data)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post(`${_components_api_Api__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z}/api/v1/auth/resend-active-code`, data, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
});
//  account activate
const activeAccount = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/activeAccount", async (data)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post(`${_components_api_Api__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z}/api/v1/auth/activate`, data, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
});
// find account
const findAccount = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/findAccount", async (data)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post(`${_components_api_Api__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z}/api/v1/auth/find-account`, data, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
});
// password reset code send
const passwordResetCodeSend = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/passwordResetCodeSend", async (data)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post(`${_components_api_Api__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z}/api/v1/auth/password-reset-code`, data, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
});
// password reset
const passwordReset = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/passwordReset", async (data)=>{
    console.log(data);
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post(`${_components_api_Api__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z}/api/v1/auth/password-reset`, data, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
});


/***/ }),

/***/ 7477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Eo: () => (/* binding */ setMessageEmpty),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   nr: () => (/* binding */ getAuthData)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _authApiSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1572);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6668);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);
// create auth slice



const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({
    name: "auth",
    initialState: {
        // user: localStorage.getItem("user")
        //   ? JSON.parse(localStorage.getItem("user"))
        //   : null,
        user: null,
        error: null,
        message: null
    },
    reducers: {
        setMessageEmpty: (state)=>{
            state.message = null;
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder// register
        .addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .userRegister */ .N$.rejected, (state, action)=>{
            state.error = action.error.message;
        }).addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .userRegister */ .N$.fulfilled, (state, action)=>{
            state.message = action.payload.message;
        })// login
        .addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .userLogin */ .n$.rejected, (state, action)=>{
            state.error = action.error.message;
        }).addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .userLogin */ .n$.fulfilled, (state, action)=>{
            state.user = action.payload.data;
            state.message = action.payload.message;
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.setCookie)("token", action.payload.data.accessToken, {
                secure: true,
                sameSite: "none"
            });
            localStorage.setItem("user", JSON.stringify(action.payload.data));
        })// logout
        .addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .userLogout */ .Kv.rejected, (state, action)=>{
            state.error = action.error.message;
        }).addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .userLogout */ .Kv.fulfilled, (state, action)=>{
            state.user = null;
            state.message = action.payload.message;
            localStorage.removeItem("user");
            (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.deleteCookie)("token", {
                secure: true,
                sameSite: "none"
            });
        })// logged in user
        .addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .loggedInUser */ .RZ.rejected, (state)=>{
            // state.error = action.error.message;
            state.user = null;
        }).addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .loggedInUser */ .RZ.fulfilled, (state, action)=>{
            state.user = action.payload.data;
            localStorage.setItem("user", JSON.stringify(action.payload.data));
        // state.message = action.payload.message;
        })// update user data
        .addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .updateUserData */ .Al.rejected, (state, action)=>{
            state.error = action.error.message;
        }).addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .updateUserData */ .Al.fulfilled, (state, action)=>{
            state.user = action.payload.data;
            state.message = action.payload.message;
            localStorage.setItem("user", JSON.stringify(action.payload.data));
        })// update user photo
        .addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .updateUserPhoto */ .DO.rejected, (state)=>{
            state.error = "Something went wrong!.";
        }).addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .updateUserPhoto */ .DO.fulfilled, (state, action)=>{
            state.user = action.payload.data;
            state.message = "Photo updated successfully!";
            localStorage.setItem("user", JSON.stringify(action.payload.data));
        })// user password update
        .addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .updateUserPassword */ .Zy.rejected, (state)=>{
            state.error = "Something went wrong!.";
        }).addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .updateUserPassword */ .Zy.fulfilled, (state, action)=>{
            state.user = action.payload.data;
            state.message = action.payload.message;
        })// send activate code
        .addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .sendActiveCode */ .kE.rejected, (state)=>{
            state.error = "Something went wrong to send active code in your email!.";
        }).addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .sendActiveCode */ .kE.fulfilled, (state, action)=>{
            state.message = action.payload.message;
        })// active account
        .addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .activeAccount */ .Gd.rejected, (state, action)=>{
            state.error = action.error.message;
        }).addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .activeAccount */ .Gd.fulfilled, (state, action)=>{
            state.message = action.payload.message;
        })// find account
        .addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .findAccount */ .aT.rejected, (state, action)=>{
            state.error = action.error.message;
        }).addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .findAccount */ .aT.fulfilled, (state)=>{
            state.message = "User found!";
        })// password reset code send
        .addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .passwordResetCodeSend */ .RJ.rejected, (state, action)=>{
            state.error = action.error.message;
        }).addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .passwordResetCodeSend */ .RJ.fulfilled, (state, action)=>{
            state.message = action.payload.message;
        })// password reset
        .addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .passwordReset */ .OU.rejected, (state, action)=>{
            state.error = action.error.message;
        }).addCase(_authApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .passwordReset */ .OU.fulfilled, (state, action)=>{
            state.message = action.payload.message;
        });
    }
});
// selectors
const getAuthData = (state)=>state.auth;
// actions
const { setMessageEmpty } = authSlice.actions;
// exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);


/***/ }),

/***/ 4540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AH: () => (/* binding */ commentOnBlog),
/* harmony export */   L: () => (/* binding */ getAllBlogs),
/* harmony export */   VK: () => (/* binding */ getSingleBlog)
/* harmony export */ });
/* harmony import */ var _components_api_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(398);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3258);



// get all blogs data
const getAllBlogs = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("blogs/getAllBlogs", async (data)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get(`${_components_api_Api__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z}/api/v1/posts?page=${data ? data.page : 1}&limit=10`, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
});
// get single blog data
const getSingleBlog = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("blogs/getSingleBlog", async (slug)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get(`${_components_api_Api__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z}/api/v1/posts/${slug}`, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
});
// comment on a blog
const commentOnBlog = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("blogs/commentOnBlog", async (value)=>{
    try {
        const { id, data } = value;
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.patch(`${_components_api_Api__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z}/api/v1/posts/${id}`, {
            comment: {
                ...data
            }
        }, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
});


/***/ }),

/***/ 3801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ getAllPrograms)
/* harmony export */ });
/* harmony import */ var _components_api_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(398);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3258);



// get all programs data
const getAllPrograms = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("programs/getAllPrograms", async (data)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get(`${_components_api_Api__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z}/api/v1/programs?page=${data ? data.page : 1}&limit=12`, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
});


/***/ }),

/***/ 398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ SiteURL),
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ApiURL = "https://kin-api.onrender.com";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiURL);
const SiteURL = "https://www.kinsust.org";


/***/ }),

/***/ 519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ allSliders)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3258);
/* harmony import */ var _api_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(398);
// all slider



const allSliders = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("sliders/allSliders", async ()=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get(`${_api_Api__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z}/api/v1/sliders`, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
});


/***/ }),

/***/ 7329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ addSubscriber)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3258);
/* harmony import */ var _api_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(398);
// new subscriber



const addSubscriber = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("subscriber/addSubscriber", async (data)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post(`${_api_Api__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z}/api/v1/subscribers`, data, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error.message);
    }
});


/***/ }),

/***/ 2289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ setMessageEmpty),
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _subscriberApiSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7329);
// create auth slice


const subscriberSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: "subscriber",
    initialState: {
        subscriber: null,
        error: null,
        message: null
    },
    reducers: {
        setMessageEmpty: (state)=>{
            state.message = null;
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(_subscriberApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .addSubscriber */ .F.rejected, (state, action)=>{
            state.error = action.error.message;
        }).addCase(_subscriberApiSlice__WEBPACK_IMPORTED_MODULE_0__/* .addSubscriber */ .F.fulfilled, (state, action)=>{
            state.subscriber = action.payload.data;
            state.message = action.payload.message;
        });
    }
});
// selectors
// actions
const { setMessageEmpty } = subscriberSlice.actions;
// exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subscriberSlice.reducer);


/***/ }),

/***/ 3993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\rejoy\OneDrive\Desktop\class project\next\kin ( nextjs) - Copy\app\error.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 5764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\rejoy\OneDrive\Desktop\class project\next\kin ( nextjs) - Copy\app\layout.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9217);


function loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "top-0 left-0 z-[1000] h-screen w-full mx-auto flex justify-center bg-white dark:bg-[#0f0826] overflow-hidden absolute items-center",
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

/***/ 1912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function NotFound() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: " dark:bg-[#150d36]  bg-[#fff] text-center text-slate-800  dark:text-[#fff]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "lg:py-24 md:py-12 py-8",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "lg:text-8xl text-6xl  font-black md:py-10 py-6 text-[#fc535a]",
                    children: "404"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "lg:text-5xl md:text-4xl text-3xl font-bold  pb-24",
                    children: "No page Found!"
                })
            ]
        })
    });
}


/***/ }),

/***/ 4047:
/***/ (() => {



/***/ }),

/***/ 6435:
/***/ (() => {



/***/ }),

/***/ 8080:
/***/ (() => {



/***/ }),

/***/ 1128:
/***/ (() => {



/***/ })

};
;