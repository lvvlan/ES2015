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

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	/**
	 * Des
	 * Created by luowei5 on 2016/11/15.
	 * E-mail luowei5@jd.com
	 * Update 2016/11/15
	 */
	//数组

	// 1. Array.from() 用于将两类对象转为真正的数组： 类数组对象 和 可遍历的对象
	// 该方法接受第二个参数， 用于对每个元素进行处理，将处理后的值放入数组
	// 该方法引用一个数组时会返回一个相同的并于引用数组指向不同内存地址的数组
	{
	    var arrayLike = {
	        0: 'a',
	        1: 'b',
	        2: 'c',
	        length: 3
	    };

	    console.log(Array.from(arrayLike));
	    console.log(Array.from([1, 2, 3], function (x) {
	        return x * 2;
	    })); //[2,4,6]
	    //常见类数组的对象是DOM操作返回的NodeList集合，以及函数内部的arguments对象。
	    //所谓类数组，本质特征只有一点，有length属性。 因此任何有length属性的对象都可以通过Array.from转换
	}

	// 2. Array.of() 将一组值转换为数组（实际上是完善Array 或 new Array）
	{
	    Array.of(); // []
	    Array.of(undefined); // [undefined]
	    Array.of(1); // [1]
	    Array.of(1, 2); // [1, 2]
	}

	// 3. 数组示例的find() 和 findIndex()
	/**
	 * 1. find方法用于找出第一个符合条件的数组成员，他的参数是一个回调函数，回调函数可以接受三个参数：依次为当前的值，当前的位置，原数组
	 * 2. findIndex 返回一个符合条件的数组的成员的位置
	 * */

	{
	    var arr = [1, 4, -5, 10];
	    console.log(arr.find(function (value, index, arr) {
	        return value < 0;
	    }));
	    console.log(arr.findIndex(function (value, index, arr) {
	        return value < 0;
	    }));
	}

	// 4. 数组示例的entries() keys() values() 方法
	/**
	 * 可以用for of循环 keys()是对键名的遍历 values()是对键值的遍历 entries()是对键值对的遍历
	 * */

	{
	    var _arr = ['a', 'b', 'c'];

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = _arr.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var index = _step.value;

	            console.log(index);
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	        for (var _iterator2 = ['a', 'b'].values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var elem = _step2.value;

	            console.log(elem);
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }

	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;

	    try {
	        for (var _iterator3 = _arr.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var _step3$value = _slicedToArray(_step3.value, 2),
	                _index = _step3$value[0],
	                _elem = _step3$value[1];

	            console.log(_index, _elem);
	        }
	    } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	            }
	        } finally {
	            if (_didIteratorError3) {
	                throw _iteratorError3;
	            }
	        }
	    }
	}

/***/ }
/******/ ]);