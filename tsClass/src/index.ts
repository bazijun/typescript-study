//使用 class 关键字定义 类
class Person{
    name:string = '张三';

    //在属性前使用 static关键字可以定义类属性(静态属性)
   static age:number = 15;
}

const per = new Person()

/* name是实例属性 通过实例 pre访问 */
console.log(per.name);



/* age是类的静态属性 需要通过类访问 */
console.log(Person.age);
