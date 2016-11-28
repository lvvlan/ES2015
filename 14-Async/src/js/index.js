/**
 * Des
 * Created by luowei5 on 2016/11/15.
 * E-mail luowei5@jd.com
 * Update 2016/11/15
 */

/**
 * Async
 * 将自动执行写在了语言内部
 * async内部是继发执行，外部不受影响
 */

{

    let querySql = function (arg) {
        //console.log('a');
        return new Promise(function (resolve, reject){
            //console.log('b');
            setTimeout(function (){
                //console.log('c');
                resolve(arg);
            }, 2000);
        });
    };

    let async1 = async function () {
        var data1 = await querySql(111);
        console.log(data1);
        var data2 = await querySql(222);
        console.log(data2);
    };

    async1();

    let async2 = async function () {
        let data1Promise = querySql('aaa');
        let data2Promise = querySql('bbb');

        let data1 = await data1Promise;
        console.log(data1);
        let data2 = await data2Promise;
        console.log(data2);
    };

    async2();
}
