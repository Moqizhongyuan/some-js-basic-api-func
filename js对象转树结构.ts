interface dataItem {
  id: number;
  pid: number;
  name: string;
  children?: dataItem[];
}

function jsonToTree(data: dataItem[]): dataItem[] {
  const result: dataItem[] = [],
    map: { [key: string]: dataItem } = {};
  data.forEach((item) => {
    map[item.id] = item;
  });
  data.forEach((item) => {
    if (map[item.pid]) {
      (map[item.pid].children || (map[item.pid].children = [])).push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}
