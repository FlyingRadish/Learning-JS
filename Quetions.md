## Js没有强数据类型，那么是如何确定这是一个含有哪些方法或属性的对象呢？难道都需要判断么
## 单引号，双引号的区别
JS和HTML经常会互相夹杂，因此最好使用各自独立的引号风格，例如JS用单引号，HTML用双引号
## append/appendChild 有什么不同
- appendChild是DOM method
- append是JQuery method(?为什么没有引入JQuery的情况下，Chrome还有document.append())
## createElement/createElementNS 有什么不同
createElementNS会创建一个带有制定命名空间的元素
```
a = document.createElement('div');
a.namespaceURI; //http://www.w3.org/1999/xhtml
v = document.createElementNS("http://www.w3.org/1999", 'div');
v.outerHTML; //"<div></div>"
v.namespaceURI; //http://www.w3.org/1999
```
## input的inputType如何实现？
- '<input>'有'type'标签，html5支持更多类型
- 'contenteditable'的话可以用js实现
## localStorage.setItem什么作用
类似`map.put()`
## 除了ajax，还有window.XMLHttpRequest
## encodeURI/encodeURIComponent
## 为什么不先注册onreadystatechange,再send
在其他地方看到确实是先注册，再send的，稳妥起见应该先注册
## Page39, length为2但实际为1
## slice和substring有什么区别
(stackoverflow)[http://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring]

`start > stop`的情况，`substring()` 会交换参数位置(WTF?!)，而`slice()`不会
## 实现search and replace
## 全局对象，Page45
## call/apply/bind
(参考)[http://rangercyh.blog.51cto.com/1444712/1615809]
### 前置知识点
1. JS中，函数其实也是对象，他们都有一个公共的`prototype`--`Function`，这个原型带有几个属性和方法，其中就有`bind`，`call`， `apply`方法。
2. JS中，函数调用会自动添加2个形参，分别是`this`和`arguments`，默认情况下this是没办法改的。比如在console中，一开始this=window。

### 作用
`call`和`apply`都可以改变`this`的绑定和传入`arguments`。 有点函数式编程的感觉，将自定的对象作为一个function的this传入，得到这个function的输出结果。

`call`和`apply`的区别在于`apply`的`argument`s接受数组形式，`call`则是一个一个传入

`bind`作用类似，不过是生成了一个新的函数，并不马上调用，而是想什么时候调就什么时候调
## React比JQuery先进在哪儿？
两者没有可比性，React处理的是状态跳转时的变化+虚拟DOM，JQuery主要是做DOM操作
## 标签(identifier)的用法？
