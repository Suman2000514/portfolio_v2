/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./State/Reducers/nightModeReducer.js":
/*!********************************************!*\
  !*** ./State/Reducers/nightModeReducer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst reducer = (state = {\n    bg: \"#242525\",\n    text: \"#ffffff\"\n}, action)=>{\n    if (action.payload === true) {\n        return {\n            bg: \"#242525\",\n            text: \"#ffffff\"\n        };\n    } else if (action.payload === false) {\n        return {\n            bg: \"#ffffff\",\n            text: \"#000000\"\n        };\n    } else {\n        return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdGF0ZS9SZWR1Y2Vycy9uaWdodE1vZGVSZWR1Y2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxVQUFVLENBQ1pDLFFBQVE7SUFDSkMsSUFBSTtJQUNKQyxNQUFNO0FBQ1YsQ0FBQyxFQUNEQyxTQUNDO0lBQ0QsSUFBSUEsT0FBT0MsT0FBTyxLQUFLLElBQUksRUFBRTtRQUN6QixPQUFPO1lBQ0hILElBQUk7WUFDSkMsTUFBTTtRQUNWO0lBQ0osT0FBTyxJQUFJQyxPQUFPQyxPQUFPLEtBQUssS0FBSyxFQUFFO1FBQ2pDLE9BQU87WUFDSEgsSUFBSTtZQUNKQyxNQUFNO1FBQ1Y7SUFDSixPQUFPO1FBQ0gsT0FBT0Y7SUFDWCxDQUFDO0FBQ0w7QUFFQSxpRUFBZUQsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpb192Mi8uL1N0YXRlL1JlZHVjZXJzL25pZ2h0TW9kZVJlZHVjZXIuanM/MTQ4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZWR1Y2VyID0gKFxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgYmc6IFwiIzI0MjUyNVwiLFxyXG4gICAgICAgIHRleHQ6IFwiI2ZmZmZmZlwiXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uXHJcbikgPT4ge1xyXG4gICAgaWYgKGFjdGlvbi5wYXlsb2FkID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYmc6IFwiIzI0MjUyNVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIiNmZmZmZmZcIlxyXG4gICAgICAgIH07XHJcbiAgICB9IGVsc2UgaWYgKGFjdGlvbi5wYXlsb2FkID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGJnOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgdGV4dDogXCIjMDAwMDAwXCJcclxuICAgICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsicmVkdWNlciIsInN0YXRlIiwiYmciLCJ0ZXh0IiwiYWN0aW9uIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./State/Reducers/nightModeReducer.js\n");

/***/ }),

/***/ "./State/Reducers/reducers.js":
/*!************************************!*\
  !*** ./State/Reducers/reducers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nightModeReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nightModeReducer */ \"./State/Reducers/nightModeReducer.js\");\n\n\nconst reducers = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    darkMode: _nightModeReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducers);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdGF0ZS9SZWR1Y2Vycy9yZWR1Y2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBQ1U7QUFFbEQsTUFBTUUsV0FBV0Ysc0RBQWVBLENBQUM7SUFDN0JHLFVBQVVGLHlEQUFnQkE7QUFDOUI7QUFFQSxpRUFBZUMsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpb192Mi8uL1N0YXRlL1JlZHVjZXJzL3JlZHVjZXJzLmpzPzFjMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBuaWdodE1vZGVSZWR1Y2VyIGZyb20gXCIuL25pZ2h0TW9kZVJlZHVjZXJcIjtcclxuXHJcbmNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGRhcmtNb2RlOiBuaWdodE1vZGVSZWR1Y2VyLFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcnM7Il0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsIm5pZ2h0TW9kZVJlZHVjZXIiLCJyZWR1Y2VycyIsImRhcmtNb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./State/Reducers/reducers.js\n");

/***/ }),

