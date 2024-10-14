Function.prototype.myCall = function (context) {
  if (typeof this !== "function") {
    console.error("type err");
  }
  // 判断context
  context = context || window;
  const args = [...arguments].slice(1);

  // 引用该函数
  context.fn = this;
  const result = context.fn(...args);
  // 删除多余属性
  delete context.fn;
  return result;
};
