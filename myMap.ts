interface Array<T> {
  myMap(fn: any): any[];
}

Array.prototype.myMap = function (fn) {
  const res: any[] = [];
  for (let i = 0; i < this.length; i++) {
    res[i] = fn(this[i]);
  }
  return res;
};
