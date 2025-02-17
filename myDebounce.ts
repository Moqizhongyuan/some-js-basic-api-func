function myDebounce(fn: any, timeout: number, ...args: any[]) {
  let timer: any = null;
  return function () {
    const context = this;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, timeout);
  };
}
