function flat(arr: any[], depth: number) {
  const res: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth) {
      res.push(...flat(arr[i], depth - 1));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
