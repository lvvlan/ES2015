/**
 * Des
 * Created by luowei5 on 2016/11/15.
 * E-mail luowei5@jd.com
 * Update 2016/11/15
 */
//Symbol

/**
 * Symbol：
 * js语言的第七种数据类型，表示独一无二的值
 * */

{
    let s = Symbol();

    let obj = {
        [s]() {
            console.log('Im Symbol Function!');
        }
    };

    obj[s]();
}

//Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的Symbol值。
{
    var obj = {};
    var a = Symbol('a');
    var b = Symbol('b');

    obj[a] = 'Hello';
    obj[b] = 'World';

    var objectSymbols = Object.getOwnPropertySymbols(obj);

    console.log(objectSymbols); // [Symbol(a), Symbol(b)]
}

//Symbol.for()，Symbol.keyFor()
{
    console.log(Symbol.for("bar") === Symbol.for("bar")); // true
    console.log(Symbol("bar") === Symbol("bar"));   // false

    var s1 = Symbol.for("foo");
    console.log(Symbol.keyFor(s1)); // "foo"
}