// ES5:
function sum() {
  let total = 0;
  Array.prototype.forEach.call(arguments, (item) => {
    total += item * 1;
  });
  return total;
}

// ES6:
function sum(...arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i] * 1;
  }
  return total;
}
