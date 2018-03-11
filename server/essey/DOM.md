# DOM(文档对象模型)
是针对HTML和XML文档的一个API（应用程序编程接口），可以将任何html或XML文档描绘成一个由多层节点构成的结构。

## DOM节点
HTML文档中的所有内容都是节点。
- 整个文档是一个文档节点
- 整个HTML元素是一个元素节点
- HTML元素内的文本是文本节点
- 每个HTML属性是属性节点
- 注释是注释节点

### 节点的父、子和同胞
父（parent）、子（child）和同胞（sibling）

---

每一个节点都有一个childNodes属性，其中保存这一个NodeList对象。NodeList是一种类数组对象，用于保存一组有序节点，可以通过位置来访问这些节点。
```
var firstChild = someNode.childNodes[0];
var secondChild = someNode.childNode.item(1);
var count = someNode.childNode.length;
```
对arguments对象使用Array.prototype.slice()方法可以将其转换为数组，用以下方法，也可以将NodeList对象转化为数组。
```
function convertToArray(nodes){
    var array = null;
    try {
        array = Array.prototype.slice.call(nodes,0);    //针对非IE8及其以下浏览器
    }catch(ex){
        array = new Array();
        for(var i=0,len=nodes.length;i<len;i++){
            array.push(nodes[i]);
        }
    }
    return array;
}
```
