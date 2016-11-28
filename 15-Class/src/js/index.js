/**
 * Des
 * Created by luowei5 on 2016/11/15.
 * E-mail luowei5@jd.com
 * Update 2016/11/15
 */

/**
 * Class 定义类
 * 1. 类内部所有定义的方法，都是不可枚举的
 * 2. 不存在变量提升
 */
{
    class Foo{
        constructor(){
            this.x = '5';
        }

        say(){
            console.log(this.x);
        }
    }

    let f = new Foo();
    f.say();
}

//利用Symbol实现一个私有方法
{
    const bar = Symbol('bar');
    const snaf = Symbol('snaf');

    class MyClass {
        //公有方法
        foo(baz){
            console.log(this[bar](baz));
        }

        //私有方法
        [bar](baz){
            this[snaf] = baz;
            return this[snaf];
        }
    }

    let m = new MyClass();

    m.foo('abc');
}

//继承
{
    class Worker{
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        sayName() {
            return this.name;
        }

        sayAge() {
            return this.age;
        }
    }

    class Coder extends Worker{
        constructor(name, age, sexy) {
            super (name, age);
            this.sexy = sexy;
        }

        sayHello() {
            console.log(`my name is ${this.name}, im ${this.sayAge()} years old and im a ${this.sexy}`);
        }
    }

    let p = new Coder('Leon', 18, 'man');
    p.sayHello();
}

//静态方法
//ES6明确规定，Class内部只有静态方法，没有静态属性 ES7的提案允许添加静态属性
{
    class Foo{
        static classMethod() {
            console.log('这是一个静态的方法!');
        }
    }

    Foo.classMethod();
}
