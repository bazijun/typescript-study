
console.log('hello typescript');

//声明一个变量a,且必须要指定该变量的类型
let a:number;

a=10;
a=23;
//a='sdf'   此行代码会报错，因为变量a的类型 是number,不能赋值成 字符串 

//声明变量完 就赋值
//let c:boolean = false;

//如果变量的声明和赋值是同时进行的，ts可以自动把变量进行类型检测
let c = false;
c= true

/* 函数参数也需要约束类型 */
function sum(a:number,b:number){
    return a+b
}

console.log(sum(123,3432));


/* 直接使用 字面进行类型声明 但值无法修改了，类似const常量 */
let k: 10;
/* k=12 */

/* 可以默认多个值，联合类型 */
let b: 'male' | 'fmale' | 'cmale';

/* any 任意类型,一个变量设置为了any,相当于关闭了此变量的TS的类型检测*/
/* 但不是特别推荐 */
/* let f: any; */

let f; //就像js那样声明变量，默认就是any类型（隐式any）
f='sting'
f=123

let s:string;
s=f  //f的类型是any，它可以赋值给任意变量,会把其他变量的ts类型检测也给关了

/* unkonwn 表示未知类型 */
/* unkonwn 相当于一个类型安全的 any */
/* unkonwn 变量不能直接赋值给其他变量 */
let u: unknown;
u=10;
u='hello';

/* 类型断言 可以用来告诉解析器变量的实际类型 */
s = u as string
s = <string>u

/* void 表示返回值为空， */
function fn():void{

}

/* never 表示永远不会返回结果  */
/* 连undefined都不返回 */
/* 一般用来报错 */
function fn2():never{
    throw new Error('报错了！')
}