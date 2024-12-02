function once(fn) {
  let first = true;
  return function (...args) {
    if (first) {
      fn(...args);
      first = false;
    } else {
      return;
    }
  };
}
