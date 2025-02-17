function myThrottle(fn: any, delay: number, ...args: any[]) {
  let date = Date.now();
  return function () {
    let currentDate = Date.now();
    const context = this;
    if (currentDate - date >= delay) {
      currentDate = Date.now();
      fn.apply(context, args);
    }
  };
}
