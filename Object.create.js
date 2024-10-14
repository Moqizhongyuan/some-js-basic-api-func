function myObjectCreate(obj) {
  function fn() {}
  fn.prototype = obj;
  return fn;
}
