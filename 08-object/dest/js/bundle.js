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
	//对象

	// 1. 对象的简洁表示法
	// 注：简洁写法的属性名总是字符串
	{
	    var birth = '2016/11/16';

	    var Person = {
	        name: '张三',
	        //等同于 birth: birth
	        birth: birth,
	        //等同于 hello: function (){...}
	        hello: function hello() {
	            console.log('\u6211\u7684\u540D\u5B57\u662F\uFF1A' + this.name + ', \u751F\u65E5\u662F' + this.birth);
	        }
	    };
	}

	//属性名表达式
	{
	    var _obj, _obj2;

	    var propKey = 'foo';
	    var obj = (_obj = {}, _defineProperty(_obj, propKey, 'aaa'), _defineProperty(_obj, 'h' + 'ello', 123), _obj);
	    console.log(obj);

	    var lastWorld = 'last world';
	    var obj2 = (_obj2 = {
	        first: 'hello'
	    }, _defineProperty(_obj2, lastWorld, 'world'), _defineProperty(_obj2, 'h' + 'ello', function () {
	        console.log('hi');
	    }), _obj2);
	    console.log(obj2.first); //hello
	    console.log(obj2['last world']); //world
	    console.log(obj2[lastWorld]); //world
	    obj2.hello(); //hi
	}

	//Object.is() 比较两个值是否严格想等
	{
	    console.log(+0 === -0); //true
	    console.log(NaN === NaN); //false

	    console.log(Object.is(+0, -0)); //false
	    console.log(Object.is(NaN, NaN));
	}

	//Object.assign() 将源对象的所有可枚举的属性 复制到目标对象
	//该方法实行的是浅拷贝 而不是深拷贝

	{
	    var target = { a: 1 };
	    var s1 = { b: 2 },
	        s2 = { c: 3 },
	        s3 = { a: 5 };

	    console.log(Object.assign(target, s1, s2, s3));

	    var obj1 = { a: { b: 1 } };
	    var _obj3 = Object.assign({}, obj1);
	    obj1.a.b = 2;
	    console.log(_obj3.a.b); //2
	    //Object.assign拷贝得到的是这个对象的引用。这个对象的任何变化，都会反映到目标对象上面。

	    var obj3 = { a: { b: 1, d: 2 } };
	    var obj4 = { a: { b: 'hello' } };
	    console.log(Object.assign(obj3, obj4)); // {a: {b: 'hello'}}
	}

	//可枚举性 对象的每个属性都有一个描述对象 Object.getOwnPropertyDescriptor(ES7)方法可以获取该属性的描述对象。
	//描述对象的enumerable属性 称为可枚举性 如果改属性为false 就表示某些操作会忽略当前属性（for...in会忽略掉enumerable为false的属性）
	//ES6规定，所有Class的原型的方法都是不可枚举的。

	/**
	 * 1. Object.setPrototypeOf方法的作用与__proto__相同，用来设置一个对象的prototype对象。它是ES6正式推荐的设置原型对象的方法。
	 * 2. 该方法与setPrototypeOf方法配套，用于读取一个对象的prototype对象。
	 * */

	{
	    var proto = {};
	    var _obj4 = { x: 10 };

	    Object.setPrototypeOf(_obj4, proto);

	    // proto = {y: 20} 这样写不会设置到obj.__proto__上
	    proto.y = 20;

	    console.log(_obj4);
	    console.log(_obj4.y);

	    console.log(Object.getPrototypeOf(_obj4));
	}

	//对象的扩展运算
	/*
	{
	    let ab = { ...a, ...b };
	    // 等同于
	    let ab = Object.assign({}, a, b);
	}
	*/

	//Object.defineProperty(O,Prop,descriptor) / Object.defineProperties(O,descriptors)
	{
	    var o1 = {
	        foo: 'test'
	    };
	    var o2 = {
	        foo: 'test'
	    };

	    Object.defineProperty(o1, 'name', {
	        value: '张三', //值，默认是undefined
	        writable: true, //是否是只读property，默认是false
	        enumerable: true, //是否可以被枚举(for in)，默认false
	        configurable: true //是否可以被删除，默认false
	    });
	    Object.defineProperties(o2, {
	        name: {
	            value: '李四',
	            writable: true,
	            enumerable: true,
	            configurable: true
	        },
	        age: {
	            value: 18,
	            writable: true,
	            enumerable: true,
	            configurable: true
	        }
	    });
	    console.log(o1);
	    console.log(o2);
	}

/***/ }
/******/ ]);