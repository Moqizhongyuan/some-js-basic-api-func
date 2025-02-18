function RandomOutputArr(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex: number =
      Math.round(Math.random() * (arr.length - 1 - i)) + i;
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
}
