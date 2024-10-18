let obj1 = {
  a: 0,
  b: {
    c: 0,
  },
};

let obj2 = JSON.parse(JSON.stringify(obj1));
