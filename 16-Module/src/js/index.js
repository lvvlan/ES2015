/**
 * Des
 * Created by luowei5 on 2016/11/15.
 * E-mail luowei5@jd.com
 * Update 2016/11/15
 */

/**
 * Module 模块体系
 * 1. export: 规定模块对外的接口
 * 2. import: 输入其他模块提供的功能
 */

/**
 * export
 * 1. 可以使用大括号（{}）输出一组变量，推荐使用这种写法
 * 2. 可以输出变量、函数
 * 3. export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系
 * 4. export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错
 * */

/**
 * import
 * 1. 可以用as关键字将输入的变量重命名 import { lastName as surname } from './profile';
 * 2. import命令具有提升效果，会提升到整个模块的头部，首先执行
 * 3. 可以用*号指定一个对象，将所有输出值都加载这个对象上面
 * */

/**
 * export default
 * 1. 模块指定默认输出，import加载时可以为改默认输出指定任意名字
 * */