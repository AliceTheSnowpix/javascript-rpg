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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Engine; });\n/* harmony import */ var _gameobject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameobject */ \"./src/gameobject.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n\r\n\r\n\r\nclass Engine {\r\n    constructor() {\r\n        document.body.style.margin = \"0px\";\r\n        document.body.style.overflow = \"hidden\";\r\n        this.canvas = document.createElement(\"canvas\");\r\n        this.canvas.width = window.innerWidth;\r\n        this.canvas.height = window.innerHeight;\r\n        document.body.appendChild(this.canvas);\r\n\r\n        this.ctx = this.canvas.getContext(\"2d\");\r\n\r\n        this.lastTime = new Date().getTime();\r\n\r\n        this.objs = [];\r\n\r\n        this.input = new _input__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\n        window.requestAnimationFrame(this.loop.bind(this));\r\n    }\r\n\r\n    addObject(obj) {\r\n        if(obj instanceof _gameobject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n            this.objs.push(obj);\r\n        } else {\r\n            console.error(\"Invalid Object Added. Not Game Object\")\r\n        }\r\n    }\r\n\r\n    loop() {\r\n        let time = new Date().getTime();\r\n        let dt = (time - this.lastTime) / 1000;\r\n\r\n        //ToDo Do updates here\r\n\r\n        if(this.update)\r\n            this.update(dt);\r\n\r\n        this.ctx.fillStyle = \"#303030\";\r\n        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\r\n\r\n        //ToDo Do drawing here\r\n\r\n        this.objs.forEach(obj => {\r\n            obj.draw(this.ctx);\r\n        });\r\n\r\n        this.lastTime = time;\r\n        window.requestAnimationFrame(this.loop.bind(this));\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/engine.js?");

/***/ }),

/***/ "./src/gameobject.js":
/*!***************************!*\
  !*** ./src/gameobject.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameObject; });\n/* harmony import */ var _renderable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderable */ \"./src/renderable.js\");\n\r\n\r\nclass GameObject {\r\n    constructor() {\r\n        this.position = [0,0];\r\n        this.children = [];\r\n    }\r\n\r\n    translate(x, y) {\r\n        this.position[0] += x;\r\n        this.position[1] += y;\r\n    }\r\n\r\n    addChild(child) {\r\n        this.children.push(child);\r\n    }\r\n\r\n    draw(ctx) {\r\n        ctx.save();\r\n        ctx.translate(this.position[0], this.position[1]);\r\n\r\n        this.children.forEach(child => {\r\n            if(child instanceof GameObject)\r\n                child.draw(ctx);\r\n            if(child instanceof _renderable__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n                child.draw(ctx);\r\n        });\r\n\r\n        ctx.restore();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/gameobject.js?");

/***/ }),

/***/ "./src/images/dungeon.png":
/*!********************************!*\
  !*** ./src/images/dungeon.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,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\"\n\n//# sourceURL=webpack:///./src/images/dungeon.png?");

/***/ }),

/***/ "./src/images/missing.png":
/*!********************************!*\
  !*** ./src/images/missing.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,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\"\n\n//# sourceURL=webpack:///./src/images/missing.png?");

/***/ }),

