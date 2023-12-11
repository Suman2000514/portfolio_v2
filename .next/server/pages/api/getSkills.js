"use strict";
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
exports.id = "pages/api/getSkills";
exports.ids = ["pages/api/getSkills"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/getSkills.js":
/*!********************************!*\
  !*** ./pages/api/getSkills.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getProjects)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function getProjects(req, res) {\n    let data = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"/data/skillData/skills\"));\n    let allSkills = [];\n    let skills;\n    for(let index = 0; index < data.length; index++){\n        const item = data[index];\n        skills = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"/data/skillData/skills/\") + item, \"utf-8\");\n        allSkills.push(JSON.parse(skills));\n    }\n    allSkills.sort((a, b)=>a.index - b.index);\n    res.status(200).send(allSkills);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0U2tpbGxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlCO0FBQ0Q7QUFFVCxlQUFlRSxZQUFZQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUVoRCxJQUFJQyxPQUFPLE1BQU1MLGdEQUFtQixDQUFDQyxnREFBUyxDQUFDUSxRQUFRQyxHQUFHLElBQUk7SUFDOUQsSUFBSUMsWUFBWSxFQUFFO0lBQ2xCLElBQUlDO0lBQ0osSUFBSyxJQUFJQyxRQUFRLEdBQUdBLFFBQVFSLEtBQUtTLE1BQU0sRUFBRUQsUUFBUztRQUM5QyxNQUFNRSxPQUFPVixJQUFJLENBQUNRLE1BQU07UUFDeEJELFNBQVMsTUFBTVosaURBQW9CLENBQUNDLGdEQUFTLENBQUNRLFFBQVFDLEdBQUcsSUFBSSw2QkFBNkJLLE1BQU07UUFDaEdKLFVBQVVNLElBQUksQ0FBQ0MsS0FBS0MsS0FBSyxDQUFDUDtJQUM5QjtJQUVBRCxVQUFVUyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRVIsS0FBSyxHQUFHUyxFQUFFVCxLQUFLO0lBRTFDVCxJQUFJbUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ2I7QUFDekIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpb192Mi8uL3BhZ2VzL2FwaS9nZXRTa2lsbHMuanM/YzQ2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2plY3RzKHJlcSwgcmVzKSB7XHJcbiAgICBcclxuICAgIGxldCBkYXRhID0gYXdhaXQgZnMucHJvbWlzZXMucmVhZGRpcihwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJy9kYXRhL3NraWxsRGF0YS9za2lsbHMnKSk7XHJcbiAgICBsZXQgYWxsU2tpbGxzID0gW107XHJcbiAgICBsZXQgc2tpbGxzO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGRhdGFbaW5kZXhdO1xyXG4gICAgICAgIHNraWxscyA9IGF3YWl0IGZzLnByb21pc2VzLnJlYWRGaWxlKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnL2RhdGEvc2tpbGxEYXRhL3NraWxscy8nKSArIGl0ZW0sIFwidXRmLThcIik7XHJcbiAgICAgICAgYWxsU2tpbGxzLnB1c2goSlNPTi5wYXJzZShza2lsbHMpKTtcclxuICAgIH1cclxuXHJcbiAgICBhbGxTa2lsbHMuc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpO1xyXG4gICAgXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChhbGxTa2lsbHMpO1xyXG59Il0sIm5hbWVzIjpbImZzIiwicGF0aCIsImdldFByb2plY3RzIiwicmVxIiwicmVzIiwiZGF0YSIsInByb21pc2VzIiwicmVhZGRpciIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiYWxsU2tpbGxzIiwic2tpbGxzIiwiaW5kZXgiLCJsZW5ndGgiLCJpdGVtIiwicmVhZEZpbGUiLCJwdXNoIiwiSlNPTiIsInBhcnNlIiwic29ydCIsImEiLCJiIiwic3RhdHVzIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getSkills.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getSkills.js"));
module.exports = __webpack_exports__;

})();