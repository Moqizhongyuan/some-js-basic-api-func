interface Function {
  myBind(thisArg: Function, ...args: any[]): any;
}

Function.prototype.myBind = function (thisArg, ...args) {
  const context = thisArg || window,
    fn = this;
  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};
