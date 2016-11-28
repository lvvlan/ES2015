/**
 * Des
 * Created by luowei5 on 2016/11/15.
 * E-mail luowei5@jd.com
 * Update 2016/11/15
 */

/**
 * Iterator（遍历器）
 * 1. 它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署Iterator接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。
 * 2. 在ES6中，有三类数据结构原生具备Iterator接口：数组、某些类似数组的对象(字符串)、Set和Map结构。
 * 3. 对于某些类数组的数据结构，可添加[Symbol.iterator]: Array.prototype[Symbol.iterator]方法，普通对象部署数组的Symbol.iterator方法，并无效果。
 * */

/**
 * for...of
 * 有着同for...in一样的简洁语法，但是没有for...in那些缺点。
 * 不同用于forEach方法，它可以与break、continue和return配合使用。
 * 提供了遍历所有数据结构的统一操作接口。
 * */