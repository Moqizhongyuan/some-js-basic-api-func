function RandomArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = i + 1 + Math.floor(Math.random() * (arr.length - i));
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
}
