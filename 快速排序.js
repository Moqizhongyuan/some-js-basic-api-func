const _quickSort = (array) => {
  if (array === null || array.length === 0) return array;
  let first = array.shift();
  let left = [];
  let right = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < first) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  console.log(left, right);
  left = _quickSort(left);
  right = _quickSort(right);
  left.push(first);
  return left.concat(right);
};

// 这里可以用取中间值，三数取中法，取随机数法来进行优化
