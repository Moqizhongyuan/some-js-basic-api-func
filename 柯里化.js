function add(m) {
  function temp(n) {
    return add(m + n);
  }

  temp.toString = function () {
    return m;
  };

  return temp;
}
