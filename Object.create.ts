function myObjectCreate(obj: any) {
  function Fn() {}
  Fn.prototype = obj;
  return new Fn();
}
