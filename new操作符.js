function myNew() {
  let newObj = null;
  const constructor = Array.prototype.shift.call(arguments);
  if (typeof constructor !== "function") {
    console.log("type err");
    return;
  }
  let result = null;
  newObj = Object.create(constructor.prototype);
  result = constructor.apply(newObj, arguments);
  let flag =
    result && (typeof result === "object" || typeof result === "function");
  return flag ? result : newObj;
}
