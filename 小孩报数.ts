function childNum(num: number, count: number): number {
  const childArr: number[] = new Array(num);
  let curNum = 1,
    curIndex = 0;
  for (let i = 0; i < num; i++) {
    childArr[i] = i + 1;
  }
  while (childArr.length > 1) {
    if (curNum === count) {
      childArr.splice(curIndex, 1);
      curNum = 1;
    }
    curIndex++;
    curIndex %= childArr.length;
    curNum++;
  }
  return childArr[0];
}
