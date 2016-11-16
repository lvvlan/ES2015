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

	// 变量的解构赋值

	//数组解构赋值
	//1.
	{
	    var a = 1,
	        b = 2,
	        c = 3;

	    console.log(a, b, c);
	}
	//上面代码表示，可以从数组中提取值，按照对应位置，对变量赋值。

	// 2. 解构赋值允许指定默认值
	{
	    var _ref = [],
	        _ref$ = _ref[0],
	        foo = _ref$ === undefined ? 12 : _ref$;

	    console.log(foo); //  12

	    var _undefined = undefined,
	        x = _undefined === undefined ? 1 : _undefined; //x -> undefined

	    var _ref2 = null,
	        y = _ref2 === undefined ? 1 : _ref2; //x -> null
	}
	//注意，ES6内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
	// 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
	{
	    var _ref3 = [],
	        _ref3$ = _ref3[0],
	        _x = _ref3$ === undefined ? 1 : _ref3$,
	        _ref3$2 = _ref3[1],
	        _y = _ref3$2 === undefined ? _x : _ref3$2; // x=1; y=1
	    //let [x = 1, y = x] = [2];    // x=2; y=2
	    //let [x = 1, y = x] = [1, 2]; // x=1; y=2
	    //let [x = y, y = 1] = [];     // ReferenceError

	}
	//上面最后一个表达式之所以会报错，是因为x用到默认值y时，y还没有声明。

	//对象解构赋值
	//对象的解构赋值不同于数组，是无序的，变量名与属性名相同，即可取到正确的值
	{
	    var _bar$foo = { bar: 'aaa', foo: 'bbb' },
	        bar = _bar$foo.bar,
	        _foo = _bar$foo.foo; //bar -> aaa foo -> bbb
	}
	//如果变量名与属性不一致，需写成下面这样
	{
	    var _foo$bar = { foo: 'aaa', bar: 'bbb' },
	        baz = _foo$bar.foo;

	    console.log(baz); // aaa
	    var _first$last = { first: 'hello', last: 'world' },
	        f = _first$last.first,
	        l = _first$last.last;

	    console.log(f, l); // 'hello', 'world'
	}
	//对象的解构赋值的内部机制，是先找到同名的属性，然后再赋值给对应的变量。真正被赋值的是后者，而不是前者

	//对象解构赋值也有默认值，跟数组解构的默认值一样， 默认值生效的条件是：对象的属性值严格等于undefined

	//字符串的解构赋值
	{
	    var _hello = 'hello',
	        _hello2 = _slicedToArray(_hello, 5),
	        _a = _hello2[0],
	        _b = _hello2[1],
	        _c = _hello2[2],
	        d = _hello2[3],
	        e = _hello2[4]; // a: h; b: e; c: l; d: l; e: o;

	}

	//函数的参数也可以使用解构赋值，并且也有默认值
	{
	    var move = function move() {
	        var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	            _ref4$x = _ref4.x,
	            x = _ref4$x === undefined ? 0 : _ref4$x,
	            _ref4$y = _ref4.y,
	            y = _ref4$y === undefined ? 0 : _ref4$y;

	        return [x, y];
	    };

	    console.log(move({ x: 3, y: 5 })); //3, 5
	    console.log(move({ x: 3 })); //3, 0
	    console.log(move({})); //0, 0
	    console.log(move()); //0, 0
	}

	//用途
	// 1. 变量的交换

	{
	    var _x3 = 5,
	        _y2 = 12;
	    var _ref5 = [_y2, _x3];
	    _x3 = _ref5[0];
	    _y2 = _ref5[1];


	    console.log(_x3, _y2); //12, 5
	}

	//2. 提取json数据
	{
	    var json = {
	        id: 11,
	        status: 'OK',
	        data: [12, 5]
	    };

	    var id = json.id,
	        status = json.status,
	        number = json.data;

	    console.log(id, status, number); //11, OK, [12, 5]
	}

/***/ }
/******/ ]);