function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left);
  const myPrototype = right.prototype;
  while (true) {
    if (!proto) {
      return false;
    }
    if (proto === myPrototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
}
