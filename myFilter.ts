interface Array<T> {
  myFilter(fn: any): any[];
}

Array.prototype.myFilter = function (fn) {
  const res: any[] = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      res.push(this[i]);
    }
  }
  return res;
};
