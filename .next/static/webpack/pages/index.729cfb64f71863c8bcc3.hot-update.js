webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductList.js":
/*!***********************************!*\
  !*** ./components/ProductList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_jjmountain_code_sample_shopify_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store-js */ \"./node_modules/store-js/dist/store.legacy.js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_jjmountain_code_sample_shopify_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nquery getProducts($ids:[ID!]!) {\\n  nodes(ids: $ids) {\\n    ... on Product {\\n      title\\n      handle\\n      id\\n      images(first: 1) {\\n        edges {\\n          node {\\n            originalSrc\\n            altText\\n          }\\n        }\\n      }\\n      variants(first: 1) {\\n        edges {\\n          node {\\n            price\\n            id\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());\n\nfunction ProductList() {\n  _s();\n\n  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])(GET_PRODUCTS_BY_ID, {\n    variables: {\n      ids: store_js__WEBPACK_IMPORTED_MODULE_5___default.a.get('ids')\n    }\n  }),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"div\", {\n    children: \"Loading...\"\n  });\n  if (error) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"div\", {\n    children: error.message\n  });\n  console.log('this is data', data);\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Card\"], {\n    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"ResourceList\"], {\n      showHeader: true,\n      resourceName: {\n        singular: 'Product',\n        plural: 'Products'\n      },\n      items: data.items,\n      renderItem: function renderItem(item) {\n        var media = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Thumbnail\"], {\n          source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : ''\n        });\n      }\n    })\n  });\n}\n\n_s(ProductList, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function () {\n  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"]];\n});\n\n_c = ProductList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcz9iOGQ1Il0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9JRCIsImdxbCIsIlByb2R1Y3RMaXN0IiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJpZHMiLCJzdG9yZSIsImdldCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInNpbmd1bGFyIiwicGx1cmFsIiwiaXRlbXMiLCJpdGVtIiwibWVkaWEiLCJpbWFnZXMiLCJlZGdlcyIsIm5vZGUiLCJvcmlnaW5hbFNyYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLGtEQUFILG1CQUF4Qjs7QUE0QkEsU0FBU0MsV0FBVCxHQUF1QjtBQUFBOztBQUFBLGtCQUVZQyxvRUFBUSxDQUFDSCxrQkFBRCxFQUFxQjtBQUFFSSxhQUFTLEVBQUU7QUFBRUMsU0FBRyxFQUFFQywrQ0FBSyxDQUFDQyxHQUFOLENBQVUsS0FBVjtBQUFQO0FBQWIsR0FBckIsQ0FGcEI7QUFBQSxNQUViQyxPQUZhLGFBRWJBLE9BRmE7QUFBQSxNQUVKQyxLQUZJLGFBRUpBLEtBRkk7QUFBQSxNQUVHQyxJQUZILGFBRUdBLElBRkg7O0FBSXJCLE1BQUlGLE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUEsSUFBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxvQkFBTztBQUFBLGNBQU1BLEtBQUssQ0FBQ0U7QUFBWixJQUFQO0FBQ1hDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJILElBQTVCO0FBRUEsc0JBQ0UsOERBQUMscURBQUQ7QUFBQSwyQkFDRSw4REFBQyw2REFBRDtBQUNFLGdCQUFVLE1BRFo7QUFFRSxrQkFBWSxFQUFFO0FBQUVJLGdCQUFRLEVBQUUsU0FBWjtBQUF1QkMsY0FBTSxFQUFFO0FBQS9CLE9BRmhCO0FBR0UsV0FBSyxFQUFFTCxJQUFJLENBQUNNLEtBSGQ7QUFJRSxnQkFBVSxFQUFFLG9CQUFBQyxJQUFJLEVBQUk7QUFDbEIsWUFBTUMsS0FBSyxnQkFDVCw4REFBQywwREFBRDtBQUNFLGdCQUFNLEVBQ0pELElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLElBQXVCSCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixFQUFxQkMsSUFBckIsQ0FBMEJDLFdBQWpELEdBQStEO0FBRm5FLFVBREY7QUFPRDtBQVpIO0FBREYsSUFERjtBQW1CRDs7R0EzQlFwQixXO1VBRTBCQyw0RDs7O0tBRjFCRCxXO0FBNkJNQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdExpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiO1xuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgUmVzb3VyY2VMaXN0LFxuICBTdGFjayxcbiAgVGV4dFN0eWxlLFxuICBUaHVtYm5haWwsXG59IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xuXG5jb25zdCBHRVRfUFJPRFVDVFNfQllfSUQgPSBncWxgXG5xdWVyeSBnZXRQcm9kdWN0cygkaWRzOltJRCFdISkge1xuICBub2RlcyhpZHM6ICRpZHMpIHtcbiAgICAuLi4gb24gUHJvZHVjdCB7XG4gICAgICB0aXRsZVxuICAgICAgaGFuZGxlXG4gICAgICBpZFxuICAgICAgaW1hZ2VzKGZpcnN0OiAxKSB7XG4gICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU3JjXG4gICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXJpYW50cyhmaXJzdDogMSkge1xuICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgaWRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmA7XG5cbmZ1bmN0aW9uIFByb2R1Y3RMaXN0KCkge1xuXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9QUk9EVUNUU19CWV9JRCwgeyB2YXJpYWJsZXM6IHsgaWRzOiBzdG9yZS5nZXQoJ2lkcycpIH0gfSlcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PlxuICBjb25zb2xlLmxvZygndGhpcyBpcyBkYXRhJywgZGF0YSlcblxuICByZXR1cm4oXG4gICAgPENhcmQ+XG4gICAgICA8UmVzb3VyY2VMaXN0XG4gICAgICAgIHNob3dIZWFkZXJcbiAgICAgICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiAnUHJvZHVjdCcsIHBsdXJhbDogJ1Byb2R1Y3RzJ319XG4gICAgICAgIGl0ZW1zPXtkYXRhLml0ZW1zfVxuICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcbiAgICAgICAgICBjb25zdCBtZWRpYSA9IChcbiAgICAgICAgICAgIDxUaHVtYm5haWwgXG4gICAgICAgICAgICAgIHNvdXJjZT17XG4gICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMuZWRnZXNbMF0gPyBpdGVtLmltYWdlcy5lZGdlc1swXS5ub2RlLm9yaWdpbmFsU3JjIDogJydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH19IFxuICAgICAgXG4gICAgICAvPlxuICAgIDwvQ2FyZD5cbiAgKSBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductList.js\n");

/***/ })

})