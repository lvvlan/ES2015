/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * Des
	 * Created by luowei5 on 2016/11/15.
	 * E-mail luowei5@jd.com
	 * Update 2016/11/15
	 */
	//Symbol

	/**
	 * Symbol：
	 * js语言的第七种数据类型，表示独一无二的值
	 * */

	{
	    (function () {
	        var s = Symbol();

	        var obj = _defineProperty({}, s, function () {
	            console.log('Im Symbol Function!');
	        });

	        obj[s]();
	    })();
	}

	//Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的Symbol值。
	{
	    var obj = {};
	    var a = Symbol('a');
	    var b = Symbol('b');

	    obj[a] = 'Hello';
	    obj[b] = 'World';

	    var objectSymbols = Object.getOwnPropertySymbols(obj);

	    console.log(objectSymbols);
	}

/***/ }
/******/ ]);