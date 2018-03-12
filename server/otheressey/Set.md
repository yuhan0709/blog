# Set数据结构
## 基本用法
Set是ES6的提供的新数据结构，它类似于数组，只是Set对象里的成员都是唯一的，没有重复的值
```
var s = new Set();
[1,2,3,4,4,5].map(x=>s.add(x));
s.size(); //6
console.log(i of s);
//1,2,3,4,5
```
提一点：这里的map()是方法的作用是把每个元素通过函数传递到当前匹配的集合中，生成包含新返回值的新对象

set可以接受一个数组作为参数，用来初始化，但是会去掉数组中重复的元素
```
var s = new Set([1,3,3,4]);
alert(s);
//1,3,4
```
注意：
- 向Set对象中加入值时，Set不会发生类型转换，所以5和"5"是不同的。
- 判断Set内部的参数是否相同的时，用到的时精确相等运算符“===”。所以两个对象总是不相等的（因为他们占用的存储区域不同）。

## Set属性和方法
- Set.prototype.constructor： 构造函数。
- Set.prototype.size:返回Set实例中的成员总数

方法：分为操作方法和遍历方法
### 操作方法
- add(value)：插入数据，返回Set结构本身
- delete(value):删除数据，返回布尔值，表示删除是否成功
- has(value):判断value是否在Set中，返回布尔值
- clear(value):清空Set结构中的所有的值，没有返回值

### 遍历方法
- keys()：返回一个键名的遍历器
- values()：返回一个键值的遍历器
- entries():返回键名和键值的遍历器
- forEach()：使用回调函数遍历每个成员
注意：Set结构没有键名，只有键值，所以keys()和values()返回的都是键值
```
let set = new Set(['red','yellow','blue']);
for(let item of set.keys()){
    console.log(item);
}
//red
//yellow
//blue

for(let item of set.value()){
    console.log(item);
}
//red
//yellow
//blue

//两种结果相同

for(let item of set.entries()){
    console.log(item);
}
//["red","red"]
//["yellow","yellow"]
//["blue","blue"]
```
forEach接受的参数是一个函数，函数的参数依次为：键值，键名，返回的集合本身。
forEach也可接受另一个参数。表示绑定的this对象。
```
let set = new Set([1,2,3]);
set.forEach((key,value)=>console.log(value*2));
//2
//4
//6
```



