# 函数参数的默认值
在ES6之前，是不能直接为函数的参数指定默认值的，只能采用变通的方法
```
function(x,y){
    y = y||'world';  //若y为false则为world;否则是y的赋值
    console.log(x,y);    
}
```
或者
```
function(x,y){
    if(y==='undefined'){
        y='world';
    }
}
```
或者
```
function(x,y){
    if(arguments.length===1){
        y='world';
    }
}
```
**但是在ES6,可以==为函数参数指定默认值==**
```
function(x,y='world'){
    console.log(x,y);
}

function Point(x=0;y=0){
    this.x=x;
    this.y=y;
}
var point = new Point();
point // {x:0,y:0}
```
但是需要注意参数变量X是默认申明的，就不能再在函数体类用const或let再进行声明了。

## 函数默认值与解构赋值结合使用
```
function foo(x,y=5){
    console.log(x,y);
}
foo({x:1}); //1 5
foo;({x:1,y:10}) //1 1o
```
例2
```
function fetch(url,{body='',method='get',headers={}}){
    console.log(method);
}
//这里fetch函数有两个参数，第一个是一个地址，第二个是一个对象，这个对象有三个属性，只有第二个属性具有默认值。

//这里第二个参数不能为空，因为第二个参数没有默认值

fetch('172.22.4.2',{}); //get
fetch('172.22.4.2');   //undefined;  第二个参数不能为空值
```
以上情况第二个参数未设置默认值，不能为空。（因为它有两个属性未设置默认值。如果两个属性设置了默认值，则第二个参数可为空调用）
```
function fetch(url,{body='',method='get',headers={}}={}){  //这里把第二个参数默认为一个空对象
    console.log(method);
}

fetch('172.22.4.2')   //get
```

==辨析==
以下两个代码块 有何区别
```
function m1({x,y}={x:0,y:0}){
    return [x,y];
}
```
m1函数的参数是一个有两个具体属性的对象，他们的值分别为0，0。但没有通过解构设置这个参数的默认值。

相当于：function({x=0,y=0}){};

---


```
function m2({x=0,y=0}={}){
    return [x,y]
}

```
m2函数的参数是一个有两个具体属性的对象，他们的值分别为0，0。但是还有解构赋值给这个对象。

---
调用：
```

m1();  //[0,0]
m2();  //[0,0]
m1({}); //[undefined,undefined]
m2({}); //[0,0]
m1({x:1}); //[1,undefined]
m2({x:1}); //[1,0]
m1({y:1}); //[undefined,1]
m2({y:1}); //[0,1]
```
## 关于参数默认值的位置
通常情况下，默认参数是函数的尾参数，这样可以直接省略，也不会造成错误。否则，就不可省略该参数，即使这个参数设置了默认值。
```
function m3(x=1,y){
    return [x,y];
}

m3(2);  //[2,undefine]
m3();   //[1,undefine]
m3(,3); //error 报错
m3(undefine,3) //[1,3]
```
如果默认参数不是函数的尾参数，则不能省略该参数，除非把他设置为undefine，才会返回默认设置的值。

### 关于默认参数设置为undefine
如果默认参数设置为undefine，则会返回为它的默认值。null没有这个效果
```
function f(x=1,y=2){
    return [x,y];
}

f(undefined,undefined);   //[1,2]
f(undefined,null);        //[1,null]
```
### 关于函数的length属性
一般函数的length属性会返回它所含参数的个数

但是

若参数设置了默认值，则会返回没有设置默认值的参数的个数.这个情况下，==length属性会失真==
```
function f(x,y,z=1){
}
f().length; //2
```

## 作用域
默认参数的作用域先是函数作用域，然后才是全局作用域。 即使全局作用域有了这个变量名，也可以在函数的参数中使用这个变量名
```
let x=1;
function f(y=x){
    let x =2;
    return y;
}
 
f();   //1  (因为给y设置默认值x的时候，函数里面的x还没有定义，所以就是全局变量x
```
上述代码若没有在全局声明x则会报错： x is not defined 。

如果某个函数A的默认参数是另一个函数B。则函数B的作用域为全局作用域。函数A的作用域是其声明时的作用域。
```
let foo = "outter"  //定义全局变量
function A(func=x=>foo){
    let foo = "inner",
    console.log("A里的foo"+fool);   //inner
    conslog.log("B里的foo"+func()); //outter
}
```
应用：可以设置函数中的某个参数不能为空
```
function throwerror(){
    throw new Error("Missing parameter");
}
function foo(mustParameter = throwerror()){
    return mustParameter;
}
foo();  //Missing parameter
```
这里的foo函数的参数默认值为throwerror()函数的结果，如果foo()无参数调用的话，就会默认执行throwerror函数。

所以就会抛出错误。