/***/ "./src/images/player.png":
/*!*******************************!*\
  !*** ./src/images/player.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/a6e5ad2b3a9bfd2d53bfdce300bca075-player.png\";\n\n//# sourceURL=webpack:///./src/images/player.png?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Input; });\nclass Input {\r\n    constructor() {\r\n        this.downKeys = [];\r\n        document.onkeydown = (evt) => {\r\n            this.downKeys[evt.code] = true;\r\n        };\r\n\r\n        document.onkeyup = (evt) => {\r\n            this.downKeys[evt.code] = false;\r\n        };\r\n    }\r\n\r\n    isKeyDown(keyCode) {\r\n        return this.downKeys[keyCode];\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ \"./src/engine.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _gameobject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameobject */ \"./src/gameobject.js\");\n/* harmony import */ var _renderable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderable */ \"./src/renderable.js\");\n/* harmony import */ var _images_dungeon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/dungeon.png */ \"./src/images/dungeon.png\");\n/* harmony import */ var _images_dungeon_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_dungeon_png__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\nlet engine = new _engine__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nlet player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](50, 50);\r\n\r\nlet map = new _gameobject__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nmap.addChild(new _renderable__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_images_dungeon_png__WEBPACK_IMPORTED_MODULE_4___default.a));\r\nengine.addObject(map);\r\n\r\nengine.addObject(player);\r\nengine.update = (dt) => {\r\n    if(engine.input.isKeyDown(\"KeyW\") || engine.input.isKeyDown(\"ArrowUp\") || engine.input.isKeyDown(\"Numpad8\")) {\r\n        player.translate(0, -100 * dt);\r\n        player.facing = 1;\r\n    }\r\n    if(engine.input.isKeyDown(\"KeyS\") || engine.input.isKeyDown(\"ArrowDown\") || engine.input.isKeyDown(\"Numpad2\")) {\r\n        player.translate(0, 100 * dt);\r\n        player.facing = 3;\r\n    }\r\n    if(engine.input.isKeyDown(\"KeyA\") || engine.input.isKeyDown(\"ArrowLeft\") || engine.input.isKeyDown(\"Numpad4\")) {\r\n        player.translate(-100 * dt, 0);\r\n        player.facing = 4;\r\n    }\r\n    if(engine.input.isKeyDown(\"KeyD\") || engine.input.isKeyDown(\"ArrowRight\") || engine.input.isKeyDown(\"Numpad6\")) {\r\n        player.translate(100 * dt, 0);\r\n        player.facing = 2;\r\n    }\r\n    if(!engine.input.isKeyDown(\"KeyW\") && !engine.input.isKeyDown(\"ArrowUp\") && !engine.input.isKeyDown(\"Numpad8\") && \r\n        !engine.input.isKeyDown(\"KeyS\") && !engine.input.isKeyDown(\"ArrowDown\") && !engine.input.isKeyDown(\"Numpad2\") && \r\n        !engine.input.isKeyDown(\"KeyA\") && !engine.input.isKeyDown(\"ArrowLeft\") && !engine.input.isKeyDown(\"Numpad4\") && \r\n        !engine.input.isKeyDown(\"KeyD\") && !engine.input.isKeyDown(\"ArrowRight\") && !engine.input.isKeyDown(\"Numpad6\")) {\r\n        player.facing = 0\r\n    }\r\n};\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _gameobject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameobject */ \"./src/gameobject.js\");\n/* harmony import */ var _renderable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderable */ \"./src/renderable.js\");\n/* harmony import */ var _images_player_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/player.png */ \"./src/images/player.png\");\n/* harmony import */ var _images_player_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_player_png__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\nclass Player extends _gameobject__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(x, y) {\r\n        super();\r\n\r\n        this.position = [x, y]\r\n\r\n        this.facing = 0;\r\n        this.renderables = [\r\n            new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_images_player_png__WEBPACK_IMPORTED_MODULE_2___default.a, 18, 0, 9, 4, 10),\r\n            new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_images_player_png__WEBPACK_IMPORTED_MODULE_2___default.a, 1, 7, 9, 4, 10),\r\n            new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_images_player_png__WEBPACK_IMPORTED_MODULE_2___default.a, 27, 7, 9, 4, 10),\r\n            new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_images_player_png__WEBPACK_IMPORTED_MODULE_2___default.a, 19, 7, 9, 4, 10),\r\n            new _renderable__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_images_player_png__WEBPACK_IMPORTED_MODULE_2___default.a, 9, 7, 9, 4, 10)\r\n        ];\r\n    }\r\n\r\n    draw(ctx) {\r\n        ctx.save();\r\n        ctx.translate(this.position[0], this.position[1])\r\n        this.renderables[this.facing].draw(ctx);\r\n        ctx.restore();\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/renderable.js":
/*!***************************!*\
  !*** ./src/renderable.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Renderable; });\n/* harmony import */ var _images_missing_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/missing.png */ \"./src/images/missing.png\");\n/* harmony import */ var _images_missing_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_missing_png__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass Renderable {\r\n    constructor(image = _images_missing_png__WEBPACK_IMPORTED_MODULE_0___default.a, startFrame = 0, frameCount = 0, framesx = 1, framesy = 1, speed = 1) {\r\n        this.img = new Image();\r\n        this.img.src = image;\r\n        this.frame = startFrame;\r\n        this.startFrame = startFrame;\r\n        this.frameCount = frameCount;\r\n        this.framesx = framesx;\r\n        this.framesy = framesy;\r\n        this.subWidth = this.img.width / framesx;\r\n        this.subHeight = this.img.height / framesy;\r\n        this.speed = speed;\r\n        this.animTime = new Date().getTime();\r\n    }\r\n\r\n    draw(ctx) {\r\n        let t = new Date().getTime();\r\n        if(t > this.animTime) {\r\n            this.frame ++;\r\n            this.animTime = t + 1000 / this.speed;\r\n        }\r\n        if(this.frame > this.startFrame + this.frameCount) {\r\n            this.frame = this.startFrame;\r\n        }\r\n\r\n        let posx = (this.frame % this.framesx) * this.subWidth;\r\n        let posy = Math.floor(this.frame / this.framesx) * this.subHeight;\r\n\r\n        ctx.drawImage(this.img, posx, posy, this.subWidth, this.subHeight, 0, 0, this.subWidth, this.subHeight);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/renderable.js?");

/***/ })

/******/ });