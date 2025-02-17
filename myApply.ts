interface Function {
  myApply(thisArg: Function, args: any[] | undefined): any;
}

Function.prototype.myApply = function (thisArg, args) {
  const context = thisArg || window;
  context[Symbol("fn")] = this;
  const result = context[Symbol("fn")](args);
  delete context[Symbol("fn")];
  return result;
};
