interface Function {
  myCall(thisArg: any, ...args: any[]): any;
}

Function.prototype.myCall = function (thisArg: any, ...args: any[]) {
  const context = thisArg || window;
  context[Symbol("fn")] = this;
  const result = context[Symbol("fn")](...args);
  delete context[Symbol("fn")];
  return result;
};
