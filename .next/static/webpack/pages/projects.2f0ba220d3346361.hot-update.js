"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./pages/projects/index.jsx":
/*!**********************************!*\
  !*** ./pages/projects/index.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/index.module.css */ \"./styles/index.module.css\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ProjectCard */ \"./components/ProjectCard.jsx\");\n/* harmony import */ var _mui_icons_material_HomeRounded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/HomeRounded */ \"./node_modules/@mui/icons-material/HomeRounded.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Meta */ \"./components/Meta.jsx\");\n/* harmony import */ var _hooks_useAxios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useAxios */ \"./hooks/useAxios.js\");\n/* harmony import */ var _components_Loaders_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Loaders/Loader */ \"./components/Loaders/Loader.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// import allProjects from \"@/data/projectData/index.json\";\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const projectData = (0,_hooks_useAxios__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        method: \"get\",\n        url: \"/api/getProjects\",\n        headers: JSON.stringify({\n            accept: \"*/*\"\n        })\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTitle();\n        setLoading(true);\n        if (projectData.response !== null) {\n            setProjects(projectData.response);\n            setLoading(false);\n        }\n    }, [\n        projectData\n    ]);\n    const setTitle = ()=>{\n        document.title = \"Projects | armaancodes.com\";\n    };\n    // ----------------- IF READING PROJECTS FROM FILE --------------------------\n    // const getAllProjects = () => {\n    //     setProjects(allProjects.map((project) => project));\n    // };\n    // ----------------- IF READING PROJECTS FROM FILE --------------------------\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Projects | armaancodes.com\",\n                seoTitle: \"Projects | armaancodes.com\",\n                seoURL: \"https://www.armaancodes.com/projects\"\n            }, void 0, false, {\n                fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#08001A] min-h-screen pt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row justify-between items-center gap-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-[3rem] font-semibold\",\n                                        children: \"Projects\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-row justify-end items-center gap-8\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_HomeRounded__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                className: \"text-[2rem]\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row justify-center items-center flex-wrap gap-5 mobile:mt-[2rem] tablet:mt-[2rem] laptop:mt-[5rem] desktop:mt-[5rem]\",\n                                children: !loading ? projects === null || projects === void 0 ? void 0 : projects.map((project, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                                        initial: {\n                                            opacity: 0,\n                                            y: 10\n                                        },\n                                        whileInView: {\n                                            opacity: 1,\n                                            y: 0\n                                        },\n                                        viewport: {\n                                            once: true,\n                                            amount: 1\n                                        },\n                                        transition: {\n                                            duration: 0.5,\n                                            delay: i / 11\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            title: project.title,\n                                            slug: project.repo_name,\n                                            stack: project.stack,\n                                            overview: project.overview,\n                                            links: project.links\n                                        }, i, false, {\n                                            fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, i, false, {\n                                        fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loaders_Loader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row justify-center items-center mt-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                                    initial: {\n                                        opacity: 0,\n                                        y: 10\n                                    },\n                                    whileInView: {\n                                        opacity: 1,\n                                        y: 0\n                                    },\n                                    viewport: {\n                                        once: true,\n                                        amount: 1\n                                    },\n                                    transition: {\n                                        duration: 0.5,\n                                        delay: 0.6\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        className: \"flex flex-row justify-center items-center border-solid border-[1px] border-[#350078] py-3 px-10 rounded-[8px] font-bold w-fit\",\n                                        href: \"/\",\n                                        children: [\n                                            \" \",\n                                            \"Return to home\",\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-full flex flex-row justify-center items-center pb-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col justify-center items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"font-bold\",\n                                    children: \"Read all my latest blogs at\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                    lineNumber: 127,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/idea\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Idea, {}, void 0, false, {\n                                        fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                    lineNumber: 128,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                            lineNumber: 126,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"siT9IhAx2uJOPfnpoJIP8+pWNnM=\", false, function() {\n    return [\n        _hooks_useAxios__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUFZOzs7Ozs7OENBQzNCLDhEQUFDdkIsa0RBQUlBO29DQUFDeUIsTUFBTTs4Q0FDViw0RUFBQ21COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9mO0dBNUhTeEM7O1FBSWFGLHVEQUFRQTs7O0tBSnJCRTtBQThIVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0cy9pbmRleC5qc3g/MjFlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9pbmRleC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2plY3RDYXJkXCI7XHJcbi8vIGltcG9ydCBhbGxQcm9qZWN0cyBmcm9tIFwiQC9kYXRhL3Byb2plY3REYXRhL2luZGV4Lmpzb25cIjtcclxuaW1wb3J0IEhvbWVPdXRsaW5lZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvSG9tZVJvdW5kZWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTWV0YSBmcm9tIFwiQC9jb21wb25lbnRzL01ldGFcIjtcclxuaW1wb3J0IHVzZUF4aW9zIGZyb20gXCJAL2hvb2tzL3VzZUF4aW9zXCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9Mb2FkZXJzL0xvYWRlclwiO1xyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHByb2plY3REYXRhID0gdXNlQXhpb3Moe1xyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgdXJsOiBcIi9hcGkvZ2V0UHJvamVjdHNcIixcclxuICAgIGhlYWRlcnM6IEpTT04uc3RyaW5naWZ5KHsgYWNjZXB0OiBcIiovKlwiIH0pLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGl0bGUoKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBpZiAocHJvamVjdERhdGEucmVzcG9uc2UgIT09IG51bGwpIHtcclxuICAgICAgc2V0UHJvamVjdHMocHJvamVjdERhdGEucmVzcG9uc2UpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbcHJvamVjdERhdGFdKTtcclxuXHJcbiAgY29uc3Qgc2V0VGl0bGUgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9IFwiUHJvamVjdHMgfCBhcm1hYW5jb2Rlcy5jb21cIjtcclxuICB9O1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLSBJRiBSRUFESU5HIFBST0pFQ1RTIEZST00gRklMRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAvLyBjb25zdCBnZXRBbGxQcm9qZWN0cyA9ICgpID0+IHtcclxuICAvLyAgICAgc2V0UHJvamVjdHMoYWxsUHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiBwcm9qZWN0KSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0gSUYgUkVBRElORyBQUk9KRUNUUyBGUk9NIEZJTEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNZXRhXHJcbiAgICAgICAgdGl0bGU9e1wiUHJvamVjdHMgfCBhcm1hYW5jb2Rlcy5jb21cIn1cclxuICAgICAgICBzZW9UaXRsZT17XCJQcm9qZWN0cyB8IGFybWFhbmNvZGVzLmNvbVwifVxyXG4gICAgICAgIHNlb1VSTD17XCJodHRwczovL3d3dy5hcm1hYW5jb2Rlcy5jb20vcHJvamVjdHNcIn1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzA4MDAxQV0gbWluLWgtc2NyZWVuIHB0LTEwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZ2FwLTEwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bM3JlbV0gZm9udC1zZW1pYm9sZFwiPlByb2plY3RzPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXIgZ2FwLThcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XHJcbiAgICAgICAgICAgICAgICA8SG9tZU91dGxpbmVkSWNvbiBjbGFzc05hbWU9XCJ0ZXh0LVsycmVtXVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LXdyYXAgZ2FwLTUgbW9iaWxlOm10LVsycmVtXSB0YWJsZXQ6bXQtWzJyZW1dIGxhcHRvcDptdC1bNXJlbV0gZGVza3RvcDptdC1bNXJlbV1cIj5cclxuICAgICAgICAgICAgeyFsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgIHByb2plY3RzPy5tYXAoKHByb2plY3QsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3tcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IDEwLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICB3aGlsZUluVmlldz17e1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgdmlld3BvcnQ9e3tcclxuICAgICAgICAgICAgICAgICAgICBvbmNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogMSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IGkgLyAxMSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8UHJvamVjdENhcmRcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17cHJvamVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBzbHVnPXtwcm9qZWN0LnJlcG9fbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBzdGFjaz17cHJvamVjdC5zdGFja31cclxuICAgICAgICAgICAgICAgICAgICBvdmVydmlldz17cHJvamVjdC5vdmVydmlld31cclxuICAgICAgICAgICAgICAgICAgICBsaW5rcz17cHJvamVjdC5saW5rc31cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtOFwiPlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIGluaXRpYWw9e3tcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICB5OiAxMCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHZpZXdwb3J0PXt7XHJcbiAgICAgICAgICAgICAgICBvbmNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiAxLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDAuNSxcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAwLjYsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItc29saWQgYm9yZGVyLVsxcHhdIGJvcmRlci1bIzM1MDA3OF0gcHktMyBweC0xMCByb3VuZGVkLVs4cHhdIGZvbnQtYm9sZCB3LWZpdFwiXHJcbiAgICAgICAgICAgICAgICBocmVmPXtcIi9cIn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICBSZXR1cm4gdG8gaG9tZXtcIiBcIn1cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwYi0xMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlJlYWQgYWxsIG15IGxhdGVzdCBibG9ncyBhdDwvZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9pZGVhXCJ9PlxyXG4gICAgICAgICAgICAgIDxJZGVhIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwibW90aW9uIiwiUHJvamVjdENhcmQiLCJIb21lT3V0bGluZWRJY29uIiwiTGluayIsIk1ldGEiLCJ1c2VBeGlvcyIsIkxvYWRlciIsIkhvbWUiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwcm9qZWN0RGF0YSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiYWNjZXB0Iiwic2V0VGl0bGUiLCJyZXNwb25zZSIsImRvY3VtZW50IiwidGl0bGUiLCJzZW9UaXRsZSIsInNlb1VSTCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImhyZWYiLCJtYXAiLCJwcm9qZWN0IiwiaSIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJvbmNlIiwiYW1vdW50IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJzbHVnIiwicmVwb19uYW1lIiwic3RhY2siLCJvdmVydmlldyIsImxpbmtzIiwiSWRlYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects/index.jsx\n"));

/***/ })

});