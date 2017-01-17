# Note
- 可以保存数据在localStorage, 直接新增属性即可
- JSON.parse()/JSON.stringify()
- 判断是否为NaN:`x!=x`, 因为NaN和任何值都不相等，包括自身

# 日期处理，Date类
- 获取当地时间
- 获取UTC时间
- 可以相减，结果为间隔毫秒数

# 字符串
## 取最后三个字符
s.slice(-3)
## 取一段
s.slice(1,4)

# 正则
##例子
var pattern = /\d+/g;  //   /xxxxx/g的形式
pattern.test(text);


# 布尔值
## 会转成`false`的值
- undefined
- null
- 0
- -0
- NaN
- "" //空字符串

# for in
可以遍历Object的所有属性。 遍历Array的时候比较特殊，拿到的是可枚举的index或property，因此一般不用for/in来遍历Array：
```
var a = [1,2,5];
for(index in a) {
    var item = a[index];
}
```

# with的用法
有点像临时变量，可以将某个对象作为作用于链的顶层
