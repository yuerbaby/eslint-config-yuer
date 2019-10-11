/**
 * section 0 准备
 */

var foo = 0;
var bar = function () {};
var condition = function () {};
var items = [];

/**
 * section 1 格式
 */

// [MUST] 大括号 所有的控制结构都要求使用大括号，比如if，else，for，while以及其他，即使大括号中只有一条语句。
for (var i = 0; i < 100; i++) bar();

if (foo) foo++;

// [MUST] 对于非空块大括号的使用，遵循以下几条：
// 左大括号前没有换行；
// 左大括号后需要换行；
// 右大括号前需要换行；
// 右大括号如果是用来结束一条语句或函数、类或类中方法，则它后面需要换行，除非它后面跟else，catch，while或者逗号、分号、右括号。
function login (name)
{
  if (condition(name)) { bar(); }
}

// [MUST] 缩进 使用两个空格代替tab来进行缩进，每开始一个新的代码块时，都在原缩进基础上增加一个缩进级别，当该块结束时，回到之前的缩进级别。
if (foo) {
    foo++;
	bar(foo);
}

// [MUST] 分号 每条语句必须以分号结束，分号不得省略。
if (foo) {
  foo++
  bar(foo)
}

// [RECOMMENDED] 空格
if(foo){
  bar(foo, foo ++);
}else {
  bar(foo);
}

// [MUST] 注释与被注释的代码保持相同的缩进级别，注释的内容部分与注释标识符之间保留一个空格。
if (foo) {
// bar(foo, foo ++);
  bar(foo); //注释
  // 注释
  bar(foo);
}

// [MUST] 换行 在类（原型）或对象字面量中，几个方法之间添加换行。
var obj = { a: 1, b: 2 };