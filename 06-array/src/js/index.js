/**
 * Des
 * Created by luowei5 on 2016/11/15.
 * E-mail luowei5@jd.com
 * Update 2016/11/15
 */
//数组

// 1. Array.from() 用于将两类对象转为真正的数组： 类数组对象 和 可遍历的对象
// 该方法接受第二个参数， 用于对每个元素进行处理，将处理后的值放入数组
// 该方法引用一个数组时会返回一个相同的并于引用数组指向不同内存地址的数组
{
    let arrayLike = {
        0: 'a',
        1: 'b',
        2: 'c',
        length: 3
    };

    console.log(Array.from(arrayLike));
    console.log(Array.from([1,2,3], (x) => x*2));   //[2,4,6]
    //常见类数组的对象是DOM操作返回的NodeList集合，以及函数内部的arguments对象。
    //所谓类数组，本质特征只有一点，有length属性。 因此任何有length属性的对象都可以通过Array.from转换
}

// 2. Array.of() 将一组值转换为数组（实际上是完善Array 或 new Array）
{
    Array.of(); // []
    Array.of(undefined); // [undefined]
    Array.of(1); // [1]
    Array.of(1, 2); // [1, 2]
}

// 3. 数组示例的find() 和 findIndex()
/**
 * 1. find方法用于找出第一个符合条件的数组成员，他的参数是一个回调函数，回调函数可以接受三个参数：依次为当前的值，当前的位置，原数组
 * 2. findIndex 返回一个符合条件的数组的成员的位置
 * */

{
    let arr = [1, 4, -5, 10];
    console.log(arr.find((value, index, arr) => {
        return value < 0;
    }));
    console.log(arr.findIndex((value, index, arr) => {
        return value < 0;
    }));
}

// 4. 数组示例的entries() keys() values() 方法
/**
 * 可以用for of循环 keys()是对键名的遍历 values()是对键值的遍历 entries()是对键值对的遍历
 * values() 方法编译失败。。。
 * */

{
    let arr = ['a', 'b', 'c'];

    for(let index of arr.keys()){
        console.log(index);
    }

    // for (let elem of ['a', 'b'].values()) {
    //     console.log(elem);
    // }

    for(let [index, elem] of arr.entries()){
        console.log(index, elem);
    }
}

// 空位的处理规则扔不统一 避免出现数组的空位