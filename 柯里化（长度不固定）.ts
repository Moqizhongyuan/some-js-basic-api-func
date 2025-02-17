function currying(fn: any) {
  let args: any[] = [];
  return function curried(...newArgs: any[]) {
    if (args.length) {
      args = [...args, ...newArgs];
      return curried;
    } else {
      const res = fn.apply(this, args);
      args = [];
      return res;
    }
  };
}
