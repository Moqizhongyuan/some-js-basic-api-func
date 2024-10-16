Function.prototype.myBind = function (context) {
  if (typeof this !== "function") {
    console.error("type error");
  }

  const args = [...arguments].slice(1);
  const fn = this;
  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};
