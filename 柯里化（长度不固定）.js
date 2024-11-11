function add(...args) {
  //求和
  return args.reduce((a, b) => a + b);
}
function currying(fn) {
  let args = [];
  return function temp(...newArgs) {
    if (newArgs.length) {
      args = [...args, ...newArgs];
      return temp;
    } else {
      let val = fn.apply(this, args);
      args = []; //保证再次调用时清空
      return val;
    }
  };
}
const addCurry = currying(add);

function curry(fn) {
  const arity = fn.length;
  return function curried(...args) {
    const newArgs = args.length === 0 ? [undefined] : args;
    if (newArgs.length > arity) return fn(...newArgs);
    return curried.bind(null, ...newArgs);
  };
}
