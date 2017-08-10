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

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/**
	 * Des
	 * Created by luowei5 on 2016/11/15.
	 * E-mail luowei5@jd.com
	 * Update 2016/11/15
	 */
	//函数

	// 1. 函数参数的默认值(可以与解构赋值结合)

	{
	    (function () {
	        var foo = function foo(_ref) {
	            var x = _ref.x,
	                _ref$y = _ref.y,
	                y = _ref$y === undefined ? 5 : _ref$y;

	            console.log(x, y);
	        };

	        // 1, 2
	        //foo(); //报错

	        //通常情况下，定义了默认值的参数，应该是函数的尾参数。因为这样比较容易看出来，到底省略了哪些参数。如果非尾部的参数设置默认值，实际上这个参数是没法省略的。

	        var foo1 = function foo1() {
	            var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 5 };

	            console.log('json\u662F => ' + json.x + ', ' + json.y);
	        };

	        //利用函数参数默认值 可以指定某一参数不能省略
	        var throwIfMissing = function throwIfMissing() {
	            throw new Error('Missing parameter!');
	        };

	        var bar = function bar() {
	            var mustBeParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : throwIfMissing();

	            return mustBeParam;
	        };
	        //bar(); //Error: Missing parameter!
	        //参数的默认值不是在定义时执行，而是在运行时执行


	        foo({}); // undefined, 5
	        foo({ x: 1 }); // 1, 5
	        foo({ x: 1, y: 2 });

	        foo1();
	        foo1({ y: 3 });
	        foo1({ x: -1, y: 1 });
	        foo1({ x: 'a' });
	    })();
	}

	// 2. rest参数（形式为...变量名） 用于获取函数的多余参数，这样就不需要arguments对象了
	// rest参数是一个数组，所有数组特有的方法都可以用于这个变量
	// res参数之后不能再有其他参数（即只能是最后一个参数）
	{
	    var add = function add() {
	        var sum = 0;

	        for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
	            values[_key] = arguments[_key];
	        }

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var val = _step.value;

	                sum += val;
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

	        return sum;
	    };

	    console.log(add(1, 3, 4)); //8
	}

	// 3. 扩展运算符...  将一个数组转为用逗号分割的参数序列
	{
	    var arr = [3, 5, 13];
	    //ES5写法
	    console.log(Math.max.apply(null, arr));
	    //ES6写法
	    console.log(Math.max.apply(Math, arr));
	    //如果对没有iterator接口的对象，使用扩展运算符，将会报错。
	    var obj = { a: 1, b: 2, c: 3 };
	    console.log([].concat(_toConsumableArray(obj)));
	}

	/**
	 * 箭头函数
	 * 1. 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
	 * 2. 不可以当作构造函数 也就是说不能使用 new 命令
	 * 3. 不可以使用arguments对象， 可以用rest代替
	 * 4. 不可以使用yield命令，因此箭头函数不能用作Generator函数
	 * */

	{
	    var Timer = function Timer() {
	        var _this = this;

	        this.s1 = 0;
	        this.s2 = 0;
	        // 箭头函数
	        setInterval(function () {
	            return _this.s1++;
	        }, 1000);
	        // 普通函数
	        setInterval(function () {
	            this.s2++;
	        }, 1000);
	    };

	    var timer = new Timer();

	    setTimeout(function () {
	        return console.log('s1: ', timer.s1);
	    }, 3100); //3
	    setTimeout(function () {
	        return console.log('s2: ', timer.s2);
	    }, 3100); //0

	    //箭头函数的this就是引用外层代码块的this
	}

	/**
	 * 尾调用
	 * 定义：某个函数的最后一步，是调用另一个函数
	 * */

	{
	    // 情况一
	    var f1 = function f1(x) {
	        var y = g(x);
	        return y;
	    };

	    // 情况二


	    var f2 = function f2(x) {
	        return g(x) + 1;
	    };

	    // 情况三


	    var f3 = function f3(x) {
	        g(x);
	    };
	    /**
	     * 以上三种情况都不属于尾调用
	     * 1、2是调用g函数之后还有赋值操作
	     * 3等同于 g(x); return undefined
	     * */

	}

	/**
	 * 尾递归
	 * */
	{
	    (function () {
	        var f1 = function f1(n) {
	            if (n === 1) return 1;
	            return n * f1(n - 1);
	        };

	        // 复杂度 O(n)
	        var f2 = function f2(n, t) {
	            if (n === 1) return t;
	            return f2(n - 1, n * t);
	        };

	        // 复杂度 O(1) 永远不会发生'stack overflow'错误

	        var fb = function fb(n) {
	            var ac1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	            var ac2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

	            if (n <= 1) return ac2;
	            return fb(n - 1, ac2, ac1 + ac2);
	        };

	        console.log(f1(5));
	        console.log(f2(5, 1));
	    })();
	}

	/**
	 * 柯里化
	 * */
	{
	    (function () {
	        var currying = function currying(fn, n) {
	            return function (m) {
	                return fn.call(this, m, n);
	            };
	        };

	        var f = function f(n, t) {
	            if (n === 1) return t;
	            return f(n - 1, n * t);
	        };

	        var factorial = currying(f, 1);

	        factorial(5); //120
	    })();
	}

/***/ }
/******/ ]);