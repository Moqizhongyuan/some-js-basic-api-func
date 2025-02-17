function myInstanceOf(left: any, right: any) {
  let rightProto = right.prototype,
    leftProto = Object.getPrototypeOf(left);
  while (leftProto) {
    if (leftProto === rightProto) return true;
    leftProto = Object.getPrototypeOf(leftProto);
  }
  return false;
}
