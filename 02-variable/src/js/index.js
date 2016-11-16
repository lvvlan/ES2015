/**
 * Des
 * Created by luowei5 on 2016/11/15.
 * E-mail luowei5@jd.com
 * Update 2016/11/15
 */

//变量

/**
 * let
 * 1. 只在let所在的代码块有效（用在for循环里）
 * 2. 不存在变量提升，严格遵循先声明 后使用
 * 3. 暂时性死区
 * 4. 不允许重复声明
 * */

{
    let a = 5;

    alert(a);
}
{
    // 暂时性死区
    // 变量a使用let声明 所以声明之前 都属于a的死区 只要用到该变量就会报错
    typeof a;
    let a;
}

/**
 * 块级作用域， 似的IIFE不再必要
 * 允许在块级作用域中声明函数
 * */

{
    {
        {
            {
                {
                    let inTmp = 'hello';
                    {let inTmp = 'world';}
                }
            }
        }
    }
}

{
    function foo(a) {
        return a();
    }
    console.log(foo(5));
}

/**
 * const
 * 1. 声明一个只读的常量 一旦声明 不能更改
 * 2. 对于复合型的变量 const只会保证变量名执行的地址不变
 * */

{
    const a = {a: 1, b: 2};

    a.b = 3;
    console.log(a);
}