/***/ "./State/Store.js":
/*!************************!*\
  !*** ./State/Store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"persistor\": () => (/* binding */ persistor)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Reducers_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Reducers/reducers */ \"./State/Reducers/reducers.js\");\n\n\n\n\n\nconst persistConfig = {\n    key: \"root\",\n    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default())\n};\nconst persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_2__.persistReducer)(persistConfig, _Reducers_reducers__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(persistedReducer, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));\nconst persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_2__.persistStore)(store);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdGF0ZS9TdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNyQjtBQUM2QjtBQUNiO0FBQ0w7QUFFM0MsTUFBTU8sZ0JBQWdCO0lBQ2xCQyxLQUFLO0lBQ0xILE9BQU9BLG9FQUFBQTtBQUNYO0FBRUEsTUFBTUksbUJBQW1CTCw2REFBY0EsQ0FBQ0csZUFBZUQsMERBQVFBO0FBQy9ELE1BQU1JLFFBQVFULGtEQUFXQSxDQUFDUSxrQkFBa0JULHNEQUFlQSxDQUFDRSxvREFBS0E7QUFDakUsTUFBTVMsWUFBWVIsMkRBQVlBLENBQUNPO0FBRVo7QUFDbkIsaUVBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fdjIvLi9TdGF0ZS9TdG9yZS5qcz83NWRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUsIHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSBcInJlZHV4LXBlcnNpc3RcIjtcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHJlZHVjZXJzIGZyb20gXCIuL1JlZHVjZXJzL3JlZHVjZXJzXCI7XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAga2V5OiBcInJvb3RcIixcclxuICAgIHN0b3JhZ2UsXHJcbn07XHJcblxyXG5jb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcmVkdWNlcnMpO1xyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHBlcnNpc3RlZFJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpO1xyXG5jb25zdCBwZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpO1xyXG5cclxuZXhwb3J0IHtwZXJzaXN0b3J9O1xyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiXSwibmFtZXMiOlsiYXBwbHlNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJ0aHVuayIsInBlcnNpc3RTdG9yZSIsInBlcnNpc3RSZWR1Y2VyIiwic3RvcmFnZSIsInJlZHVjZXJzIiwicGVyc2lzdENvbmZpZyIsImtleSIsInBlcnNpc3RlZFJlZHVjZXIiLCJzdG9yZSIsInBlcnNpc3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./State/Store.js\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _State_Store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/State/Store */ \"./State/Store.js\");\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _State_Store__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__.PersistGate, {\n            loading: null,\n            persistor: _State_Store__WEBPACK_IMPORTED_MODULE_4__.persistor,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"E:\\\\portfolio_v2\\\\pages\\\\_app.jsx\",\n                lineNumber: 10,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\portfolio_v2\\\\pages\\\\_app.jsx\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\portfolio_v2\\\\pages\\\\_app.jsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNRO0FBQ3VCO0FBQ2I7QUFFbEMsU0FBU0ksSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ2xELHFCQUNJLDhEQUFDTixpREFBUUE7UUFBQ0UsT0FBT0Esb0RBQUtBO2tCQUNsQiw0RUFBQ0Qsd0VBQVdBO1lBQUNNLFNBQVMsSUFBSTtZQUFFSixXQUFXQSxtREFBU0E7c0JBQzVDLDRFQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXhDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fdjIvLi9wYWdlcy9fYXBwLmpzeD80Y2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBQZXJzaXN0R2F0ZSB9IGZyb20gXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCI7XHJcbmltcG9ydCBzdG9yZSwgeyBwZXJzaXN0b3IgfSBmcm9tIFwiQC9TdGF0ZS9TdG9yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPFBlcnNpc3RHYXRlIGxvYWRpbmc9e251bGx9IHBlcnNpc3Rvcj17cGVyc2lzdG9yfT5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9QZXJzaXN0R2F0ZT5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJQZXJzaXN0R2F0ZSIsInN0b3JlIiwicGVyc2lzdG9yIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();