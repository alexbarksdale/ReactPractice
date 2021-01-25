module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/[vehicle]/[person].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/[vehicle]/[person].tsx":
/*!******************************************!*\
  !*** ./src/pages/[vehicle]/[person].tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Person; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/alex/dev/course/next/src/pages/[vehicle]/[person].tsx\";\n\nfunction Person({\n  ownersList\n}) {\n  const {\n    query\n  } = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n      children: JSON.stringify(ownersList, null, 4)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: [query.person, \"'s \", query.vehicle]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n\nPerson.getInitialProps = async ctx => {\n  const {\n    query\n  } = ctx;\n  const response = await fetch(`http://localhost:4001/vehicles?ownerName=${query.person}&vehicle=${query.vehicle}`);\n  const ownersList = await response.json();\n  return {\n    ownersList: ownersList\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvW3ZlaGljbGVdL1twZXJzb25dLnRzeD84NmU2Il0sIm5hbWVzIjpbIlBlcnNvbiIsIm93bmVyc0xpc3QiLCJxdWVyeSIsInVzZVJvdXRlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJwZXJzb24iLCJ2ZWhpY2xlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFPZSxTQUFTQSxNQUFULENBQWdCO0FBQUVDO0FBQUYsQ0FBaEIsRUFBNkM7QUFDMUQsUUFBTTtBQUFFQztBQUFGLE1BQVlDLDZEQUFTLEVBQTNCO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLGdCQUFNQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosVUFBZixFQUEyQixJQUEzQixFQUFpQyxDQUFqQztBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsaUJBQ0dDLEtBQUssQ0FBQ0ksTUFEVCxTQUNvQkosS0FBSyxDQUFDSyxPQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztBQVNEUCxNQUFNLENBQUNRLGVBQVAsR0FBeUIsTUFBT0MsR0FBUCxJQUFrQztBQUN6RCxRQUFNO0FBQUVQO0FBQUYsTUFBWU8sR0FBbEI7QUFFQSxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUN6Qiw0Q0FBMkNULEtBQUssQ0FBQ0ksTUFBTyxZQUFXSixLQUFLLENBQUNLLE9BQVEsRUFEeEQsQ0FBNUI7QUFHQSxRQUFNTixVQUFVLEdBQUcsTUFBTVMsUUFBUSxDQUFDRSxJQUFULEVBQXpCO0FBRUEsU0FBTztBQUFFWCxjQUFVLEVBQUVBO0FBQWQsR0FBUDtBQUNELENBVEQiLCJmaWxlIjoiLi9zcmMvcGFnZXMvW3ZlaGljbGVdL1twZXJzb25dLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlQ29udGV4dCB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFZlaGljbGVQZXJzb24gfSBmcm9tIFwiLi4vLi4vLi4vYXBpL1ZlaGljbGVQZXJzb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBQZXJzb25Qcm9wcyB7XG4gIG93bmVyc0xpc3Q/OiBWZWhpY2xlUGVyc29uW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcnNvbih7IG93bmVyc0xpc3QgfTogUGVyc29uUHJvcHMpIHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkob3duZXJzTGlzdCwgbnVsbCwgNCl9PC9wcmU+XG4gICAgICA8aDE+XG4gICAgICAgIHtxdWVyeS5wZXJzb259J3Mge3F1ZXJ5LnZlaGljbGV9XG4gICAgICA8L2gxPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5pbnRlcmZhY2UgQ3VzdG9tUGFnZUNvbnRleHQgZXh0ZW5kcyBOZXh0UGFnZUNvbnRleHQge1xuICBxdWVyeToge1xuICAgIHBlcnNvbjogc3RyaW5nO1xuICAgIHZlaGljbGU6IHN0cmluZztcbiAgfTtcbn1cblxuUGVyc29uLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHg6IEN1c3RvbVBhZ2VDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IGN0eDtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vbG9jYWxob3N0OjQwMDEvdmVoaWNsZXM/b3duZXJOYW1lPSR7cXVlcnkucGVyc29ufSZ2ZWhpY2xlPSR7cXVlcnkudmVoaWNsZX1gXG4gICk7XG4gIGNvbnN0IG93bmVyc0xpc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIHsgb3duZXJzTGlzdDogb3duZXJzTGlzdCB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/[vehicle]/[person].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });