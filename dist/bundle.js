/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/engine.js":
/*!***********************!*\
  !*** ./src/engine.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Engine; });\n/* harmony import */ var _gameobject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameobject */ \"./src/gameobject.js\");\n\r\n\r\nclass Engine {\r\n    constructor() {\r\n        document.body.style.margin = \"0px\";\r\n        document.body.style.overflow = \"hidden\";\r\n        this.canvas = document.createElement(\"canvas\");\r\n        this.canvas.width = window.innerWidth;\r\n        this.canvas.height = window.innerHeight;\r\n        document.body.appendChild(this.canvas);\r\n\r\n        this.ctx = this.canvas.getContext(\"2d\");\r\n\r\n        this.lastTime = new Date().getTime();\r\n\r\n        this.objs = [];\r\n\r\n        window.requestAnimationFrame(this.loop.bind(this));\r\n    }\r\n\r\n    addObject(obj) {\r\n        if(obj instanceof _gameobject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n            this.objs.push(obj);\r\n        } else {\r\n            console.error(\"Invalid Object Added. Not Game Object\")\r\n        }\r\n    }\r\n\r\n    loop() {\r\n        let time = new Date().getTime();\r\n        let dt = (time - this.lastTime) / 1000;\r\n\r\n        //ToDo Do updates here\r\n\r\n        this.ctx.fillStyle = \"#303030\";\r\n        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\r\n\r\n        //ToDo Do drawing here\r\n\r\n        this.objs.forEach(obj => {\r\n            obj.draw(this.ctx);\r\n        });\r\n\r\n        this.lastTime = time;\r\n        window.requestAnimationFrame(this.loop.bind(this));\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/engine.js?");

/***/ }),

/***/ "./src/gameobject.js":
/*!***************************!*\
  !*** ./src/gameobject.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameObject; });\n/* harmony import */ var _renderable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderable */ \"./src/renderable.js\");\n\r\n\r\nclass GameObject {\r\n    constructor() {\r\n        this.position = [0,0];\r\n        this.children = [];\r\n    }\r\n\r\n    addChild(child) {\r\n        this.children.push(child);\r\n    }\r\n\r\n    draw(ctx) {\r\n        ctx.save();\r\n        ctx.translate(this.position[0], this.position[1]);\r\n\r\n        ctx.fillStyle = \"red\";\r\n        ctx.fillRect(0, 0, 50, 50);\r\n\r\n        this.children.forEach(child => {\r\n            if(child instanceof GameObject)\r\n                child.draw(ctx);\r\n            if(child instanceof _renderable__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n                child.draw(ctx);\r\n        });\r\n\r\n        ctx.restore();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/gameobject.js?");

/***/ }),

/***/ "./src/images/missing.png":
/*!********************************!*\
  !*** ./src/images/missing.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,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\"\n\n//# sourceURL=webpack:///./src/images/missing.png?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ \"./src/engine.js\");\n/* harmony import */ var _gameobject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameobject */ \"./src/gameobject.js\");\n\r\n\r\n\r\nlet engine = new _engine__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nlet testObj1 = new _gameobject__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\ntestObj1.position = [100, 100];\r\nengine.addObject(testObj1);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/renderable.js":
/*!***************************!*\
  !*** ./src/renderable.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Renderable; });\n/* harmony import */ var _images_missing_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/missing.png */ \"./src/images/missing.png\");\n/* harmony import */ var _images_missing_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_missing_png__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass Renderable {\r\n    constructor(image = _images_missing_png__WEBPACK_IMPORTED_MODULE_0___default.a) {\r\n        this.img = new Image();\r\n        this.img.src = image\r\n    }\r\n\r\n    draw(ctx) {\r\n        ctx.drawImage(0, 0, this.img.width, this.img.height);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/renderable.js?");

/***/ })

/******/ });