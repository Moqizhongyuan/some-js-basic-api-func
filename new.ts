function newObj() {
  const constructor = arguments[0];
  const args = [...arguments].slice(1);
  const obj = Object.create(constructor.prototype);
  const res = constructor.apply(obj, args);
  return typeof res && (typeof res === "object" || typeof res === "function")
    ? res
    : obj;
}
