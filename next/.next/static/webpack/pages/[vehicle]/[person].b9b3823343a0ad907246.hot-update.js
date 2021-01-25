webpackHotUpdate_N_E("pages/[vehicle]/[person]",{

/***/ "./src/pages/[vehicle]/[person].tsx":
/*!******************************************!*\
  !*** ./src/pages/[vehicle]/[person].tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Person; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/Users/alex/dev/course/next/src/pages/[vehicle]/[person].tsx\",\n    _s = $RefreshSig$();\n\n\nfunction Person(_ref) {\n  _s();\n\n  var ownersList = _ref.ownersList;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])(),\n      query = _useRouter.query;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"pre\", {\n      children: JSON.stringify(ownersList, null, 4)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      children: [query.person, \"'s \", query.vehicle]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Person, \"wby5GzzI23pLfTlf5I7v7XLG1RQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Person;\n\nPerson.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var query, response, ownersList;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = ctx.query;\n            _context.next = 3;\n            return fetch(\"http://localhost:4001/vehicles?ownerName=\".concat(query.person, \"&vehicle=\").concat(query.vehicle));\n\n          case 3:\n            response = _context.sent;\n            _context.next = 6;\n            return response.json();\n\n          case 6:\n            ownersList = _context.sent;\n            return _context.abrupt(\"return\", {\n              ownersList: ownersList\n            });\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar _c;\n\n$RefreshReg$(_c, \"Person\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1t2ZWhpY2xlXS9bcGVyc29uXS50c3g/ODZlNiJdLCJuYW1lcyI6WyJQZXJzb24iLCJvd25lcnNMaXN0IiwidXNlUm91dGVyIiwicXVlcnkiLCJKU09OIiwic3RyaW5naWZ5IiwicGVyc29uIiwidmVoaWNsZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPZSxTQUFTQSxNQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBYkMsVUFBYSxRQUFiQSxVQUFhOztBQUFBLG1CQUN2QkMsNkRBQVMsRUFEYztBQUFBLE1BQ2pDQyxLQURpQyxjQUNqQ0EsS0FEaUM7O0FBR3pDLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSxnQkFBTUMsSUFBSSxDQUFDQyxTQUFMLENBQWVKLFVBQWYsRUFBMkIsSUFBM0IsRUFBaUMsQ0FBakM7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBLGlCQUFLRSxLQUFLLENBQUNHLE1BQVgsU0FBc0JILEtBQUssQ0FBQ0ksT0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFNSDs7R0FUdUJQLE07VUFDRkUscUQ7OztLQURFRixNOztBQVd4QkEsTUFBTSxDQUFDUSxlQUFQO0FBQUEsK0xBQXlCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkTixpQkFEYyxHQUNMTSxHQURLLENBQ2ROLEtBRGM7QUFBQTtBQUFBLG1CQUdFTyxLQUFLLG9EQUE2Q1AsS0FBSyxDQUFDRyxNQUFuRCxzQkFBcUVILEtBQUssQ0FBQ0ksT0FBM0UsRUFIUDs7QUFBQTtBQUdmSSxvQkFIZTtBQUFBO0FBQUEsbUJBSUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUpKOztBQUFBO0FBSWZYLHNCQUplO0FBQUEsNkNBTWQ7QUFBQ0Esd0JBQVUsRUFBRUE7QUFBYixhQU5jOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXpCOztBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL1t2ZWhpY2xlXS9bcGVyc29uXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHtWZWhpY2xlUGVyc29ufSBmcm9tICcuLi8uLi8uLi9hcGkvVmVoaWNsZVBlcnNvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyc29uUHJvcHMge1xuICAgIG93bmVyc0xpc3Q6IFZlaGljbGVQZXJzb25bXSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyc29uKHtvd25lcnNMaXN0fSkge1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KG93bmVyc0xpc3QsIG51bGwsIDQpfTwvcHJlPlxuICAgICAgICAgICAgPGgxPntxdWVyeS5wZXJzb259J3Mge3F1ZXJ5LnZlaGljbGV9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5QZXJzb24uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAgIGNvbnN0IHtxdWVyeX0gPSBjdHg7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDEvdmVoaWNsZXM/b3duZXJOYW1lPSR7cXVlcnkucGVyc29ufSZ2ZWhpY2xlPSR7cXVlcnkudmVoaWNsZX1gKTtcbiAgICBjb25zdCBvd25lcnNMaXN0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIHtvd25lcnNMaXN0OiBvd25lcnNMaXN0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[vehicle]/[person].tsx\n");

/***/ })

})