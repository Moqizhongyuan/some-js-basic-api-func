interface Object {
  myAssign(target: any, ...sources: any[]): any;
}

Object.prototype.myAssign = function (target, ...sources) {
  const res = Object(target);
  sources.forEach((obj) => {
    if (obj !== null) {
      for (let key in obj) {
        res[key] = obj[key];
      }
    }
  });
  return res;
};
