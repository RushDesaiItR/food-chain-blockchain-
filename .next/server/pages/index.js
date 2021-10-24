(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "E:\\Food-Chain-Project\\components\\Header.js";
 // import { Input, Menu, Segment } from 'semantic-ui-react'


class Header extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_2__.Link, {
        route: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "item",
          children: "Supply Chian"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 10
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_2__.Link, {
        route: "/supply-chain/new",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "item",
          children: "Create Supply Chian"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this);
  }

}

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");


var _jsxFileName = "E:\\Food-Chain-Project\\components\\Layout.js";

/* eslint-disable max-len */
 // import { Container } from 'semantic-ui-react'
// import Head from "next/head"



const Layouts = props =>
/*#__PURE__*/
// <Container>
//     <Head>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>
//     </Head>
//       <Header/>
//       {props.children}
// </Container>
(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 4
  }, undefined), props.children]
}, void 0, true);

/* harmony default export */ __webpack_exports__["default"] = (Layouts);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./pages/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "E:\\Food-Chain-Project\\pages\\index.js";




class SupplyChainIndex extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Suply Chain"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SupplyChainIndex);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add("/hello/show", "/show");
routes.add("/supply-chain/new", "/supply_chain/new");
module.exports = routes;

/***/ }),

/***/ "./pages/styles.css":
/*!**************************!*\
  !*** ./pages/styles.css ***!
  \**************************/
/***/ (function() {



/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-routes");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLWNoYWluLXByb2plY3QvLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9mb29kLWNoYWluLXByb2plY3QvLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly9mb29kLWNoYWluLXByb2plY3QvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mb29kLWNoYWluLXByb2plY3QvLi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vZm9vZC1jaGFpbi1wcm9qZWN0L2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly9mb29kLWNoYWluLXByb2plY3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zvb2QtY2hhaW4tcHJvamVjdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkhlYWRlciIsIkNvbXBvbmVudCIsInJlbmRlciIsIkxheW91dHMiLCJwcm9wcyIsImNoaWxkcmVuIiwiU3VwcGx5Q2hhaW5JbmRleCIsIlJlYWN0Iiwicm91dGVzIiwicmVxdWlyZSIsImFkZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNlLE1BQU1BLE1BQU4sU0FBcUJDLDRDQUFyQixDQUErQjtBQUM1Q0MsUUFBTSxHQUFHO0FBR1Asd0JBQ0U7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDhCQUNHLDhEQUFDLHlDQUFEO0FBQU0sYUFBSyxFQUFDLEdBQVo7QUFBQSwrQkFDQztBQUFHLG1CQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxlQUtFLDhEQUFDLHlDQUFEO0FBQU0sYUFBSyxFQUFDLG1CQUFaO0FBQUEsK0JBQ0U7QUFBRyxtQkFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFXRDs7QUFmMkMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDlDO0NBR0E7QUFDQTs7QUFDQTs7QUFDQSxNQUFNQyxPQUFPLEdBQUlDLEtBQUQ7QUFBQTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQSwwQkFDQyw4REFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsRUFFQ0EsS0FBSyxDQUFDQyxRQUZQO0FBQUEsZ0JBVEY7O0FBZUEsK0RBQWVGLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNRyxnQkFBTixTQUErQkMsd0RBQS9CLENBQThDO0FBQzFDTCxRQUFNLEdBQUU7QUFDSix3QkFDSTtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFPSDs7QUFUeUM7O0FBVzlDLCtEQUFlSSxnQkFBZixFOzs7Ozs7Ozs7O0FDZEEsTUFBTUUsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdDQUFELENBQVAsRUFBZjs7QUFDQUQsTUFBTSxDQUFDRSxHQUFQLENBQVcsYUFBWCxFQUEwQixPQUExQjtBQUNBRixNQUFNLENBQUNFLEdBQVAsQ0FBVyxtQkFBWCxFQUFnQyxtQkFBaEM7QUFDQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSixNQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IHsgSW5wdXQsIE1lbnUsIFNlZ21lbnQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi9yb3V0ZXNcIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgPExpbmsgcm91dGU9XCIvXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+U3VwcGx5IENoaWFuPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPExpbmsgcm91dGU9XCIvc3VwcGx5LWNoYWluL25ld1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPkNyZWF0ZSBTdXBwbHkgQ2hpYW48L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbi8vIGltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiXHJcbmNvbnN0IExheW91dHMgPSAocHJvcHMpID0+IChcclxuICAvLyA8Q29udGFpbmVyPlxyXG4gIC8vICAgICA8SGVhZD5cclxuICAvLyAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi40LjEvc2VtYW50aWMubWluLmNzc1wiLz5cclxuICAvLyAgICAgPC9IZWFkPlxyXG4gIC8vICAgICAgIDxIZWFkZXIvPlxyXG4gIC8vICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAvLyA8L0NvbnRhaW5lcj5cclxuICBcclxuICA8PlxyXG4gICA8SGVhZGVyLz5cclxuICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgPC8+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dHMiLCJpbXBvcnQgUmVhY3QseyBDb21vbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiXHJcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiXHJcbmNsYXNzIFN1cHBseUNoYWluSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPlN1cGx5IENoYWluPC9oMT5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3VwcGx5Q2hhaW5JbmRleDsiLCJjb25zdCByb3V0ZXMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIikoKTtcclxucm91dGVzLmFkZChcIi9oZWxsby9zaG93XCIsIFwiL3Nob3dcIilcclxucm91dGVzLmFkZChcIi9zdXBwbHktY2hhaW4vbmV3XCIsIFwiL3N1cHBseV9jaGFpbi9uZXdcIilcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXM7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=