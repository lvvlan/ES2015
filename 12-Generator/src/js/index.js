/**
 * Des
 * Created by luowei5 on 2016/11/15.
 * E-mail luowei5@jd.com
 * Update 2016/11/15
 */

//Generator
{
    function* foo(x) {
        let y = 2 * (yield (x+1));
        let z = yield (y/3);
        return (x + y +z);
    }

    let a = foo(5);

    console.log(a.next());  //Object {value: 6, done: false}
    //第二次运行next方法的时候不带参数，导致y的值等于2 * undefined（即NaN）
    console.log(a.next());  //Object {value: NaN, done: false}
    //第三次运行next方法的时候不带参数，所以z等于undefined，返回对象的value属性等于5 + NaN + undefined
    console.log(a.next());  //Object {value: NaN, done: true}

    let b = foo(5);
    // value = 5+1
    console.log(b.next());      //Object {value: 6, done: false}
    // value = 2 * 12 / 3
    console.log(b.next(12));    //Object {value: 8, done: false}
    // value = 5 + 24 + 13
    console.log(b.next(13));    //Object {value: 42, done: true}
}
/**
 * next方法的参数表示上一个yield语句的返回值
 * 当前next方法返回的对象里的value是下一个yield后面跟的表达式
 * */
{
    function* dataConsumer(){
        console.log('Start!');
        console.log(`1. ${yield 1}`);
        console.log(`2. ${yield}`);
        console.log(`3. ${yield 3}`);
        return 'End!';
    }

    let genObj = dataConsumer();

    console.log(genObj.next());     // start Object {value: 1, done: false}
    console.log(genObj.next('a'));  // 1. a Object {value: undefined, done: false}
    console.log(genObj.next('b'));  // 2. b Object {value: 3, done: false}
    console.log(genObj.next());     // 3. undefined Object {value: "End!", done: true}
    console.log(genObj.next());     // Object {value: undefined, done: true}
}

// for...of 循环可以遍历Generator函数生成的Iterator对象，且此时不需要调用next方法
{
    function* foo() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
        return 6;
    }

    for(let v of foo()){
        console.log(v);
    }
}

//Generator.prototype.return() 返回给定的值，并且终结遍历Generator函数
{
    function* foo(){
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
        yield 6;
    }

    let g = foo();
    console.log(g.next());
    console.log(g.return(7));
    console.log(g.next());
}

//yield* 在一个Generator函数内部调用另一个Generator函数
{
    function* foo(){
        yield 'a';
        yield 'b';
    }
    function* bar() {
        yield 'x';
        yield* foo();
        yield 'y';
    }

    for(let v of bar()){
        console.log(v);
    }

    let inner = (function* (){
        yield 'Hello!';
        yield 'Bey!'
    }());

    let outer = (function* (){
        yield 'Greeting!';
        yield* inner;
        yield 'Ok, bey.';
    }());

    for(let value of outer){
        console.log(value);
    }

    function* gen(){
        yield ['a', 'b', 'c'];
        yield* ['x', 'y', 'z'];
    }
    let g = gen();
    console.log(g.next());  //['a','b','c']
    console.log(g.next());  //x
    console.log(g.next());  //y
    console.log(g.next());  //z
    console.log(g.next());  //{value: undefined, done: true}

    //取出所有数组嵌套的成员

    function* iterTree(arr) {
        if(Array.isArray(arr)){
            for(let i = 0; i < arr.length; i++){
                yield* iterTree(arr[i]);
            }
        }
        else {
            yield arr;
        }
    }

    let arr = ['a', ['b', 'c'], 'd', ['e', 'f'], 'g'];
    let result = [];
    for(let v of iterTree(arr)){
        result.push(v);
    }
    console.log(result);
}

//Generator与状态机
{
    function* test() {
        for(let i = 0; i < 3; i++){
            yield i;
        }
    }

    let g = test();

    console.log(g.next());
    console.log(g.next());
    console.log(g.next());
    console.log(g.next());

    function* clock() {
        while (true){
            console.log('Tick!');
            yield ;
            console.log('Tock!!');
            yield ;
        }
    }

    let gc = clock();
    gc.next();
    gc.next();
    gc.next();
    gc.next();
}