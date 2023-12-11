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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/index.module.css */ \"./styles/index.module.css\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ProjectCard */ \"./components/ProjectCard.jsx\");\n/* harmony import */ var _mui_icons_material_HomeRounded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/HomeRounded */ \"./node_modules/@mui/icons-material/HomeRounded.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Meta */ \"./components/Meta.jsx\");\n/* harmony import */ var _hooks_useAxios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useAxios */ \"./hooks/useAxios.js\");\n/* harmony import */ var _components_Loaders_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Loaders/Loader */ \"./components/Loaders/Loader.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// import allProjects from \"@/data/projectData/index.json\";\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const projectData = (0,_hooks_useAxios__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        method: \"get\",\n        url: \"/api/getProjects\",\n        headers: JSON.stringify({\n            accept: \"*/*\"\n        })\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTitle();\n        setLoading(true);\n        if (projectData.response !== null) {\n            setProjects(projectData.response);\n            setLoading(false);\n        }\n    }, [\n        projectData\n    ]);\n    const setTitle = ()=>{\n        document.title = \"Projects | armaancodes.com\";\n    };\n    // ----------------- IF READING PROJECTS FROM FILE --------------------------\n    // const getAllProjects = () => {\n    //     setProjects(allProjects.map((project) => project));\n    // };\n    // ----------------- IF READING PROJECTS FROM FILE --------------------------\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Projects | armaancodes.com\",\n                seoTitle: \"Projects | armaancodes.com\",\n                seoURL: \"https://www.armaancodes.com/projects\"\n            }, void 0, false, {\n                fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#08001A] min-h-screen pt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row justify-between items-center gap-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-[3rem] font-semibold\",\n                                        children: \"Projects\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-row justify-end items-center gap-8\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_HomeRounded__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                className: \"text-[2rem]\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row justify-center items-center flex-wrap gap-5 mobile:mt-[2rem] tablet:mt-[2rem] laptop:mt-[5rem] desktop:mt-[5rem]\",\n                                children: !loading ? projects === null || projects === void 0 ? void 0 : projects.map((project, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                                        initial: {\n                                            opacity: 0,\n                                            y: 10\n                                        },\n                                        whileInView: {\n                                            opacity: 1,\n                                            y: 0\n                                        },\n                                        viewport: {\n                                            once: true,\n                                            amount: 1\n                                        },\n                                        transition: {\n                                            duration: 0.5,\n                                            delay: i / 11\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            title: project.title,\n                                            slug: project.repo_name,\n                                            stack: project.stack,\n                                            overview: project.overview,\n                                            links: project.links\n                                        }, i, false, {\n                                            fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, i, false, {\n                                        fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loaders_Loader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row justify-center items-center mt-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                                    initial: {\n                                        opacity: 0,\n                                        y: 10\n                                    },\n                                    whileInView: {\n                                        opacity: 1,\n                                        y: 0\n                                    },\n                                    viewport: {\n                                        once: true,\n                                        amount: 1\n                                    },\n                                    transition: {\n                                        duration: 0.5,\n                                        delay: 0.6\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        className: \"flex flex-row justify-center items-center border-solid border-[1px] border-[#350078] py-3 px-10 rounded-[8px] font-bold w-fit\",\n                                        href: \"/\",\n                                        children: [\n                                            \" \",\n                                            \"Return to home\",\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-full flex flex-row justify-center items-center pb-10\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\portfolio_v2\\\\pages\\\\projects\\\\index.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"siT9IhAx2uJOPfnpoJIP8+pWNnM=\", false, function() {\n    return [\n        _hooks_useAxios__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUl2QjtHQXJIU25COztRQUlhRix1REFBUUE7OztLQUpyQkU7QUF1SFQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvaW5kZXguanN4PzIxZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvaW5kZXgubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZFwiO1xyXG4vLyBpbXBvcnQgYWxsUHJvamVjdHMgZnJvbSBcIkAvZGF0YS9wcm9qZWN0RGF0YS9pbmRleC5qc29uXCI7XHJcbmltcG9ydCBIb21lT3V0bGluZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0hvbWVSb3VuZGVkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE1ldGEgZnJvbSBcIkAvY29tcG9uZW50cy9NZXRhXCI7XHJcbmltcG9ydCB1c2VBeGlvcyBmcm9tIFwiQC9ob29rcy91c2VBeGlvc1wiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvTG9hZGVycy9Mb2FkZXJcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0RGF0YSA9IHVzZUF4aW9zKHtcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHVybDogXCIvYXBpL2dldFByb2plY3RzXCIsXHJcbiAgICBoZWFkZXJzOiBKU09OLnN0cmluZ2lmeSh7IGFjY2VwdDogXCIqLypcIiB9KSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRpdGxlKCk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgaWYgKHByb2plY3REYXRhLnJlc3BvbnNlICE9PSBudWxsKSB7XHJcbiAgICAgIHNldFByb2plY3RzKHByb2plY3REYXRhLnJlc3BvbnNlKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW3Byb2plY3REYXRhXSk7XHJcblxyXG4gIGNvbnN0IHNldFRpdGxlID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQudGl0bGUgPSBcIlByb2plY3RzIHwgYXJtYWFuY29kZXMuY29tXCI7XHJcbiAgfTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0gSUYgUkVBRElORyBQUk9KRUNUUyBGUk9NIEZJTEUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgLy8gY29uc3QgZ2V0QWxsUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgLy8gICAgIHNldFByb2plY3RzKGFsbFByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gcHJvamVjdCkpO1xyXG4gIC8vIH07XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tIElGIFJFQURJTkcgUFJPSkVDVFMgRlJPTSBGSUxFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TWV0YVxyXG4gICAgICAgIHRpdGxlPXtcIlByb2plY3RzIHwgYXJtYWFuY29kZXMuY29tXCJ9XHJcbiAgICAgICAgc2VvVGl0bGU9e1wiUHJvamVjdHMgfCBhcm1hYW5jb2Rlcy5jb21cIn1cclxuICAgICAgICBzZW9VUkw9e1wiaHR0cHM6Ly93d3cuYXJtYWFuY29kZXMuY29tL3Byb2plY3RzXCJ9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMwODAwMUFdIG1pbi1oLXNjcmVlbiBwdC0xMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGdhcC0xMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzNyZW1dIGZvbnQtc2VtaWJvbGRcIj5Qcm9qZWN0czwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIGdhcC04XCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PlxyXG4gICAgICAgICAgICAgICAgPEhvbWVPdXRsaW5lZEljb24gY2xhc3NOYW1lPVwidGV4dC1bMnJlbV1cIiAvPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC13cmFwIGdhcC01IG1vYmlsZTptdC1bMnJlbV0gdGFibGV0Om10LVsycmVtXSBsYXB0b3A6bXQtWzVyZW1dIGRlc2t0b3A6bXQtWzVyZW1dXCI+XHJcbiAgICAgICAgICAgIHshbG9hZGluZyA/IChcclxuICAgICAgICAgICAgICBwcm9qZWN0cz8ubWFwKChwcm9qZWN0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgICAgICB5OiAxMCxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3tcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgb25jZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC41LFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiBpIC8gMTEsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFByb2plY3RDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Byb2plY3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Zz17cHJvamVjdC5yZXBvX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhY2s9e3Byb2plY3Quc3RhY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnZpZXc9e3Byb2plY3Qub3ZlcnZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua3M9e3Byb2plY3QubGlua3N9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LThcIj5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICBpbml0aWFsPXt7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgeTogMTAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB3aGlsZUluVmlldz17e1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB2aWV3cG9ydD17e1xyXG4gICAgICAgICAgICAgICAgb25jZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogMSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXHJcbiAgICAgICAgICAgICAgICBkZWxheTogMC42LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1bMXB4XSBib3JkZXItWyMzNTAwNzhdIHB5LTMgcHgtMTAgcm91bmRlZC1bOHB4XSBmb250LWJvbGQgdy1maXRcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj17XCIvXCJ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgUmV0dXJuIHRvIGhvbWV7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcGItMTBcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIm1vdGlvbiIsIlByb2plY3RDYXJkIiwiSG9tZU91dGxpbmVkSWNvbiIsIkxpbmsiLCJNZXRhIiwidXNlQXhpb3MiLCJMb2FkZXIiLCJIb21lIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicHJvamVjdERhdGEiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImFjY2VwdCIsInNldFRpdGxlIiwicmVzcG9uc2UiLCJkb2N1bWVudCIsInRpdGxlIiwic2VvVGl0bGUiLCJzZW9VUkwiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJocmVmIiwibWFwIiwicHJvamVjdCIsImkiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsImFtb3VudCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5Iiwic2x1ZyIsInJlcG9fbmFtZSIsInN0YWNrIiwib3ZlcnZpZXciLCJsaW5rcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects/index.jsx\n"));

/***/ })

});