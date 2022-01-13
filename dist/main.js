/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/user_service */ \"./src/modules/user_service.js\");\n/* harmony import */ var _modules_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderer */ \"./src/modules/renderer.js\");\n/* harmony import */ var _modules_addUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addUsers */ \"./src/modules/addUsers.js\");\n\r\n\r\n\r\n\r\nwindow.userService = new _modules_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService();\r\n\r\nuserService.getUsers().then((data) => {\r\n  (0,_modules_renderer__WEBPACK_IMPORTED_MODULE_1__.renderer)(data);\r\n});\r\n\r\n(0,_modules_addUsers__WEBPACK_IMPORTED_MODULE_2__.addUsers)();\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?");

/***/ }),

/***/ "./src/modules/addUsers.js":
/*!*********************************!*\
  !*** ./src/modules/addUsers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addUsers\": () => (/* binding */ addUsers)\n/* harmony export */ });\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer */ \"./src/modules/renderer.js\");\n\r\n\r\nconst addUsers = () => {\r\n  const form = document.querySelector(\"form\");\r\n  const formName = document.querySelector(\"#form-name\");\r\n  const formEmail = document.querySelector(\"#form-email\");\r\n  const formChildren = document.querySelector(\"#form-children\");\r\n\r\n  form.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n    console.log(e);\r\n\r\n    const user = {\r\n      name: formName.value,\r\n      email: formEmail.value,\r\n      children: formChildren.checked,\r\n      permissions: false,\r\n    };\r\n    console.log(user);\r\n\r\n    userService.addUser(user);\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/addUsers.js?");

/***/ }),

/***/ "./src/modules/renderer.js":
/*!*********************************!*\
  !*** ./src/modules/renderer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderer\": () => (/* binding */ renderer)\n/* harmony export */ });\nconst renderer = (users) => {\r\n  const tbody = document.getElementById(\"table-body\");\r\n  tbody.innerHTML = \"\";\r\n  users.forEach((user) => {\r\n    tbody.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `\r\n        <tr>\r\n          <th scope=\"row\">${user.id + 1}</th>\r\n          <td>${user.name}</td>\r\n          <td>${user.email}</td>\r\n          <td>${user.children ? \"Есть\" : \"Нет\"}</td>\r\n          <td>\r\n              <div class=\"form-check form-switch\">\r\n                  <input class=\"form-check-input\" type=\"checkbox\"role=\"switch\"\r\n                      id=\"form-children\" ${user.permissions ? \"checked\" : \"\"}>\r\n              </div>\r\n          </td>\r\n          <td>\r\n              <div class=\"btn-group btn-group-sm\" role=\"group\"aria-label=\"Basic example\">\r\n                  <button type=\"button\" class=\"btn btn-warning\">\r\n                      <i class=\"bi-pencil-square\"></i>\r\n                  </button>\r\n                  <button type=\"button\" class=\"btn btn-danger\">\r\n                      <i class=\"bi-person-x\"></i>\r\n                  </button>\r\n              </div>\r\n          </td>\r\n        </tr>\r\n    `\r\n    );\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/renderer.js?");

/***/ }),

/***/ "./src/modules/user_service.js":
/*!*************************************!*\
  !*** ./src/modules/user_service.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserService\": () => (/* binding */ UserService)\n/* harmony export */ });\nclass UserService {\r\n  getUsers() {\r\n    return fetch(\"http://localhost:6600/users\").then((r) => r.json());\r\n  }\r\n\r\n  addUser(user) {\r\n    return fetch(\"http://localhost:6600/users\", {\r\n      method: \"POST\",\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n      body: JSON.stringify(user),\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/user_service.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;