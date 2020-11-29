module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ProductList.js":
/*!***********************************!*\
  !*** ./components/ProductList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\n  query getProducts($ids: [ID!]!) {\n    nodes(ids: $ids) {\n      ... on Product {\n        title\n        handle\n        id\n        images(first: 1) {\n          edges {\n            node {\n              originalSrc\n              altText\n            }\n          }\n        }\n        variants(first: 1) {\n          edges {\n            node {\n              price\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n`;\n\nfunction ProductList() {\n  const {\n    loading,\n    error,\n    data\n  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(GET_PRODUCTS_BY_ID, {\n    variables: {\n      ids: store_js__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"ids\")\n    }\n  });\n  if (loading) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    children: \"Loading...\"\n  });\n  if (error) return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n    children: error.message\n  });\n  console.log(\"this is data\", data);\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"ResourceList\"], {\n      showHeader: true,\n      resourceName: {\n        singular: \"Product\",\n        plural: \"Products\"\n      },\n      items: data.nodes,\n      renderItem: item => {\n        const media = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Thumbnail\"], {\n          source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : \"\",\n          alt: item.images.edges[0] ? item.images.edges[0].altText : \"\"\n        });\n\n        const price = item.variants.edges[0].node.price;\n        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"ResourceList\"].Item, {\n          id: item.id,\n          media: media,\n          accessibilityLabel: `View details for ${item.title}`,\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"].Item, {\n              fill: true,\n              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h3\", {\n                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"TextStyle\"], {\n                  variation: \"strong\",\n                  children: item.title\n                })\n              })\n            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"].Item, {\n              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(\"p\", {\n                children: [\"$\", price]\n              })\n            })]\n          })\n        });\n      }\n    })\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LmpzP2I4ZDUiXSwibmFtZXMiOlsiR0VUX1BST0RVQ1RTX0JZX0lEIiwiZ3FsIiwiUHJvZHVjdExpc3QiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJpZHMiLCJzdG9yZSIsImdldCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJub2RlcyIsIml0ZW0iLCJtZWRpYSIsImltYWdlcyIsImVkZ2VzIiwibm9kZSIsIm9yaWdpbmFsU3JjIiwiYWx0VGV4dCIsInByaWNlIiwidmFyaWFudHMiLCJpZCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFFQSxNQUFNQSxrQkFBa0IsR0FBR0Msa0RBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQTFCQTs7QUE0QkEsU0FBU0MsV0FBVCxHQUF1QjtBQUNyQixRQUFNO0FBQUVDLFdBQUY7QUFBV0MsU0FBWDtBQUFrQkM7QUFBbEIsTUFBMkJDLG9FQUFRLENBQUNOLGtCQUFELEVBQXFCO0FBQzVETyxhQUFTLEVBQUU7QUFBRUMsU0FBRyxFQUFFQywrQ0FBSyxDQUFDQyxHQUFOLENBQVUsS0FBVjtBQUFQO0FBRGlELEdBQXJCLENBQXpDO0FBSUEsTUFBSVAsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQSxJQUFQO0FBQ2IsTUFBSUMsS0FBSixFQUFXLG9CQUFPO0FBQUEsY0FBTUEsS0FBSyxDQUFDTztBQUFaLElBQVA7QUFDWEMsU0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QlIsSUFBNUI7QUFFQSxzQkFDRSw4REFBQyxxREFBRDtBQUFBLDJCQUNFLDhEQUFDLDZEQUFEO0FBQ0UsZ0JBQVUsTUFEWjtBQUVFLGtCQUFZLEVBQUU7QUFBRVMsZ0JBQVEsRUFBRSxTQUFaO0FBQXVCQyxjQUFNLEVBQUU7QUFBL0IsT0FGaEI7QUFHRSxXQUFLLEVBQUVWLElBQUksQ0FBQ1csS0FIZDtBQUlFLGdCQUFVLEVBQUdDLElBQUQsSUFBVTtBQUNwQixjQUFNQyxLQUFLLGdCQUNULDhEQUFDLDBEQUFEO0FBQ0UsZ0JBQU0sRUFDSkQsSUFBSSxDQUFDRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsSUFDSUgsSUFBSSxDQUFDRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJDLElBQXJCLENBQTBCQyxXQUQ5QixHQUVJLEVBSlI7QUFNRSxhQUFHLEVBQUVMLElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLElBQXVCSCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixFQUFxQkcsT0FBNUMsR0FBc0Q7QUFON0QsVUFERjs7QUFVQSxjQUFNQyxLQUFLLEdBQUdQLElBQUksQ0FBQ1EsUUFBTCxDQUFjTCxLQUFkLENBQW9CLENBQXBCLEVBQXVCQyxJQUF2QixDQUE0QkcsS0FBMUM7QUFDQSw0QkFDRSw4REFBQyw2REFBRCxDQUFjLElBQWQ7QUFDRSxZQUFFLEVBQUVQLElBQUksQ0FBQ1MsRUFEWDtBQUVFLGVBQUssRUFBRVIsS0FGVDtBQUdFLDRCQUFrQixFQUFHLG9CQUFtQkQsSUFBSSxDQUFDVSxLQUFNLEVBSHJEO0FBQUEsaUNBS0UsK0RBQUMsc0RBQUQ7QUFBQSxvQ0FDRSw4REFBQyxzREFBRCxDQUFPLElBQVA7QUFBWSxrQkFBSSxNQUFoQjtBQUFBLHFDQUNFO0FBQUEsdUNBQ0UsOERBQUMsMERBQUQ7QUFBVywyQkFBUyxFQUFDLFFBQXJCO0FBQUEsNEJBQStCVixJQUFJLENBQUNVO0FBQXBDO0FBREY7QUFERixjQURGLGVBTUUsOERBQUMsc0RBQUQsQ0FBTyxJQUFQO0FBQUEscUNBQ0U7QUFBQSxnQ0FBS0gsS0FBTDtBQUFBO0FBREYsY0FORjtBQUFBO0FBTEYsVUFERjtBQWtCRDtBQWxDSDtBQURGLElBREY7QUF3Q0Q7O0FBRWN0QiwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdExpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiO1xuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgUmVzb3VyY2VMaXN0LFxuICBTdGFjayxcbiAgVGV4dFN0eWxlLFxuICBUaHVtYm5haWwsXG59IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcInN0b3JlLWpzXCI7XG5cbmNvbnN0IEdFVF9QUk9EVUNUU19CWV9JRCA9IGdxbGBcbiAgcXVlcnkgZ2V0UHJvZHVjdHMoJGlkczogW0lEIV0hKSB7XG4gICAgbm9kZXMoaWRzOiAkaWRzKSB7XG4gICAgICAuLi4gb24gUHJvZHVjdCB7XG4gICAgICAgIHRpdGxlXG4gICAgICAgIGhhbmRsZVxuICAgICAgICBpZFxuICAgICAgICBpbWFnZXMoZmlyc3Q6IDEpIHtcbiAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcbiAgICAgICAgICAgICAgYWx0VGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXJpYW50cyhmaXJzdDogMSkge1xuICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZnVuY3Rpb24gUHJvZHVjdExpc3QoKSB7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9QUk9EVUNUU19CWV9JRCwge1xuICAgIHZhcmlhYmxlczogeyBpZHM6IHN0b3JlLmdldChcImlkc1wiKSB9LFxuICB9KTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XG4gIGNvbnNvbGUubG9nKFwidGhpcyBpcyBkYXRhXCIsIGRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQ+XG4gICAgICA8UmVzb3VyY2VMaXN0XG4gICAgICAgIHNob3dIZWFkZXJcbiAgICAgICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiBcIlByb2R1Y3RcIiwgcGx1cmFsOiBcIlByb2R1Y3RzXCIgfX1cbiAgICAgICAgaXRlbXM9e2RhdGEubm9kZXN9XG4gICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgbWVkaWEgPSAoXG4gICAgICAgICAgICA8VGh1bWJuYWlsXG4gICAgICAgICAgICAgIHNvdXJjZT17XG4gICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMuZWRnZXNbMF1cbiAgICAgICAgICAgICAgICAgID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5vcmlnaW5hbFNyY1xuICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYWx0PXtpdGVtLmltYWdlcy5lZGdlc1swXSA/IGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdLmFsdFRleHQgOiBcIlwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IHByaWNlID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVzb3VyY2VMaXN0Lkl0ZW1cbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgIG1lZGlhPXttZWRpYX1cbiAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsPXtgVmlldyBkZXRhaWxzIGZvciAke2l0ZW0udGl0bGV9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFN0YWNrPlxuICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtIGZpbGw+XG4gICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+e2l0ZW0udGl0bGV9PC9UZXh0U3R5bGU+XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxwPiR7cHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9DYXJkPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductList.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProductList */ \"./components/ProductList.js\");\n\n\n\n\n\n\n\n\nfunction Index() {\n  const {\n    0: modal,\n    1: setModal\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    open: false\n  });\n  const emptyState = !store_js__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"ids\");\n\n  function handleSelection(resources) {\n    const idsFromResources = resources.selection.map(product => product.id);\n    setModal({\n      open: false\n    });\n    store_js__WEBPACK_IMPORTED_MODULE_4___default.a.set(\"ids\", idsFromResources);\n    console.log(\"this is product ids\", store_js__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"ids\"));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Page\"], {\n    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__[\"ResourcePicker\"], {\n      resourceType: \"Product\",\n      showVariants: false,\n      open: modal.open,\n      onCancel: () => setModal({\n        open: false\n      }),\n      onSelection: resources => handleSelection(resources)\n    }), emptyState ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"EmptyState\"], {\n        heading: \"Manage your inventory transfers\",\n        action: {\n          content: \"Select Products\",\n          onAction: () => setModal({\n            open: true\n          })\n        },\n        secondaryAction: {\n          content: \"Learn more\",\n          url: \"https://help.shopify.com\"\n        },\n        image: \"https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg\",\n        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", {\n          children: \"Select Products\"\n        })\n      })\n    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_components_ProductList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {})]\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwibW9kYWwiLCJzZXRNb2RhbCIsInVzZVN0YXRlIiwib3BlbiIsImVtcHR5U3RhdGUiLCJzdG9yZSIsImdldCIsImhhbmRsZVNlbGVjdGlvbiIsInJlc291cmNlcyIsImlkc0Zyb21SZXNvdXJjZXMiLCJzZWxlY3Rpb24iLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsIm9uQWN0aW9uIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUNmLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQztBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUFELENBQWxDO0FBQ0EsUUFBTUMsVUFBVSxHQUFHLENBQUNDLCtDQUFLLENBQUNDLEdBQU4sQ0FBVSxLQUFWLENBQXBCOztBQUVBLFdBQVNDLGVBQVQsQ0FBeUJDLFNBQXpCLEVBQW9DO0FBQ2xDLFVBQU1DLGdCQUFnQixHQUFHRCxTQUFTLENBQUNFLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXlCQyxPQUFELElBQWFBLE9BQU8sQ0FBQ0MsRUFBN0MsQ0FBekI7QUFDQVosWUFBUSxDQUFDO0FBQUVFLFVBQUksRUFBRTtBQUFSLEtBQUQsQ0FBUjtBQUNBRSxtREFBSyxDQUFDUyxHQUFOLENBQVUsS0FBVixFQUFpQkwsZ0JBQWpCO0FBQ0FNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DWCwrQ0FBSyxDQUFDQyxHQUFOLENBQVUsS0FBVixDQUFuQztBQUNEOztBQUVELHNCQUNFLCtEQUFDLHFEQUFEO0FBQUEsNEJBQ0UsOERBQUMsd0VBQUQ7QUFDRSxrQkFBWSxFQUFDLFNBRGY7QUFFRSxrQkFBWSxFQUFFLEtBRmhCO0FBR0UsVUFBSSxFQUFFTixLQUFLLENBQUNHLElBSGQ7QUFJRSxjQUFRLEVBQUUsTUFBTUYsUUFBUSxDQUFDO0FBQUVFLFlBQUksRUFBRTtBQUFSLE9BQUQsQ0FKMUI7QUFLRSxpQkFBVyxFQUFHSyxTQUFELElBQWVELGVBQWUsQ0FBQ0MsU0FBRDtBQUw3QyxNQURGLEVBUU1KLFVBQVUsZ0JBQ1osOERBQUMsdURBQUQ7QUFBQSw2QkFDRSw4REFBQywyREFBRDtBQUNBLGVBQU8sRUFBQyxpQ0FEUjtBQUVBLGNBQU0sRUFBRTtBQUNOYSxpQkFBTyxFQUFFLGlCQURIO0FBRU5DLGtCQUFRLEVBQUUsTUFBTWpCLFFBQVEsQ0FBQztBQUFFRSxnQkFBSSxFQUFFO0FBQVIsV0FBRDtBQUZsQixTQUZSO0FBTUEsdUJBQWUsRUFBRTtBQUNmYyxpQkFBTyxFQUFFLFlBRE07QUFFZkUsYUFBRyxFQUFFO0FBRlUsU0FOakI7QUFVQSxhQUFLLEVBQUMsbUVBVk47QUFBQSwrQkFZRTtBQUFBO0FBQUE7QUFaRjtBQURGLE1BRFksZ0JBa0JaLDhEQUFDLCtEQUFELEtBMUJKO0FBQUEsSUFERjtBQStCRDs7QUFDY3BCLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEVtcHR5U3RhdGUsIExheW91dCwgUGFnZSB9IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XG5pbXBvcnQgeyBSZXNvdXJjZVBpY2tlciB9IGZyb20gXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcInN0b3JlLWpzXCI7XG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdCc7XG5cbmZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gIGNvbnN0IGVtcHR5U3RhdGUgPSAhc3RvcmUuZ2V0KFwiaWRzXCIpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpIHtcbiAgICBjb25zdCBpZHNGcm9tUmVzb3VyY2VzID0gcmVzb3VyY2VzLnNlbGVjdGlvbi5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQpO1xuICAgIHNldE1vZGFsKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgc3RvcmUuc2V0KFwiaWRzXCIsIGlkc0Zyb21SZXNvdXJjZXMpO1xuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBwcm9kdWN0IGlkc1wiLCBzdG9yZS5nZXQoXCJpZHNcIikpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZT5cbiAgICAgIDxSZXNvdXJjZVBpY2tlclxuICAgICAgICByZXNvdXJjZVR5cGU9XCJQcm9kdWN0XCJcbiAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cbiAgICAgICAgb3Blbj17bW9kYWwub3Blbn1cbiAgICAgICAgb25DYW5jZWw9eygpID0+IHNldE1vZGFsKHsgb3BlbjogZmFsc2UgfSl9XG4gICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2VzKSA9PiBoYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKX1cbiAgICAgIC8+XG4gICAgICAgIHsgZW1wdHlTdGF0ZSA/IFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxFbXB0eVN0YXRlXG4gICAgICAgICAgaGVhZGluZz1cIk1hbmFnZSB5b3VyIGludmVudG9yeSB0cmFuc2ZlcnNcIlxuICAgICAgICAgIGFjdGlvbj17e1xuICAgICAgICAgICAgY29udGVudDogXCJTZWxlY3QgUHJvZHVjdHNcIixcbiAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiBzZXRNb2RhbCh7IG9wZW46IHRydWUgfSksXG4gICAgICAgICAgfX1cbiAgICAgICAgICBzZWNvbmRhcnlBY3Rpb249e3tcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiTGVhcm4gbW9yZVwiLFxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vaGVscC5zaG9waWZ5LmNvbVwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgaW1hZ2U9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDc1Ny85OTU1L2ZpbGVzL2VtcHR5LXN0YXRlLnN2Z1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHA+U2VsZWN0IFByb2R1Y3RzPC9wPlxuICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDpcbiAgICAgICAgPFByb2R1Y3RMaXN0IC8+XG4gICAgICAgIH1cbiAgICA8L1BhZ2U+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-hooks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL3JlYWN0LWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-hooks\n");

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/app-bridge-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI/MDY2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/app-bridge-react\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiPzMyZTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QvanN4LXJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-runtime\n");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"store-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiP2QxYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3RvcmUtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///store-js\n");

/***/ })

/******/ });