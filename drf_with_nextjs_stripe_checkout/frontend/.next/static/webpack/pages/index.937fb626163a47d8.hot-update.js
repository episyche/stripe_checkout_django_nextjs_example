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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst API_URL = \"http://localhost:8000\";\nconst NEXT_URL = \"http://localhost:3000\";\nfunction AddCredits() {\n    _s();\n    const [showcredits, setshowcredits] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [price, setprice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [user_id, setuser_id] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [apiurl, setapiurl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [sucesss_url, setsucesss_url] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [faild_url, setfaild_url] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setuser_id(localStorage.getItem(\"user_id\"));\n        setapiurl(API_URL + \"/payment/stripe/create-checkout/\");\n        setsucesss_url(NEXT_URL + \"/success\");\n        setfaild_url(NEXT_URL + \"/failed\");\n    }, [\n        user_id,\n        price\n    ]);\n    console.log(user_id, sucesss_url, faild_url);\n    function usdtocredits(e) {\n        var usd = e.target.value;\n        var cover_to_credits = parseFloat(usd) * 10;\n        var pricevalue = parseFloat(usd) * 100;\n        setprice(pricevalue);\n        console.log(usd);\n        if (cover_to_credits) {\n            var creditsshow = \"$\" + usd + \" = \" + cover_to_credits + \" credit points\";\n            setshowcredits(creditsshow);\n        } else {\n            setshowcredits(\"\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"stripe Payment\"\n                }, void 0, false, {\n                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"justify-center items-center flex inset-0 z-50 outline-none focus:outline-none \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative w-72 md:w-96 my-6 mx-auto max-w-6xl mt-10 md:mt-32 bg-sidebg-800\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-0 rounded-lg shadow-lg flex flex-col w-full bg-green-600 outline-none focus:outline-none -mt-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative p-6 flex-auto\",\n                            id: \"form-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center text-white\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text center text-2xl\",\n                                        children: \"Add Payment\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: \"\\xa0\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: \"\\xa0\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                            action: apiurl,\n                                            method: \"post\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"hidden\",\n                                                    value: sucesss_url,\n                                                    name: \"redirect-sucesss-url\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"hidden\",\n                                                    value: faild_url,\n                                                    name: \"redirect-failed-url\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"hidden\",\n                                                    name: \"price\",\n                                                    value: price\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"hidden\",\n                                                    name: \"product_name\",\n                                                    value: \"Topup\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"text-lg w-10\",\n                                                    children: \"Amount :\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    className: \"w-28 text-black text-center ml-2 rounded-sm\",\n                                                    onChange: usdtocredits,\n                                                    type: \"number\",\n                                                    name: \"amount\",\n                                                    min: \"0.1\",\n                                                    step: \"0.1\",\n                                                    required: true\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"text-lg -ml-6\",\n                                                    children: \"User Name :\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"text\",\n                                                    className: \"w-28 text-black text-center ml-2 rounded-sm\",\n                                                    name: \"user_name\",\n                                                    value: user_id\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: \"\\xa0\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \" text-sm text-white\",\n                                                    children: \"\\xa0\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"bg-red-500 w-24 align-center h-10 rounded-lg\",\n                                                    id: \"payment-button\",\n                                                    children: \"Proceed\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 41\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                                lineNumber: 47,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/karventhan/episyche/blogs/stripe/drf_with_nextjs_stripe_checkout/frontend/pages/index.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AddCredits, \"WkBvt68EDVFcryter1hE7kv1dgE=\");\n_c = AddCredits;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddCredits);\nvar _c;\n$RefreshReg$(_c, \"AddCredits\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTdIO0dBcEVTN0I7S0FBQUE7QUFxRVQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEFQSV9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMFwiO1xuY29uc3QgTkVYVF9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiXG5cbmZ1bmN0aW9uIEFkZENyZWRpdHMoKSB7XG4gICAgY29uc3QgW3Nob3djcmVkaXRzLCBzZXRzaG93Y3JlZGl0c10gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbcHJpY2UsIHNldHByaWNlXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFt1c2VyX2lkLCBzZXR1c2VyX2lkXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW2FwaXVybCwgc2V0YXBpdXJsXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW3N1Y2Vzc3NfdXJsLCBzZXRzdWNlc3NzX3VybF0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtmYWlsZF91cmwsIHNldGZhaWxkX3VybF0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0dXNlcl9pZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJfaWRcIikpXG4gICAgICAgIHNldGFwaXVybChBUElfVVJMICsgXCIvcGF5bWVudC9zdHJpcGUvY3JlYXRlLWNoZWNrb3V0L1wiKVxuICAgICAgICBzZXRzdWNlc3NzX3VybChORVhUX1VSTCArIFwiL3N1Y2Nlc3NcIilcbiAgICAgICAgc2V0ZmFpbGRfdXJsKE5FWFRfVVJMICsgXCIvZmFpbGVkXCIpXG4gICAgfSwgW3VzZXJfaWQsIHByaWNlXSlcblxuICAgIGNvbnNvbGUubG9nKHVzZXJfaWQsIHN1Y2Vzc3NfdXJsLCBmYWlsZF91cmwpXG4gICAgZnVuY3Rpb24gdXNkdG9jcmVkaXRzKGUpIHtcbiAgICAgICAgdmFyIHVzZCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB2YXIgY292ZXJfdG9fY3JlZGl0cyA9IHBhcnNlRmxvYXQodXNkKSAqIDEwXG4gICAgICAgIHZhciBwcmljZXZhbHVlID0gcGFyc2VGbG9hdCh1c2QpICogMTAwXG4gICAgICAgIHNldHByaWNlKHByaWNldmFsdWUpXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZClcbiAgICAgICAgaWYgKGNvdmVyX3RvX2NyZWRpdHMpIHtcbiAgICAgICAgICAgIHZhciBjcmVkaXRzc2hvdyA9IFwiJFwiICsgdXNkICsgXCIgPSBcIiArIGNvdmVyX3RvX2NyZWRpdHMgKyBcIiBjcmVkaXQgcG9pbnRzXCJcbiAgICAgICAgICAgIHNldHNob3djcmVkaXRzKGNyZWRpdHNzaG93KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0c2hvd2NyZWRpdHMoXCJcIilcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+c3RyaXBlIFBheW1lbnQ8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleCBpbnNldC0wIHotNTAgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctNzIgbWQ6dy05NiBteS02IG14LWF1dG8gbWF4LXctNnhsIG10LTEwIG1kOm10LTMyIGJnLXNpZGViZy04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMCByb3VuZGVkLWxnIHNoYWRvdy1sZyAgZmxleCBmbGV4LWNvbCB3LWZ1bGwgYmctZ3JlZW4tNjAwIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgLW10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcC02IGZsZXgtYXV0b1wiIGlkPVwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQgY2VudGVyIHRleHQtMnhsXCI+QWRkIFBheW1lbnQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiZuYnNwOzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiZuYnNwOzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPXthcGl1cmx9IG1ldGhvZD0ncG9zdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT17c3VjZXNzc191cmx9IG5hbWU9XCJyZWRpcmVjdC1zdWNlc3NzLXVybFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT17ZmFpbGRfdXJsfSBuYW1lPVwicmVkaXJlY3QtZmFpbGVkLXVybFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPSdwcmljZScgdmFsdWU9e3ByaWNlfT48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT0ncHJvZHVjdF9uYW1lJyB2YWx1ZT1cIlRvcHVwXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1sZyB3LTEwXCI+QW1vdW50IDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTI4IHRleHQtYmxhY2sgdGV4dC1jZW50ZXIgbWwtMiByb3VuZGVkLXNtXCIgb25DaGFuZ2U9e3VzZHRvY3JlZGl0c30gdHlwZT0nbnVtYmVyJyBuYW1lPSdhbW91bnQnIG1pbj1cIjAuMVwiIHN0ZXA9XCIwLjFcIiByZXF1aXJlZD48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LWxnIC1tbC02XCIgPlVzZXIgTmFtZSA6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ3LTI4IHRleHQtYmxhY2sgdGV4dC1jZW50ZXIgbWwtMiByb3VuZGVkLXNtXCIgIG5hbWU9J3VzZXJfbmFtZScgdmFsdWU9e3VzZXJfaWR9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4mbmJzcDs8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LXNtIHRleHQtd2hpdGVcIj4mbmJzcDs8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgdy0yNCBhbGlnbi1jZW50ZXIgaC0xMCByb3VuZGVkLWxnXCIgaWQ9XCJwYXltZW50LWJ1dHRvblwiPlByb2NlZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQWRkQ3JlZGl0czsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBUElfVVJMIiwiTkVYVF9VUkwiLCJBZGRDcmVkaXRzIiwic2hvd2NyZWRpdHMiLCJzZXRzaG93Y3JlZGl0cyIsInByaWNlIiwic2V0cHJpY2UiLCJ1c2VyX2lkIiwic2V0dXNlcl9pZCIsImFwaXVybCIsInNldGFwaXVybCIsInN1Y2Vzc3NfdXJsIiwic2V0c3VjZXNzc191cmwiLCJmYWlsZF91cmwiLCJzZXRmYWlsZF91cmwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInVzZHRvY3JlZGl0cyIsImUiLCJ1c2QiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvdmVyX3RvX2NyZWRpdHMiLCJwYXJzZUZsb2F0IiwicHJpY2V2YWx1ZSIsImNyZWRpdHNzaG93IiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJpZCIsImZvcm0iLCJhY3Rpb24iLCJtZXRob2QiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwibGFiZWwiLCJvbkNoYW5nZSIsIm1pbiIsInN0ZXAiLCJyZXF1aXJlZCIsImJyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});