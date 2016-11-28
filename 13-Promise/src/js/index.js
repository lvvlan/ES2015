/**
 * Des
 * Created by luowei5 on 2016/11/15.
 * E-mail luowei5@jd.com
 * Update 2016/11/15
 */

/**
 * Promise
 * 1. 三种状态： pending（进行中）、resolve（已完成）、reject（已失败）
 * 2. 一旦状态改变就不能再变，任何时候都可以得到这个结果
 * 3. Promise无法被取消，一旦建立他就会立即执行，无法中途取消
 * 4. 如果不设置回调函数，Promise内部抛出的错误不会反映到外部
 * 5. 当初与Pending状态时无法得知目前进展到哪一个阶段
 */

{
    // let p1 = new Promise(function (resolve, reject){
    //     setTimeout(function (){
    //         reject(new Error('fail!!'));
    //     }, 3000);
    // });
    //
    // let p2 = new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //         resolve(p1);
    //     }, 1000);
    // });
    //
    // p2.then(function (result) {
    //     console.log(result);
    // })
    //     .catch(function (err){
    //         console.log(err);
    //     });

    let querySql = function () {
        return new Promise(function (resolve, reject){
            setTimeout(function (){
                resolve({a:5, b:12});
            }, 1000);
        });
    };

    function* gen(){
        console.log('start');
        var data1 = yield querySql();
        //console.log('x');
        console.log(data1);
        var data2 = yield querySql();
        //console.log('y');
        console.log(data2);
        var data3 = yield querySql();
        //console.log('y');
        console.log(data3);
        var data4 = yield querySql();
        //console.log('y');
        console.log(data4);
        console.log('end');
    }
    let i = 0;
    let timer = setInterval(function (){
        console.log(i++);
        if(i == 8){
            clearInterval(timer);
        }

    }, 1000);

    //let g = gen();
    //console.log(g.next());
    // g.next().value.then(function (data1){
    //     g.next(data1).value.then(function (data2){
    //         console.log(g.next(data2));
    //     });
    // });

    function run(gen){
        var g = gen();

        function next(data){
            var result = g.next(data);
            if (result.done) return result.value;
            result.value.then(function(data){
                next(data);
            });
        }

        next();
    }

    run(gen);

    function* test() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
        yield 6;
    }

    let gt = test();

    //console.log(gt.next());
    // if (!gt.next().done){
    //     console.log(gt.next());
    // }
}
