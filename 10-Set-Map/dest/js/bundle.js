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
	//Set
	//ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
	/**
	 * 注：
	 * 1. 在Set内部，两个NaN是相等。
	 * 2. 两个对象总是不相等的。
	 * */
	{
	    (function () {
	        var s = new Set();
	        [2, 3, 4, 2, 1, 4, 1, 1, 3].map(function (x) {
	            return s.add(x);
	        });
	        console.log(s);

	        var set1 = new Set([1, 2, 3, 4, 5, 6, 5, 4, 3]);
	        console.log([].concat(_toConsumableArray(set1)));
	    })();
	}

	//Set实例的方法分为两大类
	/**
	 * 1. 操作方法
	 * add(value)：添加某个值，返回Set结构本身。
	 * delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
	 * has(value)：返回一个布尔值，表示该值是否为Set的成员。
	 * clear()：清除所有成员，没有返回值。
	 * */
	{
	    var _s = new Set();
	    _s.add(1).add(2).add(2);

	    console.log(_s.size); //2
	    console.log(_s.has(1), _s.has(2), _s.has(3)); //true true false

	    _s.delete(2);
	    console.log(_s.has(2)); //false

	    _s.clear();
	    console.log(_s);
	}

	//***Array.from方法可以将Set结构转为数组。
	{
	    var dedupe = function dedupe(array) {
	        return Array.from(new Set(array));
	    };

	    console.log(dedupe([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));
	}

	/**
	 * 2. 遍历操作
	 * keys()：返回键名的遍历器
	 * values()：返回键值的遍历器
	 * entries()：返回键值对的遍历器
	 * forEach()：使用回调函数遍历每个成员
	 * 注：由于Set结构没有键名，只有键值（或者说键名和键值是同一个值），所以key方法和value方法的行为完全一致。
	 * */

	{
	    var _s2 = new Set(['red', 'blue', 'yellow']);

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = _s2.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var item = _step.value;

	            console.log(item);
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
	        for (var _iterator2 = _s2.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var _item = _step2.value;

	            console.log(_item);
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
	        for (var _iterator3 = _s2.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var _item2 = _step3.value;

	            console.log(_item2);
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

	    var _iteratorNormalCompletion4 = true;
	    var _didIteratorError4 = false;
	    var _iteratorError4 = undefined;

	    try {
	        for (var _iterator4 = _s2[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	            var x = _step4.value;

	            console.log(x);
	        }
	    } catch (err) {
	        _didIteratorError4 = true;
	        _iteratorError4 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                _iterator4.return();
	            }
	        } finally {
	            if (_didIteratorError4) {
	                throw _iteratorError4;
	            }
	        }
	    }

	    _s2.forEach(function (value, item) {
	        return console.log(value, item);
	    });
	}

	//可以利用数组的map和filter方法。
	{
	    (function () {
	        var a = new Set([1, 2, 3]);
	        var b = new Set([4, 3, 2]);

	        //并集
	        var union = new Set([].concat(_toConsumableArray(a), _toConsumableArray(b)));
	        console.log(union); // Set {1, 2, 3, 4}

	        //交集
	        var intersect = new Set([].concat(_toConsumableArray(a)).filter(function (x) {
	            return b.has(x);
	        }));
	        console.log(intersect); //Set {2, 3}

	        //差集
	        var difference = new Set([].concat(_toConsumableArray(a)).filter(function (x) {
	            return !b.has(x);
	        }));
	        console.log(difference);
	    })();
	}

	/**
	 * WeakSet: WeakSet结构与Set类似，也是不重复的值的集合。但是，它与Set有两个区别。
	 * 1. WeakSet的成员只能是对象，而不能是其他类型的值。
	 * 2. WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于WeakSet之中。这个特点意味着，无法引用WeakSet的成员，因此WeakSet是不可遍历的。
	 * */

	//Map
	/**
	 * JS传统的对象提供了 字符串-值 的对应
	 * Map结构提供了 值-值 的对应 是一种更完善的Hash结构
	 * */

	{
	    var m = new Map();
	    var o = { p: 'Hell World!' };
	    var f = { P: 'use code, change world!' };

	    //设置
	    m.set(o, 'content');
	    m.set(f, ['content']);
	    console.log(m);
	    console.log(m.size);
	    //是否存在该值
	    console.log(m.has(o));
	    //删除
	    m.delete(o);
	    console.log(m);
	    //清除
	    m.clear();
	    console.log(m);
	}

	//作为构造函数Map 也可以接受一个数组作为参数 该数组的成员是一个个表示键值对的数组
	{
	    var _m = new Map([['name', 'Leon'], ['age', 18], ['sexy', 'boy']]);

	    console.log(_m);
	    console.log(_m.size);
	    console.log(_m.get('name'));
	}

	/**
	 * 注：
	 * 1. 字符串'true' 和 布尔值true 是两个不同的键
	 * 2. 如果对同一个键多次赋值，后面的值将覆盖见面的值
	 * 3. 如果读取一个未知的键 返回undefined
	 * 4. 只有同一个对象的引用，Map解构才将其视为同一键（Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键）
	 * 5. +0与-0 视为同一个键 虽然NaN不严格相等于自身，但Map将其视为同一个键
	 * */

	{
	    var m1 = new Map();

	    m1.set(['a'], 666);
	    console.log(m1.get(['a'])); //undefined

	    var m2 = new Map();
	    var k1 = ['a'],
	        k2 = ['a'];

	    m2.set(k1, 111).set(k2, 222);
	    console.log('k1: ' + m2.get(k1) + ', k2: ' + m2.get(k2)); // 111, 222

	    var m3 = new Map();

	    m3.set(NaN, 123);
	    console.log(m3.get(NaN)); //123
	    m3.set(-0, 234);
	    console.log(m3.get(+0)); //234
	}

	/**
	 * Map的遍历方法
	 * keys()：返回键名的遍历器。
	 * values()：返回键值的遍历器。
	 * entries()：返回所有成员的遍历器。
	 * forEach()：遍历Map的所有成员。
	 * 注：Map的遍历顺序就是插入顺序
	 * */

	{
	    var map = new Map([['F', 'no'], ['T', 'yes']]);

	    var _iteratorNormalCompletion5 = true;
	    var _didIteratorError5 = false;
	    var _iteratorError5 = undefined;

	    try {
	        for (var _iterator5 = map.keys()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	            var key = _step5.value;

	            console.log(key);
	        }
	    } catch (err) {
	        _didIteratorError5 = true;
	        _iteratorError5 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                _iterator5.return();
	            }
	        } finally {
	            if (_didIteratorError5) {
	                throw _iteratorError5;
	            }
	        }
	    }

	    var _iteratorNormalCompletion6 = true;
	    var _didIteratorError6 = false;
	    var _iteratorError6 = undefined;

	    try {
	        for (var _iterator6 = map.values()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	            var value = _step6.value;

	            console.log(value);
	        }
	    } catch (err) {
	        _didIteratorError6 = true;
	        _iteratorError6 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion6 && _iterator6.return) {
	                _iterator6.return();
	            }
	        } finally {
	            if (_didIteratorError6) {
	                throw _iteratorError6;
	            }
	        }
	    }

	    var _iteratorNormalCompletion7 = true;
	    var _didIteratorError7 = false;
	    var _iteratorError7 = undefined;

	    try {
	        for (var _iterator7 = map.entries()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	            var _item3 = _step7.value;

	            console.log(_item3);
	        }

	        //forEach方法还可以接受第二个参数，用来绑定this。
	    } catch (err) {
	        _didIteratorError7 = true;
	        _iteratorError7 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion7 && _iterator7.return) {
	                _iterator7.return();
	            }
	        } finally {
	            if (_didIteratorError7) {
	                throw _iteratorError7;
	            }
	        }
	    }

	    map.forEach(function (value, key) {
	        return console.log(value, key);
	    });
	}

	//Map解构也可以结合数据的map方法、filter方法 与Set使用基本一致

/***/ }
/******/ ]);