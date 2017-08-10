/**
 * Des
 * Created by luowei5 on 2016/11/15.
 * E-mail luowei5@jd.com
 * Update 2016/11/15
 */
//函数

// 1. 函数参数的默认值(可以与解构赋值结合)

{
    function foo({x, y = 5}) {
        console.log(x, y);
    }

    foo({}); // undefined, 5
    foo({x: 1}); // 1, 5
    foo({x: 1, y: 2}); // 1, 2
    //foo(); //报错

    //通常情况下，定义了默认值的参数，应该是函数的尾参数。因为这样比较容易看出来，到底省略了哪些参数。如果非尾部的参数设置默认值，实际上这个参数是没法省略的。

    function foo1(json = {x: 0, y: 5}) {
        console.log(`json是 => ${json.x}, ${json.y}`);
    }

    foo1();
    foo1({y: 3});
    foo1({x: -1, y: 1});
    foo1({x: 'a'});

    //利用函数参数默认值 可以指定某一参数不能省略
    function throwIfMissing(){
        throw new Error('Missing parameter!');
    }

    function bar(mustBeParam = throwIfMissing()){
        return mustBeParam;
    }
    //bar(); //Error: Missing parameter!
    //参数的默认值不是在定义时执行，而是在运行时执行
}

// 2. rest参数（形式为...变量名） 用于获取函数的多余参数，这样就不需要arguments对象了
// rest参数是一个数组，所有数组特有的方法都可以用于这个变量
// res参数之后不能再有其他参数（即只能是最后一个参数）
{
    function add(...values) {
        let sum = 0;

        for(let val of values){
            sum+=val;
        }

        return sum;
    }

    console.log(add(1,3,4));    //8
}

// 3. 扩展运算符...  将一个数组转为用逗号分割的参数序列
{
    let arr = [3, 5, 13];
    //ES5写法
    console.log(Math.max.apply(null, arr));
    //ES6写法
    console.log(Math.max(...arr));
    //如果对没有iterator接口的对象，使用扩展运算符，将会报错。
    let obj = {a:1, b:2, c:3};
    console.log([...obj]);
}

/**
 * 箭头函数
 * 1. 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
 * 2. 不可以当作构造函数 也就是说不能使用 new 命令
 * 3. 不可以使用arguments对象， 可以用rest代替
 * 4. 不可以使用yield命令，因此箭头函数不能用作Generator函数
 * */

{
    function Timer() {
        this.s1 = 0;
        this.s2 = 0;
        // 箭头函数
        setInterval(() => this.s1++, 1000);
        // 普通函数
        setInterval(function () {
            this.s2++;
        }, 1000);
    }

    var timer = new Timer();

    setTimeout(() => console.log('s1: ', timer.s1), 3100);  //3
    setTimeout(() => console.log('s2: ', timer.s2), 3100);  //0

    //箭头函数的this就是引用外层代码块的this
}

/**
 * 尾调用
 * 定义：某个函数的最后一步，是调用另一个函数
 * */

{
    // 情况一
    function f1(x){
        let y = g(x);
        return y;
    }

    // 情况二
    function f2(x){
        return g(x) + 1;
    }

    // 情况三
    function f3(x){
        g(x);
    }
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
    function f1(n) {
        if(n === 1) return 1;
        return n * f1(n - 1);
    }
    console.log(f1(5));
    // 复杂度 O(n)
    function f2(n, t) {
        if(n === 1) return t;
        return f2(n-1, n * t);
    }
    console.log(f2(5,1));
    // 复杂度 O(1) 永远不会发生'stack overflow'错误
    
    function fb(n, ac1 = 1, ac2 = 1) {
        if(n <= 1) return ac2;
        return fb(n-1, ac2, ac1 + ac2);
    }
}

/**
 * 柯里化
 * */
{
    function currying(fn, n) {
        return function (m) {
            return fn.call(this, m, n);
        }
    }

    function f(n, t) {
        if(n === 1) return t;
        return f(n - 1, n * t);
    }

    const factorial = currying(f, 1);

    factorial(5);   //120
}