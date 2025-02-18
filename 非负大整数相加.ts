function sumBigNumber(a: string, b: string): string {
  const aNum = [...a].reverse(),
    bNum = [...b].reverse();
  let ans = "",
    tempA = 0,
    tempB = 0,
    pre = 0,
    temp = 0;
  for (let i = 0; i < aNum.length || i < bNum.length; i++) {
    tempA = i < aNum.length ? Number(aNum[i]) : 0;
    tempB = i < bNum.length ? Number(bNum[i]) : 0;
    temp = tempA + tempB + pre;
    pre = 0;
    if (temp >= 10) {
      temp %= 10;
      pre = 1;
    }
    ans = temp + ans;
  }
  if (pre) ans = pre + ans;
  return ans;
}
