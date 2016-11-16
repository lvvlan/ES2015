/**
 * Des
 * Created by luowei5 on 2016/11/15.
 * E-mail luowei5@jd.com
 * Update 2016/11/15
 */
//数值

// 1. 二进制和八进制表示法
/**
 * 二进制用前缀 0b（或0B）表示
 * 八进制用前缀 0o（或0O）表示
 * */
{
    console.log(0b111110111 === 503);   //true
    console.log(0o767 === 503); //true
}
//可以用Number方法将前缀为0b或者0o的字符串数值转换为10进制
{
    console.log(Number('ob111'));   //7
    console.log(Number('0o10'));    //8
}

// 2. ES6将全局的parseInt() 和 parseFloat()方法，移植到Number对象上面 行为完全保持不变
{
    // ES5的写法
    parseInt('12.34'); // 12
    parseFloat('123.45#'); // 123.45

    // ES6的写法
    Number.parseInt('12.34'); // 12
    Number.parseFloat('123.45#'); // 123.45
}

// 3. Number的其他方法
{
    //判断一个值是否为整数 -> Number.isInteger()
    Number.isInteger(25); // true
    Number.isInteger(25.0); // true
    Number.isInteger(25.1); // false
    Number.isInteger("15"); // false
    Number.isInteger(true); // false
}

// 4. Math对象的扩展
{
    // Math.trunc() 去除一个数的小数部分 返回整数部分; 对于非数值，Math.trunc内部使用Number方法将其先转为数值。 对于空值和无法截取整数的值，返回NaN。
    Math.trunc(4.1); // 4
    Math.trunc(4.9); // 4
    Math.trunc(-4.1); // -4
    Math.trunc(-4.9); // -4
    Math.trunc(-0.1234); // -0

    //Math.sign() 判断一个数到底是正数、负数、还是0
    Math.sign(-5); // -1
    Math.sign(5); // +1
    Math.sign(0); // +0
    Math.sign(-0); // -0
    Math.sign(NaN); // NaN
    Math.sign('foo'); // NaN
    Math.sign();      // NaN

    //Math.hypot() 返回所有参数的平方和的平方根
    Math.hypot(3, 4);        // 5
    Math.hypot(3, 4, 5);     // 7.0710678118654755
    Math.hypot();            // 0
    Math.hypot(NaN);         // NaN
    Math.hypot(3, 4, 'foo'); // NaN
    Math.hypot(3, 4, '5');   // 7.0710678118654755
    Math.hypot(-3);          // 3
}