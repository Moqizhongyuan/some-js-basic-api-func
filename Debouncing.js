function debounce(fn, wait) {
  const timer = null;
  return function () {
    let context = this;
    let args = arguments;

    // 如果存在计时器，则清除掉
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    // 设置定时器，间隔相应时间后执行
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}
