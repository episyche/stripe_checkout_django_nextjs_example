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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst API_URL = \"http://localhost:8000\";\nconst NEXT_URL = \"http://localhost:3000\";\nfunction AddCredits() {\n    _s();\n    const [showcredits, setshowcredits] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [price, setprice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [user_id, setuser_id] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [apiurl, setapiurl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [sucesss_url, setsucesss_url] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [faild_url, setfaild_url] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setuser_id(localStorage.getItem(\"user_id\"));\n        setapiurl(API_URL + \"/payment/stripe/create-checkout/\");\n        setsucesss_url(NEXT_URL + \"/success\");\n        setfaild_url(NEXT_URL + \"/failed\");\n    }, [\n        user_id,\n        price\n    ]);\n    console.log(user_id, sucesss_url, faild_url);\n    function usdtocredits(e) {\n        var usd = e.target.value;\n        var cover_to_credits = parseFloat(usd) * 10;\n        var pricevalue = parseFloat(usd) * 100;\n        setprice(pricevalue);\n        console.log(usd);\n        if (cover_to_credits) {\n            var creditsshow = \"$\" + usd + \" = \" + cover_to_credits + \" credit points\";\n            setshowcredits(creditsshow);\n        } else {\n            setshowcredits(\"\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-[700] text-[30px] mx-auto text-center mt-10 \",\n                    children: \"Stripe Payment\"\n                }, void 0, false, {\n                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"justify-center items-center flex inset-0 z-50 outline-none focus:outline-none \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative w-72 md:w-96 my-6 mx-auto max-w-6xl mt-10 md:mt-32 bg-sidebg-800\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-0 rounded-lg shadow-lg flex flex-col w-full bg-green-600 outline-none focus:outline-none -mt-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative p-6 flex-auto \",\n                            id: \"form-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center text-white shadow-3xl \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text center text-2xl\",\n                                        children: \"Add Payment\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: \"\\xa0\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: \"\\xa0\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                            action: apiurl,\n                                            method: \"post\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"hidden\",\n                                                    value: sucesss_url,\n                                                    name: \"redirect-sucesss-url\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"hidden\",\n                                                    value: faild_url,\n                                                    name: \"redirect-failed-url\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"hidden\",\n                                                    name: \"price\",\n                                                    value: price\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"hidden\",\n                                                    name: \"product_name\",\n                                                    value: \"Topup\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"text-lg w-10\",\n                                                    children: \"Amount :\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    className: \"w-28 text-black text-center ml-2 rounded-sm\",\n                                                    onChange: usdtocredits,\n                                                    type: \"number\",\n                                                    name: \"amount\",\n                                                    min: \"0.1\",\n                                                    step: \"0.1\",\n                                                    required: true\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"text-lg -ml-6\",\n                                                    children: \"User Name :\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"text\",\n                                                    className: \"w-28 text-black text-center ml-2 rounded-sm\",\n                                                    name: \"user_name\",\n                                                    value: user_id\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: \"\\xa0\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \" text-sm text-white\",\n                                                    children: \"\\xa0\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"bg-red-500 w-24 align-center h-10 rounded-lg\",\n                                                    id: \"payment-button\",\n                                                    children: \"Proceed\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 41\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                lineNumber: 47,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AddCredits, \"WkBvt68EDVFcryter1hE7kv1dgE=\");\n_c = AddCredits;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddCredits);\nvar _c;\n$RefreshReg$(_c, \"AddCredits\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUc7OERBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVN0g7R0FwRVM3QjtLQUFBQTtBQXFFVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQVBJX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCI7XG5jb25zdCBORVhUX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCJcblxuZnVuY3Rpb24gQWRkQ3JlZGl0cygpIHtcbiAgICBjb25zdCBbc2hvd2NyZWRpdHMsIHNldHNob3djcmVkaXRzXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtwcmljZSwgc2V0cHJpY2VdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3VzZXJfaWQsIHNldHVzZXJfaWRdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbYXBpdXJsLCBzZXRhcGl1cmxdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbc3VjZXNzc191cmwsIHNldHN1Y2Vzc3NfdXJsXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW2ZhaWxkX3VybCwgc2V0ZmFpbGRfdXJsXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXR1c2VyX2lkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9pZFwiKSlcbiAgICAgICAgc2V0YXBpdXJsKEFQSV9VUkwgKyBcIi9wYXltZW50L3N0cmlwZS9jcmVhdGUtY2hlY2tvdXQvXCIpXG4gICAgICAgIHNldHN1Y2Vzc3NfdXJsKE5FWFRfVVJMICsgXCIvc3VjY2Vzc1wiKVxuICAgICAgICBzZXRmYWlsZF91cmwoTkVYVF9VUkwgKyBcIi9mYWlsZWRcIilcbiAgICB9LCBbdXNlcl9pZCwgcHJpY2VdKVxuXG4gICAgY29uc29sZS5sb2codXNlcl9pZCwgc3VjZXNzc191cmwsIGZhaWxkX3VybClcbiAgICBmdW5jdGlvbiB1c2R0b2NyZWRpdHMoZSkge1xuICAgICAgICB2YXIgdXNkID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHZhciBjb3Zlcl90b19jcmVkaXRzID0gcGFyc2VGbG9hdCh1c2QpICogMTBcbiAgICAgICAgdmFyIHByaWNldmFsdWUgPSBwYXJzZUZsb2F0KHVzZCkgKiAxMDBcbiAgICAgICAgc2V0cHJpY2UocHJpY2V2YWx1ZSlcbiAgICAgICAgY29uc29sZS5sb2codXNkKVxuICAgICAgICBpZiAoY292ZXJfdG9fY3JlZGl0cykge1xuICAgICAgICAgICAgdmFyIGNyZWRpdHNzaG93ID0gXCIkXCIgKyB1c2QgKyBcIiA9IFwiICsgY292ZXJfdG9fY3JlZGl0cyArIFwiIGNyZWRpdCBwb2ludHNcIlxuICAgICAgICAgICAgc2V0c2hvd2NyZWRpdHMoY3JlZGl0c3Nob3cpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRzaG93Y3JlZGl0cyhcIlwiKVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LVs3MDBdIHRleHQtWzMwcHhdIG14LWF1dG8gdGV4dC1jZW50ZXIgbXQtMTAgXCI+U3RyaXBlIFBheW1lbnQ8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleCBpbnNldC0wIHotNTAgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctNzIgbWQ6dy05NiBteS02IG14LWF1dG8gbWF4LXctNnhsIG10LTEwIG1kOm10LTMyIGJnLXNpZGViZy04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMCByb3VuZGVkLWxnIHNoYWRvdy1sZyAgZmxleCBmbGV4LWNvbCB3LWZ1bGwgYmctZ3JlZW4tNjAwIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgLW10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcC02IGZsZXgtYXV0byBcIiBpZD1cImZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIHNoYWRvdy0zeGwgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0IGNlbnRlciB0ZXh0LTJ4bFwiPkFkZCBQYXltZW50PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4mbmJzcDs8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4mbmJzcDs8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj17YXBpdXJsfSBtZXRob2Q9J3Bvc3QnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9e3N1Y2Vzc3NfdXJsfSBuYW1lPVwicmVkaXJlY3Qtc3VjZXNzcy11cmxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9e2ZhaWxkX3VybH0gbmFtZT1cInJlZGlyZWN0LWZhaWxlZC11cmxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT0ncHJpY2UnIHZhbHVlPXtwcmljZX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9J3Byb2R1Y3RfbmFtZScgdmFsdWU9XCJUb3B1cFwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbGcgdy0xMFwiPkFtb3VudCA6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy0yOCB0ZXh0LWJsYWNrIHRleHQtY2VudGVyIG1sLTIgcm91bmRlZC1zbVwiIG9uQ2hhbmdlPXt1c2R0b2NyZWRpdHN9IHR5cGU9J251bWJlcicgbmFtZT0nYW1vdW50JyBtaW49XCIwLjFcIiBzdGVwPVwiMC4xXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1sZyAtbWwtNlwiID5Vc2VyIE5hbWUgOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidy0yOCB0ZXh0LWJsYWNrIHRleHQtY2VudGVyIG1sLTIgcm91bmRlZC1zbVwiICBuYW1lPSd1c2VyX25hbWUnIHZhbHVlPXt1c2VyX2lkfT48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+Jm5ic3A7PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC1zbSB0ZXh0LXdoaXRlXCI+Jm5ic3A7PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHctMjQgYWxpZ24tY2VudGVyIGgtMTAgcm91bmRlZC1sZ1wiIGlkPVwicGF5bWVudC1idXR0b25cIj5Qcm9jZWVkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IEFkZENyZWRpdHM7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQVBJX1VSTCIsIk5FWFRfVVJMIiwiQWRkQ3JlZGl0cyIsInNob3djcmVkaXRzIiwic2V0c2hvd2NyZWRpdHMiLCJwcmljZSIsInNldHByaWNlIiwidXNlcl9pZCIsInNldHVzZXJfaWQiLCJhcGl1cmwiLCJzZXRhcGl1cmwiLCJzdWNlc3NzX3VybCIsInNldHN1Y2Vzc3NfdXJsIiwiZmFpbGRfdXJsIiwic2V0ZmFpbGRfdXJsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJ1c2R0b2NyZWRpdHMiLCJlIiwidXNkIiwidGFyZ2V0IiwidmFsdWUiLCJjb3Zlcl90b19jcmVkaXRzIiwicGFyc2VGbG9hdCIsInByaWNldmFsdWUiLCJjcmVkaXRzc2hvdyIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwiaWQiLCJmb3JtIiwiYWN0aW9uIiwibWV0aG9kIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImxhYmVsIiwib25DaGFuZ2UiLCJtaW4iLCJzdGVwIiwicmVxdWlyZWQiLCJiciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});