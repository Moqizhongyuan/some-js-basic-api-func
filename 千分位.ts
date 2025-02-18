function format(n: number) {
  const numStr = n + "",
    strArr = numStr.split("."),
    integerNum = [...strArr[0]],
    arr: string[] = [];
  let k = 0,
    res = "";
  while (integerNum.length) {
    arr.unshift(integerNum.pop() as string);
    k++;
    if (k === 3) {
      k = 0;
      arr.unshift(",");
    }
  }
  if (arr[0] === ",") arr.shift();
  res += arr.join("");
  if (strArr.length === 2) {
    res += "." + strArr[1];
  }
  return res;
}
