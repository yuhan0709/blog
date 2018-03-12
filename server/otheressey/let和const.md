## let和var的区别
### 1、let申明的变量只在它所在的代码区里有效
```
for(let i = 1;i<10;i++){ }
console.log(i); //报错
```
### 2、let没有“变量提升”，必须要在申明之后使用
```
console.log(i); //报错
let i; 
```
### 3、let会出现暂时性死区
```
var tmp = 1;      //申明了一个tmp变量
if(true){
    tmp="abc";    //无法更改tmp变量，因为在后面申明了let tmp;已经把这个代码块绑死了。
    let tmp;   
}
```
**隐藏的暂时性死区**
```
function bar(x=y,y=2){
    return [x,y];
}
bar(); //会报错
```
这里会报错是因为，x的默认值是y,但是y没有申明，属于死区
```
function bar(y=2,x=y){
    return [x,y];
}
bar();   //这样是正确的。
```
### 4、无块级作用域问题
```
var tmp = new Date();
function f(){
    consloe.log(tmp);
    if(false){
        console(1);
        var tmp = "hello world";
    }
}
f(); //会在控制台打出undefine;
```
原因：ES5只有全局作用域和函数作用域，无块级作用域.虽然if(false){}语句没有执行（没有打出1），但是它在if语句申明的变量是属于函数作用域里的，会存在变量提升

把tmp的申明提升到函数作用域

相当于
```
var tmp = new Date();
function f(){
    var tmp;
    console.log(tmp);
    if(false){
        tmp = "hellp world";
    }
}
```
相当于在函数作用域申明了变量，但是是在if语句没有赋值。所以在函数作用域里的tmp是undefined; 所以会打印出undefined;

**ES6规定，在块级作用域外无法调用块级作用域所定义的函数。块级作用域内申明的函数不会影响到外部作用域的使用**
```
		function f(){
			var tmp = 1;
			if(1){
			    console.log('if is true');
				let tmp = 2;
			}
			console.log(tmp);
		}
		f(); 
		//if is true;
		   1;
```
在ES6中，用let声明变量。if中是一个块级作用域，即使if中语句是正确的，但是let的tmp只属于if这一个块级作用域。

所以输出的tmp还是f()这个函数作用域中的tmp;

### 5、不能重复申明变量,不能在函数内部重新申明参数
```
function f(){
    let a=10;
    var a=1; //error;
}

function f(a){
    let a=1; //error;
}
```
## 关于const
- 首先 const用来声明常量。一旦声明就不能改变。而且必须在声明时初始化。
- const也存在暂时性死区，必须在其声明后才可以使用
- const与let一样，不能重复声明常量
```
var massage = "hello";
let age =25;

//以下两行都是错的
const massage = "world";
const age =16;
```
- 对于复合型变量，变量名不指向数据，而是指向数据所在的地址。const命令只保证变量名指向的地址不变，

但是不保证地址里的数据不变
```
const foo = {}; //复合型变量
foo.prop = 123;
foo.prop; //123
foo; // error
```
如果真的也想将对象冻结，则应该是用Object.freeze方法
```
const foo = Object.freeze({});
foo.prop = 123; //不起作用
```
## 跨模块常量
const声明的常量只在当前代码块有效，但是如果想设置跨模块常量，可以采取下列方法
```
//constant.js 模块
export const A=1;
export const B=1;
export const C=1;

//test1.js模块
import * as constants form './constant.js'
console.log(constants.A);
console.log(Constants.B);

//test2.js模块
import {A,B} from './constant.js'
console.log(A);   // 1
console.log(B);   // 3
```

## 全局对象属性
全局对象是最顶层的对象，在浏览器环境指的是window对象，在Node.js中指的是global对象。

在ES5中，全局对象的属性与全局变量是等价的

```
window.a = 1;
a //1;

a=2;
window.a; //2;
```
在这里 window是全局对象。a是全局变量

在ES6中，用var命令和function命令声明的全局变量依旧是全局对象的属性。

另一方面规定。let和const命令声明的全局变量不属于全局对象的属性。
```
var a=1;
window.a; //1;

let b = 2;
window.b; //undefined
```
