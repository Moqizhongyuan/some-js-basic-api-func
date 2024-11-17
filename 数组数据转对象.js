function jsonToTree(data) {
  const res = [];
  if (!Array.isArray(data)) {
    return res;
  }
  const map = {};
  data.forEach((item) => {
    map[item.id] = item;
  });

  data.forEach((item) => {
    const parent = map[item.pid];
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      res.push(item);
    }
  });

  return res;
}

const source = [
  {
    id: 1,
    pid: 0,
    name: "body",
  },
  {
    id: 2,
    pid: 1,
    name: "title",
  },
  {
    id: 3,
    pid: 2,
    name: "div",
  },
];

console.log(jsonToTree(source));
