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

	/**
	 * Des
	 * Created by luowei5 on 2016/11/15.
	 * E-mail luowei5@jd.com
	 * Update 2016/11/15
	 */
	//字符串

	/**
	 * includes():  返回布尔值，表示是否找到了参数字符串
	 * startsWith(): 返回布尔值，表示参数字符串是否在源字符串的头部
	 * endsWidth():  返回布尔值，表示参数字符串是否在源字符串的尾部
	 * *这三个方法都支持第二个参数，表示开始搜索的位置
	 * */

	{
	    var s = 'hello world!';

	    console.log(s.startsWith('hello')); //true
	    console.log(s.endsWith('!')); //true
	    console.log(s.includes('ll')); //true

	    var string = 'hello world!';

	    console.log(string.startsWith('world', 6)); //true
	    console.log(string.endsWith('hello', 5)); //true
	    console.log(string.includes('h', 1)); //false
	}

	//repeat()  返回一个新字符串，表示将原字符串重复N次
	{
	    var s1 = 'l';
	    var s2 = 'hello';
	    var s3 = 'world';

	    console.log('s1: %s, s2: %s, s3: %s', s1.repeat(3), s2.repeat(2), s3.repeat(0));
	}

	/**
	 * ES7推出了补全字符串长度的功能
	 * padStart():  头部补全
	 * padEnd(): 尾部补全
	 * 上面两个方法接受两个参数 第一个是指定字符串的最小长度；第二个是补全的字符串
	 * */

	{}
	//补全位数
	//console.log('123'.padStart(10, '0')); //0000000123
	//提示字符串格式
	//console.log('09-12'.padStart(10, 'YYY-MM-DD'));   // 'YYY-09-12'


	//模板字符串
	/**
	 * 模板字符串用`反单引号表示，嵌入的变量写在${}中 花括号内可以放入任意JS表达式 以及引用对象属性
	 * */
	{
	    var x = 1,
	        y = 2;
	    console.log(x + ' + ' + y + ' = ' + (x + y));
	}

/***/ }
/******/ ]);