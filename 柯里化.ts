function addNumbers(m: number) {
  const temp = (n: number) => {
    return addNumbers(m + n);
  };
  temp.valueOf = () => m;
  return temp;
}
