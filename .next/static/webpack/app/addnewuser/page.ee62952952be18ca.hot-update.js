"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/addnewuser/page",{

/***/ "(app-pages-browser)/./app/addnewuser/page.js":
/*!********************************!*\
  !*** ./app/addnewuser/page.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n//http://localhost:3000/addnewuser\nconst AddNewUser = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    async function handleSubmit(e) {\n        e.preventDefault();\n        // document.body.innerText = `Name: ${name}, Email: ${email}, Password: ${password}`;\n        // const resp = await fetch(\"http://localhost:3000/backend/api/postmethod\");\n        //OR\n        const resp = await fetch(\"backend/api/postmethod\", {\n            method: \"POST\",\n            body: JSON.stringify(name, email, password)\n        });\n        const data = await resp.json();\n        if (data.success) {\n            alert(\"user added successfully\");\n        } else {\n            alert(\"An error occurred while creating the user\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: \"center\",\n            marginTop: \"125px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"name\",\n                placeholder: \"Enter your name\",\n                onChange: (e)=>setName(e.target.value)\n            }, void 0, false, {\n                fileName: \"E:\\\\NextJs Practice\\\\next-course\\\\app\\\\addnewuser\\\\page.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"E:\\\\NextJs Practice\\\\next-course\\\\app\\\\addnewuser\\\\page.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"E:\\\\NextJs Practice\\\\next-course\\\\app\\\\addnewuser\\\\page.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"E:\\\\NextJs Practice\\\\next-course\\\\app\\\\addnewuser\\\\page.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                name: \"email\",\n                placeholder: \"Enter your email address\",\n                onChange: (e)=>setEmail(e.target.value)\n            }, void 0, false, {\n                fileName: \"E:\\\\NextJs Practice\\\\next-course\\\\app\\\\addnewuser\\\\page.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"E:\\\\NextJs Practice\\\\next-course\\\\app\\\\addnewuser\\\\page.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"E:\\\\NextJs Practice\\\\next-course\\\\app\\\\addnewuser\\\\page.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"E:\\\\NextJs Practice\\\\next-course\\\\app\\\\addnewuser\\\\page.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                name: \"password\",\n                placeholder: \"Enter your password\",\n                onChange: (e)=>setPassword(e.target.value)\n            }, void 0, false, {\n                fileName: \"E:\\\\NextJs Practice\\\\next-course\\\\app\\\\addnewuser\\\\page.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"E:\\\\NextJs Practice\\\\next-course\\\\app\\\\addnewuser\\\\page.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"E:\\\\NextJs Practice\\\\next-course\\\\app\\\\addnewuser\\\\page.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"E:\\\\NextJs Practice\\\\next-course\\\\app\\\\addnewuser\\\\page.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSubmit,\n                style: {\n                    backgroundColor: \"red\"\n                },\n                children: \"Add New User\"\n            }, void 0, false, {\n                fileName: \"E:\\\\NextJs Practice\\\\next-course\\\\app\\\\addnewuser\\\\page.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\NextJs Practice\\\\next-course\\\\app\\\\addnewuser\\\\page.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddNewUser, \"U1DCtFSIKcmCKgpSr3L7jOg/618=\");\n_c = AddNewUser;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddNewUser);\nvar _c;\n$RefreshReg$(_c, \"AddNewUser\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZGRuZXd1c2VyL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRTBCO0FBQ087QUFFakMsa0NBQWtDO0FBRWxDLE1BQU1FLGFBQWE7O0lBQ2pCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXpDLGVBQWVRLGFBQWFDLENBQUM7UUFDM0JBLEVBQUVDLGNBQWM7UUFDaEIscUZBQXFGO1FBRXJGLDRFQUE0RTtRQUU1RSxJQUFJO1FBQ0osTUFBTUMsT0FBTyxNQUFNQyxNQUFNLDBCQUEwQjtZQUNqREMsUUFBUTtZQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNkLE1BQU1FLE9BQU9FO1FBQ3BDO1FBQ0EsTUFBTVcsT0FBTyxNQUFNTixLQUFLTyxJQUFJO1FBQzVCLElBQUlELEtBQUtFLE9BQU8sRUFBRTtZQUNoQkMsTUFBTTtRQUNSLE9BQU87WUFDTEEsTUFBTTtRQUNSO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsT0FBTztZQUFFQyxXQUFXO1lBQVVDLFdBQVc7UUFBUTs7MEJBQ3BELDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTHhCLE1BQUs7Z0JBQ0x5QixhQUFZO2dCQUNaQyxVQUFVLENBQUNuQixJQUFNTixRQUFRTSxFQUFFb0IsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7MEJBRXpDLDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNBOzs7OzswQkFDRCw4REFBQ0E7Ozs7OzBCQUNELDhEQUFDTjtnQkFDQ0MsTUFBSztnQkFDTHhCLE1BQUs7Z0JBQ0x5QixhQUFZO2dCQUNaQyxVQUFVLENBQUNuQixJQUFNSixTQUFTSSxFQUFFb0IsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7MEJBRTFDLDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNBOzs7OzswQkFDRCw4REFBQ0E7Ozs7OzBCQUNELDhEQUFDTjtnQkFDQ0MsTUFBSztnQkFDTHhCLE1BQUs7Z0JBQ0x5QixhQUFZO2dCQUNaQyxVQUFVLENBQUNuQixJQUFNRixZQUFZRSxFQUFFb0IsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7MEJBRTdDLDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNBOzs7OzswQkFDRCw4REFBQ0E7Ozs7OzBCQUVELDhEQUFDQztnQkFBT0MsU0FBU3pCO2dCQUFjYyxPQUFPO29CQUFFWSxpQkFBaUI7Z0JBQU07MEJBQUc7Ozs7Ozs7Ozs7OztBQUt4RTtHQTFETWpDO0tBQUFBO0FBNEROLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hZGRuZXd1c2VyL3BhZ2UuanM/NGQ0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vaHR0cDovL2xvY2FsaG9zdDozMDAwL2FkZG5ld3VzZXJcclxuXHJcbmNvbnN0IEFkZE5ld1VzZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gZG9jdW1lbnQuYm9keS5pbm5lclRleHQgPSBgTmFtZTogJHtuYW1lfSwgRW1haWw6ICR7ZW1haWx9LCBQYXNzd29yZDogJHtwYXNzd29yZH1gO1xyXG5cclxuICAgIC8vIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9iYWNrZW5kL2FwaS9wb3N0bWV0aG9kXCIpO1xyXG5cclxuICAgIC8vT1JcclxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChcImJhY2tlbmQvYXBpL3Bvc3RtZXRob2RcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuYW1lLCBlbWFpbCwgcGFzc3dvcmQpLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcC5qc29uKCk7XHJcbiAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgIGFsZXJ0KFwidXNlciBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGNyZWF0aW5nIHRoZSB1c2VyXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxMjVweFwiIH19PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3NcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8YnIgLz5cclxuXHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCIgfX0+XHJcbiAgICAgICAgQWRkIE5ldyBVc2VyXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZE5ld1VzZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQWRkTmV3VXNlciIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwic3VjY2VzcyIsImFsZXJ0IiwiZGl2Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/addnewuser/page.js\n"));

/***/ })

});