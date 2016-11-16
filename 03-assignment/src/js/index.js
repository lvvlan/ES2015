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
    let [a, b, c] = [1, 2, 3];
    console.log(a, b, c);
}
//上面代码表示，可以从数组中提取值，按照对应位置，对变量赋值。

// 2. 解构赋值允许指定默认值
{
    let [foo = 12] = [];
    console.log(foo);   //  12

    let [x = 1] = [undefined]; //x -> undefined
    let [y = 1] = [null];   //x -> null
}
//注意，ES6内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
// 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
{
    let [x = 1, y = x] = [];     // x=1; y=1
    //let [x = 1, y = x] = [2];    // x=2; y=2
    //let [x = 1, y = x] = [1, 2]; // x=1; y=2
    //let [x = y, y = 1] = [];     // ReferenceError
}
//上面最后一个表达式之所以会报错，是因为x用到默认值y时，y还没有声明。

//对象解构赋值
//对象的解构赋值不同于数组，是无序的，变量名与属性名相同，即可取到正确的值
{
    let {bar, foo} = {bar: 'aaa', foo: 'bbb'};  //bar -> aaa foo -> bbb
}
//如果变量名与属性不一致，需写成下面这样
{
    let {foo: baz} = {foo: 'aaa', bar: 'bbb'};
    console.log(baz);   // aaa
    let {first: f, last: l} = {first: 'hello', last: 'world'};
    console.log(f, l);  // 'hello', 'world'
}
//对象的解构赋值的内部机制，是先找到同名的属性，然后再赋值给对应的变量。真正被赋值的是后者，而不是前者

//对象解构赋值也有默认值，跟数组解构的默认值一样， 默认值生效的条件是：对象的属性值严格等于undefined

//字符串的解构赋值
{
    const [a, b, c, d, e] = 'hello';    // a: h; b: e; c: l; d: l; e: o;
}

//函数的参数也可以使用解构赋值，并且也有默认值
{
    function move({x = 0, y = 0} = {}){
        return [x, y]
    }

    console.log(move({x: 3, y: 5}));    //3, 5
    console.log(move({x:3}));   //3, 0
    console.log(move({}));  //0, 0
    console.log(move());    //0, 0
}

//用途
// 1. 变量的交换

{
    let x = 5, y = 12;
    [x, y] = [y, x];

    console.log(x, y);  //12, 5
}

//2. 提取json数据
{
    let json = {
        id: 11,
        status: 'OK',
        data: [12, 5]
    };

    let {id, status, data: number} = json;
    console.log(id, status, number);    //11, OK, [12, 5]
}