function throttle(fn, wait) {
  const dateNow = Date.now();

  return function () {
    const context = this;
    const args = arguments;
    const nowTime = Date.now();

    if (nowTime - dateNow > wait) {
      dateNow = nowTime;
      fn.apply(context, args);
    }
  };
}
