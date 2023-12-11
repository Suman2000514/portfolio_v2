"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SkillCardBlock.jsx":
/*!***************************************!*\
  !*** ./components/SkillCardBlock.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var devicons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devicons-react */ \"./node_modules/devicons-react/lib/index.js\");\n/* harmony import */ var devicons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devicons_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction SkillCardBlock(param) {\n    let { icon , name  } = param;\n    let IconComponent = null;\n    switch(icon){\n        case \"ReactOriginal\":\n            IconComponent = devicons_react__WEBPACK_IMPORTED_MODULE_2__.ReactOriginal;\n            break;\n        case \"NextjsOriginal\":\n            IconComponent = devicons_react__WEBPACK_IMPORTED_MODULE_2__.NextjsOriginal;\n            break;\n        case \"TailwindcssPlain\":\n            IconComponent = devicons_react__WEBPACK_IMPORTED_MODULE_2__.TailwindcssPlain;\n            break;\n        case \"MaterialuiOriginal\":\n            IconComponent = devicons_react__WEBPACK_IMPORTED_MODULE_2__.MaterialuiOriginal;\n            break;\n        case \"GithubOriginal\":\n            IconComponent = devicons_react__WEBPACK_IMPORTED_MODULE_2__.GithubOriginal;\n            break;\n            break;\n        case \"GitOriginal\":\n            IconComponent = devicons_react__WEBPACK_IMPORTED_MODULE_2__.GitOriginal;\n            break;\n        case \"FigmaOriginal\":\n            IconComponent = devicons_react__WEBPACK_IMPORTED_MODULE_2__.FigmaOriginal;\n            break;\n        case \"TypescriptOriginal\":\n            IconComponent = devicons_react__WEBPACK_IMPORTED_MODULE_2__.TypescriptOriginal;\n            break;\n        default:\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-evenly items-center gap-4 p-4 rounded-[5px] bg-[#350078]\",\n        children: [\n            IconComponent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IconComponent, {\n                    className: \"scale-[150%]\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\portfolio_v2\\\\components\\\\SkillCardBlock.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\portfolio_v2\\\\components\\\\SkillCardBlock.jsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"E:\\\\portfolio_v2\\\\components\\\\SkillCardBlock.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\portfolio_v2\\\\components\\\\SkillCardBlock.jsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_c = SkillCardBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SkillCardBlock);\nvar _c;\n$RefreshReg$(_c, \"SkillCardBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NraWxsQ2FyZEJsb2NrLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQW9CRjtBQUV4QixTQUFTbUIsZUFBZSxLQUFjLEVBQUU7UUFBaEIsRUFBRUMsS0FBSSxFQUFFQyxLQUFJLEVBQUUsR0FBZDtJQUN0QixJQUFJQyxnQkFBZ0IsSUFBSTtJQUN4QixPQUFRRjtRQUNOLEtBQUs7WUFDSEUsZ0JBQWdCckIseURBQWFBO1lBQzdCLEtBQU07UUFDUixLQUFLO1lBQ0hxQixnQkFBZ0JwQiwwREFBY0E7WUFDOUIsS0FBTTtRQUNSLEtBQUs7WUFDSG9CLGdCQUFnQm5CLDREQUFnQkE7WUFDaEMsS0FBTTtRQUVSLEtBQUs7WUFDSG1CLGdCQUFnQmpCLDhEQUFrQkE7WUFDbEMsS0FBTTtRQUVSLEtBQUs7WUFDSGlCLGdCQUFnQlAsMERBQWNBO1lBQzlCLEtBQU07WUFDTixLQUFNO1FBQ1IsS0FBSztZQUNITyxnQkFBZ0JOLHVEQUFXQTtZQUMzQixLQUFNO1FBQ1IsS0FBSztZQUNITSxnQkFBZ0JMLHlEQUFhQTtZQUM3QixLQUFNO1FBQ1IsS0FBSztZQUNISyxnQkFBZ0JKLDhEQUFrQkE7WUFDbEMsS0FBTTtRQUNSO1lBQ0UsS0FBTTtJQUNWO0lBRUEscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7O1lBQ1pGLCtCQUNDLDhEQUFDQzswQkFDQyw0RUFBQ0Q7b0JBQWNFLFdBQVU7Ozs7Ozs7Ozs7OzBCQUc3Qiw4REFBQ0Q7MEJBQUtGOzs7Ozs7Ozs7Ozs7QUFHWjtLQTVDU0Y7QUE4Q1QsK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ta2lsbENhcmRCbG9jay5qc3g/MDgyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgUmVhY3RPcmlnaW5hbCxcclxuICBOZXh0anNPcmlnaW5hbCxcclxuICBUYWlsd2luZGNzc1BsYWluLFxyXG4gIEphdmFzY3JpcHRPcmlnaW5hbCxcclxuICBNYXRlcmlhbHVpT3JpZ2luYWwsXHJcbiAgTm9kZWpzT3JpZ2luYWwsXHJcbiAgRXhwcmVzc09yaWdpbmFsLFxyXG4gIE15c3FsT3JpZ2luYWwsXHJcbiAgTW9uZ29kYk9yaWdpbmFsLFxyXG4gIEphdmFPcmlnaW5hbCxcclxuICBLb3RsaW5PcmlnaW5hbCxcclxuICBDT3JpZ2luYWwsXHJcbiAgUHl0aG9uT3JpZ2luYWwsXHJcbiAgUGhwT3JpZ2luYWwsXHJcbiAgR2l0aHViT3JpZ2luYWwsXHJcbiAgR2l0T3JpZ2luYWwsXHJcbiAgRmlnbWFPcmlnaW5hbCxcclxuICBUeXBlc2NyaXB0T3JpZ2luYWwsXHJcbn0gZnJvbSBcImRldmljb25zLXJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBTa2lsbENhcmRCbG9jayh7IGljb24sIG5hbWUgfSkge1xyXG4gIGxldCBJY29uQ29tcG9uZW50ID0gbnVsbDtcclxuICBzd2l0Y2ggKGljb24pIHtcclxuICAgIGNhc2UgXCJSZWFjdE9yaWdpbmFsXCI6XHJcbiAgICAgIEljb25Db21wb25lbnQgPSBSZWFjdE9yaWdpbmFsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJOZXh0anNPcmlnaW5hbFwiOlxyXG4gICAgICBJY29uQ29tcG9uZW50ID0gTmV4dGpzT3JpZ2luYWw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlRhaWx3aW5kY3NzUGxhaW5cIjpcclxuICAgICAgSWNvbkNvbXBvbmVudCA9IFRhaWx3aW5kY3NzUGxhaW47XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgXCJNYXRlcmlhbHVpT3JpZ2luYWxcIjpcclxuICAgICAgSWNvbkNvbXBvbmVudCA9IE1hdGVyaWFsdWlPcmlnaW5hbDtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBcIkdpdGh1Yk9yaWdpbmFsXCI6XHJcbiAgICAgIEljb25Db21wb25lbnQgPSBHaXRodWJPcmlnaW5hbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIkdpdE9yaWdpbmFsXCI6XHJcbiAgICAgIEljb25Db21wb25lbnQgPSBHaXRPcmlnaW5hbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiRmlnbWFPcmlnaW5hbFwiOlxyXG4gICAgICBJY29uQ29tcG9uZW50ID0gRmlnbWFPcmlnaW5hbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiVHlwZXNjcmlwdE9yaWdpbmFsXCI6XHJcbiAgICAgIEljb25Db21wb25lbnQgPSBUeXBlc2NyaXB0T3JpZ2luYWw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktZXZlbmx5IGl0ZW1zLWNlbnRlciBnYXAtNCBwLTQgcm91bmRlZC1bNXB4XSBiZy1bIzM1MDA3OF1cIj5cclxuICAgICAge0ljb25Db21wb25lbnQgJiYgKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8SWNvbkNvbXBvbmVudCBjbGFzc05hbWU9XCJzY2FsZS1bMTUwJV1cIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2PntuYW1lfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2tpbGxDYXJkQmxvY2s7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0T3JpZ2luYWwiLCJOZXh0anNPcmlnaW5hbCIsIlRhaWx3aW5kY3NzUGxhaW4iLCJKYXZhc2NyaXB0T3JpZ2luYWwiLCJNYXRlcmlhbHVpT3JpZ2luYWwiLCJOb2RlanNPcmlnaW5hbCIsIkV4cHJlc3NPcmlnaW5hbCIsIk15c3FsT3JpZ2luYWwiLCJNb25nb2RiT3JpZ2luYWwiLCJKYXZhT3JpZ2luYWwiLCJLb3RsaW5PcmlnaW5hbCIsIkNPcmlnaW5hbCIsIlB5dGhvbk9yaWdpbmFsIiwiUGhwT3JpZ2luYWwiLCJHaXRodWJPcmlnaW5hbCIsIkdpdE9yaWdpbmFsIiwiRmlnbWFPcmlnaW5hbCIsIlR5cGVzY3JpcHRPcmlnaW5hbCIsIlNraWxsQ2FyZEJsb2NrIiwiaWNvbiIsIm5hbWUiLCJJY29uQ29tcG9uZW50IiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SkillCardBlock.jsx\n"));

/***/ })

});