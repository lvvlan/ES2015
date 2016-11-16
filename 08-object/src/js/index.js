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
    let birth = '2016/11/16';

    let Person = {
        name: '张三',
        //等同于 birth: birth
        birth,
        //等同于 hello: function (){...}
        hello() {
            console.log(`我的名字是：${this.name}, 生日是${this.birth}`);
        }
    }
}

//属性名表达式
{
    let propKey = 'foo';
    let obj = {
        [propKey]: 'aaa',
        ['h'+'ello']: 123
    };
    console.log(obj);

    let lastWorld = 'last world';
    let obj2 = {
        first: 'hello',
        [lastWorld]: 'world',
        ['h'+'ello']() {
            console.log('hi');
        }
    };
    console.log(obj2.first);    //hello
    console.log(obj2['last world']);    //world
    console.log(obj2[lastWorld]);   //world
    obj2.hello();    //hi
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
    let target = {a:1};
    let s1 = {b:2}, s2 = {c:3}, s3 = {a: 5};

    console.log(Object.assign(target, s1, s2, s3));

    let obj1 = {a: {b: 1}};
    let obj2 = Object.assign({}, obj1);
    obj1.a.b = 2;
    console.log(obj2.a.b);//2
    //Object.assign拷贝得到的是这个对象的引用。这个对象的任何变化，都会反映到目标对象上面。

    let obj3 = {a: {b: 1, d:2}};
    let obj4 = {a: {b: 'hello'}};
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
    let proto = {};
    let obj = {x: 10};

    Object.setPrototypeOf(obj, proto);

    // proto = {y: 20} 这样写不会设置到obj.__proto__上
    proto.y = 20;

    console.log(obj);
    console.log(obj.y);

    console.log(Object.getPrototypeOf(obj));
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
    let o1 = {
        foo: 'test'
    };
    let o2 = {
        foo: 'test'
    };

    Object.defineProperty(o1, 'name', {
        value: '张三',    //值，默认是undefined
        writable: true, //是否是只读property，默认是false
        enumerable: true,   //是否可以被枚举(for in)，默认false
        configurable: true  //是否可以被删除，默认false
    });
    Object.defineProperties(o2,{
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
