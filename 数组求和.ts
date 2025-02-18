function sum(arr: number[]): number {
  return arr
    .toString()
    .split(",")
    .reduce((pre, cur) => (pre += Number(cur)), 0);
}
