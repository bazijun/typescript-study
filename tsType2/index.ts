/* Object 表示一个js对象 */
let a:object;
a={};
a=function(){
    
}

/* {} 用来指定对象中可以包含哪些属性 */
//语法：{属性名：属性值、属性名：属性值}
//在属性名后边加上？表示属性是可选的

let b: {name:string,age?:number};
b={name:'孙悟空',age:23};

/* [propName:stirng]:any 可匹配多个任意类型属性， */
let c: {name:string,[propName:string]:any};
c={name:'李四',age:15,sex:'男'}

/* 设置函数结构的类型声明
    语法 (行参:类型，行参：类型...) => 返回值
*/
let d: (a:number,b:number)=>number;
d = function(n1,n2){
    return n1+n2
}

/* string[] 表示字符串数组 */
let e:string[];
e=['a','b','c'];

//number[] 表示数值数组
let f: number[];
f=[1,23,22]

let g:Array<number>;
g=[1,2,3]

/* 元组，元组是固定长度的数组 */
/* 
    语法 [类型，类型，类型]
*/
let h:[string,number,boolean];
h=['stirng',12,true]

/* enum 枚举, 增加可读性,枚举的参数可以赋值，也可以不用  */
enum Gender{
    Male,
    Female
}

let i: {name:string,gender:Gender};

i ={
    name:'张三',
    gender:Gender.Male
}

/* 基本数据类型 定义类型 | 的用法 */
let j: string | number
j=12
j='把子君'

/* & 一般只会用在对象上 */
let k: {name:string} & {age:number};
k={name:'孙悟空',age:123}

/* 定义类型的别名 */
type myType = 1 | 2 | 3 | '上'
let z:myType
z='上'
z=1
z=2
z=3