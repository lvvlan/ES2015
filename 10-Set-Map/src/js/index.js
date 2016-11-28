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
    let s = new Set();
    [2,3,4,2,1,4,1,1,3].map((x) => s.add(x));
    console.log(s);

    let set1 = new Set([1,2,3,4,5,6,5,4,3]);
    console.log([...set1]);
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
    let s = new Set();
    s.add(1).add(2).add(2);

    console.log(s.size);    //2
    console.log(s.has(1), s.has(2), s.has(3));  //true true false

    s.delete(2);
    console.log(s.has(2));  //false

    s.clear();
    console.log(s);
}

//***Array.from方法可以将Set结构转为数组。
{
    function dedupe(array) {
        return Array.from(new Set(array));
    }

    console.log(dedupe([1,1,2,2,3,3,4,4,5,5]));
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
    let s = new Set(['red', 'blue', 'yellow']);

    for(let item of s.keys()){
        console.log(item);
    }

    for(let item of s.values()){
        console.log(item);
    }

    for(let item of s.entries()){
        console.log(item);
    }

    for(let x of s){
        console.log(x);
    }

    s.forEach((value, item) => console.log(value, item));
}

//可以利用数组的map和filter方法。
{
    let a = new Set([1,2,3]);
    let b = new Set([4,3,2]);

    //并集
    let union = new Set([...a, ...b]);
    console.log(union); // Set {1, 2, 3, 4}

    //交集
    let intersect = new Set([...a].filter((x) => b.has(x)));
    console.log(intersect); //Set {2, 3}

    //差集
    let difference = new Set([...a].filter((x) => !b.has(x)));
    console.log(difference);
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
    let m = new Map();
    let o = {p: 'Hell World!'};
    let f = {P: 'use code, change world!'};

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
    let  m = new Map([
        ['name', 'Leon'],
        ['age', 18],
        ['sexy', 'boy']
    ]);

    console.log(m);
    console.log(m.size);
    console.log(m.get('name'));
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
    let m1 = new Map();

    m1.set(['a'], 666);
    console.log(m1.get(['a'])); //undefined

    let m2 = new Map();
    let k1 = ['a'],
        k2 = ['a'];

    m2.set(k1, 111).set(k2, 222);
    console.log(`k1: ${m2.get(k1)}, k2: ${m2.get(k2)}`);    // 111, 222

    let m3 = new Map();

    m3.set(NaN, 123);
    console.log(m3.get(NaN));   //123
    m3.set(-0, 234);
    console.log(m3.get(+0));    //234
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
    let map = new Map([
        ['F', 'no'],
        ['T', 'yes']
    ]);

    for(let key of map.keys()){
        console.log(key);
    }

    for(let value of map.values()){
        console.log(value);
    }

    for(let item of map.entries()){
        console.log(item);
    }

    //forEach方法还可以接受第二个参数，用来绑定this。
    map.forEach((value, key) => console.log(value, key));
}

//Map解构也可以结合数据的map方法、filter方法 与Set使用基本一致