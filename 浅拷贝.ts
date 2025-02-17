// Object.assign()
// ...
// Array.prototype.slice()
// arr.concat()

function shallowCopy(obj: any) {
  const newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}
