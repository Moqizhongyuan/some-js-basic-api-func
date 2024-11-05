Array.prototype._reduce = function (callback, pre = 0) {
  if (typeof callback !== "function") {
    throw new Error("this is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    pre = callback(pre, this[i], i, this);
  }
  return pre;
};

console.log([1, 2, 3]._reduce((left, right) => left + right));
